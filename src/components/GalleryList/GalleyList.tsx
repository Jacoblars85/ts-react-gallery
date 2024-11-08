import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList() {


  return (
    <div>
      <header>
        <h1>Gallery list</h1>
      </header>

      {gallery.map((pic) => {
            return (
            <div key={pic.id}>

              <GalleryItem pic={pic} />
                
            </div>
            )
          })}
    </div>
  );
}

export default GalleryList;
