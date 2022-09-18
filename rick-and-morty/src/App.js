import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Pagination from './components/pagination';
import Characters from './components/characters';


function App() {

  const [characters, setCharacter] = useState([]);
  const [info, setInfo] = useState({})

  const initialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacter = (initialUrl) => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(data => {
        setCharacter(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error));
  }

  const onPrevious = () => {
    fetchCharacter(info.prev);
  }

  const onNext = () => {
    fetchCharacter(info.next);
  }

  useEffect(() => {
    fetchCharacter(initialUrl);
  }, [])


  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onNext={onNext} onPrevious={onPrevious} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onNext={onNext} onPrevious={onPrevious} />
      </div>
    </>
  );
}

export default App;
