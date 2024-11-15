import { useState } from 'react';

function GalleryItem({ galleryItem }) {

    const [isPicture, setIsPicture] = useState(false)

    const togglePicture = () => {
        setIsPicture(!isPicture)
      }

    return (
      <div>
        <img src={galleryItem.url}/>
        {galleryItem.title}
        {galleryItem.description}
      </div>
    );
}

export default GalleryItem;