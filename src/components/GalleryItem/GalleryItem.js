"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GalleryItem(_a) {
    var galleryItem = _a.galleryItem;
    console.log('galleryItem', galleryItem);
    return (<div>
        <img src="images/goat_small.jpg"/>
        {galleryItem.title}
      </div>);
}
exports.default = GalleryItem;
