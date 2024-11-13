import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList }) {

    console.log('galleryList', galleryList);
    

  return (
    <div>
      <header>
        <h1>Gallery list</h1>
      </header>

      {galleryList.map((galleryItem) => {
            return (
            <div key={galleryItem.id}>

              <GalleryItem galleryItem={galleryItem} />
                
            </div>
            )
          })}
    </div>
  );
}

export default GalleryList;
