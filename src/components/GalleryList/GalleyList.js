"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GalleryItem_1 = require("../GalleryItem/GalleryItem");
function GalleryList() {
    return (<div>
      <header>
        <h1>Gallery list</h1>
      </header>

      {GalleryItem_1.default}
    </div>);
}
exports.default = GalleryList;
