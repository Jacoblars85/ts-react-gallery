function GalleryItem({ galleryItem }) {

    console.log('galleryItem', galleryItem);
    

    return (
      <div>
        <img src="images/goat_small.jpg"/>
        {galleryItem.title}
      </div>
    );
}

export default GalleryItem;