import { useState } from 'react';

function GalleryItem({ galleryItem }) {

    const [isPicture, setIsPicture] = useState(false)

    const togglePicture = () => {
        setIsPicture(!isPicture)
      }

      const displayText = () => {
        if (isPicture) {
          return (
              <>
{galleryItem.description}
              </>
          )
        } else {
          return (
              <>
 <img src={galleryItem.url}/>
              </>
          )
        }
      }

    return (
      <div>
       
        {galleryItem.title}

      </div>
    );
}

export default GalleryItem;