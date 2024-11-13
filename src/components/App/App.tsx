import GalleryList from "../GalleryList/GalleyList";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const [galleryList, setGalleryList] = useState([]);

  const getGalleryList = () => {
    console.log('am i getting');
    
    axios({
      method: 'GET',
      url: '/api/gallery'
    })
      .then((response) => {
        setGalleryList(response.data)
      })
      .catch((error) => {
        console.log('getGalleryList fail:', error);
      })
  }

  useEffect(() => {
    getGalleryList()
  }, [])



  console.log('galleryList in app', galleryList);
  

    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <GalleryList galleryList={galleryList} getGalleryList={getGalleryList} />
      </div>
    );
}

export default App;
