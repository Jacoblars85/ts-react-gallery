"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GalleyList_1 = require("../GalleryList/GalleyList");
function App() {
    return (<div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>

        <GalleyList_1.default />
      </div>);
}
exports.default = App;
