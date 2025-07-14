import React, { useState } from 'react';
import './UrlShortner.css'
const UrlShortner = () => {
    const [input, setInput] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shorten = async (e) => {
    e.preventDefault();
    if (!input) return;
    try {
      const resp = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(input)}`
      );
      const tiny = await resp.text();
      setShortUrl(tiny);
    } catch (err) {
      console.error(err);
      alert('Failed to shorten URL');
    }
  };

  return (
    <div className='main-cont'>
      <h2>URL Shortener</h2>
      <form onSubmit={shorten} className='url-form'>
        <input
          type="url"
          placeholder="https://example.com"
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ width: '100%', padding: '0.5rem' }}
        />
        <button type="submit">
          Shorten
        </button>
      </form>
      {shortUrl && (
        <p style={{ marginTop: '1rem' }}>
          Short URL:{' '}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </p>
      )}
    </div>
  );
}

export default UrlShortner
