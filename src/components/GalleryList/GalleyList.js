"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GalleryItem_1 = require("../GalleryItem/GalleryItem");
function GalleryList() {
    return (<div>
      <header>
        <h1>Gallery list</h1>
      </header>

      {gallery.map(function (pic) {
            return (<div key={pic.id}>

              <GalleryItem_1.default pic={pic}/>
                
            </div>);
        })}
    </div>);
}
exports.default = GalleryList;
