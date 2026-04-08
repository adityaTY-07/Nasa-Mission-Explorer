import React, { useState, useEffect } from 'react';

const KEY = "MzPoi8GIrwo6CSo5eL7J4GKZK9TPg6PslmPTGWOF";

function App() {
  const [arr, setArr] = useState([]);
  const [load, setLoad] = useState(true);
  
  const [str, setStr] = useState("");
  const [dt, setDt] = useState("");
  const [typ, setTyp] = useState("all");
  const [srt, setSrt] = useState("new");
  
  const [mod, setMod] = useState(null);
  const [hd, setHd] = useState(false);
  const [thm, setThm] = useState("dark");

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${KEY}&count=30`)
      .then(res => res.json())
      .then(val => {
        setArr(val);
        setLoad(false);
      })
      .catch(err => {
        console.log(err);
        setLoad(false);
      });
  }, []);

  const toggleThm = () => {
    const next = thm === "dark" ? "light" : "dark";
    setThm(next);
    if (next === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  };

  let list = arr;

  if (dt) {
    const found = list.find(x => x.date === dt);
    list = found ? [found] : [];
  } else {
    if (str) {
      list = list.filter(x => 
        x.title.toLowerCase().includes(str.toLowerCase())
      );
    }
    
    if (typ !== "all") {
      list = list.filter(x => x.media_type === typ);
    }

    list = [...list].sort((a, b) => {
      let d1 = new Date(a.date);
      let d2 = new Date(b.date);
      if (srt === "new") return d2 - d1;
      return d1 - d2;
    });
  }

  if (load) return <h1 style={{color:"white", textAlign:"center", marginTop:"2rem"}}>Loading Space Data...</h1>;

  return (
    <main>
      <header>
        <h1>NASA Mission Explorer</h1>
        
        <div className="controls">
          <input 
            type="text" 
            placeholder="Search keywords..." 
            value={str} 
            onChange={e => setStr(e.target.value)} 
          />
          <input 
            type="date" 
            value={dt} 
            onChange={e => setDt(e.target.value)} 
          />
          <select value={typ} onChange={e => setTyp(e.target.value)}>
            <option value="all">All Media</option>
            <option value="image">Images Only</option>
            <option value="video">Videos Only</option>
          </select>
          <select value={srt} onChange={e => setSrt(e.target.value)}>
            <option value="new">Newest First</option>
            <option value="old">Oldest First</option>
          </select>
          <button onClick={toggleThm}>
            {thm === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      <section className="grid">
        {list.length === 0 ? <p>No results found.</p> : null}
        
        {list.map((item, idx) => (
          <div key={idx} className="card">
            <div className="img-box" onClick={() => { setMod(item); setHd(false); }}>
              {item.media_type === "image" ? (
                <img src={item.url} alt={item.title} />
              ) : (
                <iframe src={item.url} title={item.title} frameBorder="0" />
              )}
            </div>
            <div className="info">
              <h2>{item.title}</h2>
              <p className="date">{item.date}</p>
              <p className="desc">{item.explanation}</p>
              <div className="btn-row">
                <button onClick={() => { setMod(item); setHd(false); }}>View</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {mod !== null && (
        <div className="modal-bg" onClick={() => setMod(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setMod(null)}>X</button>
            {mod.media_type === "image" ? (
              <img src={hd ? mod.hdurl : mod.url} alt={mod.title} />
            ) : (
              <iframe src={mod.url} style={{width:'100%', height:'400px'}} frameBorder="0" />
            )}
            <div className="modal-info">
              <h2>{mod.title}</h2>
              <p>{mod.date}</p>
              <p>{mod.explanation}</p>
              {mod.media_type === "image" && (
                <button onClick={() => setHd(!hd)}>
                  {hd ? "View Standard Res" : "View High Res (HD)"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;