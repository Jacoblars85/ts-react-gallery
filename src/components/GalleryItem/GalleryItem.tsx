import { useState } from "react";

function GalleryItem({ galleryItem }) {
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

  return (
    <>
      <div onClick={togglePicture}>{displayText()}</div>

      {galleryItem.title}
      <button>Like</button>
    </>
  );
}

export default GalleryItem;
