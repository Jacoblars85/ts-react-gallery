import GalleryList from "../GalleryList/GalleyList";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const [galleryList, setGalleryList] = useState([])

  useEffect(() => {
    getGalleryList()
  }, [])

  const getGalleryList = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then((response) => {
        setGalleryList(response.data)
      })
      .catch((error) => {
        console.log('getGalleryList fail:', error);
      })
  }

    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>

        <GalleryList galleryList={galleryList} getGalleryList={getGalleryList} />
      </div>
    );
}

export default App;
