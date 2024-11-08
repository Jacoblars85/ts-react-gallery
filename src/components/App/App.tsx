import GalleryList from "../GalleryList/GalleyList";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const [gallery, setGallery] = useState([])

  useEffect(() => {
    getGallery()
  }, [])
  
    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>

        <GalleryList />
      </div>
    );
}

export default App;
