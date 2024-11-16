import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, getGalleryList }) {
  return (
    <div>
      <div className="galleryListBox">
        {galleryList.map((galleryItem) => {
          return (
            <div key={galleryItem.id} className="galleryItemBox">
              <GalleryItem
                galleryItem={galleryItem}
                getGalleryList={getGalleryList}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GalleryList;
