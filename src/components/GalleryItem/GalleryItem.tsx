import { useState } from 'react';

function GalleryItem({ galleryItem }) {

    const [isPicture, setIsPicture] = useState(false)

    return (
      <div>
        <img src={galleryItem.url}/>
        {galleryItem.title}
        {galleryItem.description}
      </div>
    );
}

export default GalleryItem;