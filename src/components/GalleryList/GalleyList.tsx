import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, getGalleryList }) {
  return (
    <div>
      <header>
        <h1>Gallery list</h1>
      </header>

      {galleryList.map((galleryItem) => {
        return (
          <div key={galleryItem.id} className="galleryItemBox">
            <GalleryItem galleryItem={galleryItem} getGalleryList={getGalleryList} />
          </div>
        );
      })}
    </div>
  );
}

export default GalleryList;
