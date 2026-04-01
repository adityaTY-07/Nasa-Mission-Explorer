import React, { useState, useEffect } from 'react';

const API_KEY = "MzPoi8GIrwo6CSo5eL7J4GKZK9TPg6PslmPTGWOF";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <h1>Loading Space Data...</h1>;

  return (
    <main>
      <h1>NASA Gallery</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.date}</p>
          
          {item.media_type === "image" ? (
            <img src={item.url} alt={item.title} style={{ width: '400px' }} />
          ) : (
            <p>Video link: {item.url}</p>
          )}

          <p>{item.explanation}</p>
          <hr />
        </div>
      ))}
    </main>
  );
}

export default App;