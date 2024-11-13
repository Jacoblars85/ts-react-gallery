function GalleryItem({ galleryItem }) {

    console.log('galleryItem', galleryItem);
    

    return (
      <div>
        <img src={galleryItem.pic}/>
        {galleryItem.title}
      </div>
    );
}

export default GalleryItem;