import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, getGalleryList }: any) {
  return (
    <div>
      <div className="galleryListBox">
        {galleryList.map((galleryItem: any) => {
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
