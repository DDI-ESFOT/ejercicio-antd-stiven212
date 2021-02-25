import React, { useState, useEffect } from "react";
import '../styles/App.css';
import './Cards';
import Cards from './Cards';
import { Row, Col, Input } from 'antd';

const { Search } = Input;
const onSearch = value => console.log(value);

function App() {

  const[movies, setMovies] = useState([]);
  const[element, setElement] = useState("");
  const[search, setSearch] = useState("");

  useEffect ( () => {

    const onSearch = (value) => {

      setSearch(value);

      setElement("");


    };

    const getData = async () => {  
      if(search){

        const response = await fetch(`https://www.omdbapi.com/?apikey=537fcb7&i&s=${search}`);
        const data = await response.json();

        setMovies(data.Search);
        console.log("Search", data);
      }
      
      getData();
   }
 }, [search]);


  return (
    <>
     <Row>
      <Col span={6} offset={9}>
      <Search placeholder="Ingrese pelicula a buscar" defaultValue={element} value={element} onChange={(e) => {
              console.log("e", e.target.value);
              setElement(e.target.value);
            }}
            enterButton onSearch={onSearch} onPressEnter={onSearch}   />
      </Col>
    
    </Row>
     
     <Row>
       <Col>
      
      {movies.length> 0 ? <Cards movies={movies} /> : "Sin resultados"}
       
       </Col>
    </Row>
    </>
  );
}

export default App;
