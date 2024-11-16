import { useState } from "react";
import axios from 'axios';

function GalleryItem({ galleryItem, getGalleryList }) {
  const [isPicture, setIsPicture] = useState(false);

  const togglePicture = () => {
    setIsPicture(!isPicture);
  };

  const displayText = () => {
    if (isPicture) {
      return <>
      {galleryItem.description}
      </>
    } else {
      return (
        <>
          <img src={galleryItem.url} />
        </>
      );
    }
  };

  const likePicture = (e) => {
    const picId = e.target.id
    console.log('picid', picId);
    axios({
        url: `/api/gallery/like/${picId}`,
        method: 'PUT'
      }).then((response) => {
        getGalleryList();
      }).catch((error) =>{
        console.log(error, 'Error in updating gallery');
      })

}

  return (
    <>
    {galleryItem.title}

      <div className="toggledPic" onClick={togglePicture}>{displayText()}</div>

      <p>{galleryItem.likes > 0 ? `${galleryItem.likes} people love this!` : `No people love this :(`}</p>
      <button id={galleryItem.id} onClick={likePicture}>Like</button>
    </>
  );
}

export default GalleryItem;
