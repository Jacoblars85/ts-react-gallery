"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GalleryItem_1 = require("../GalleryItem/GalleryItem");
function GalleryList(_a) {
    var galleryList = _a.galleryList;
    console.log('galleryList', galleryList);
    return (<div>
      <header>
        <h1>Gallery list</h1>
      </header>

      {galleryList.map(function (galleryItem) {
            return (<div key={pic.id}>

              <GalleryItem_1.default galleryItem={galleryItem}/>
                
            </div>);
        })}
    </div>);
}
exports.default = GalleryList;
