function GalleryItem({ galleryItem }) {

    console.log('galleryItem', galleryItem);
    

    return (
      <div>
        <img src={galleryItem.url}/>
        {galleryItem.title}
      </div>
    );
}

export default GalleryItem;