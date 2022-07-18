import Article from "./components/Article"
import {useEffect, useState} from "react";

function App() {
  const [ids, setId] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/`, {mode: 'cors'})
    .then(res => res.json())
    .then(data => {setId(data)})
    }, [])

  return (
    <div className="App">
      {Object.keys(ids).map(key => 
        <Article
         name={ids[key].name}
         id={ids[key].id}
        />
      )}
    </div>
  );
}

export default App;
