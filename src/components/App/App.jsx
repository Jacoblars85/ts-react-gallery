import GalleryList from "../GalleryList/GalleyList";


function App() {
    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>

        <GalleryList />
      </div>
    );
}

export default App;
