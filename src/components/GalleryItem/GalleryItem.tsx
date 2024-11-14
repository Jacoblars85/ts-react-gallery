function GalleryItem({ galleryItem }) {

    return (
      <div>
        <img src={galleryItem.url}/>
        {galleryItem.title}
        {galleryItem.description}
      </div>
    );
}

export default GalleryItem;