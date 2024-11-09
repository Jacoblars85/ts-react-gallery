"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GalleyList_1 = require("../GalleryList/GalleyList");
var react_1 = require("react");
var react_2 = require("react");
var axios_1 = require("axios");
require("./App.css");
function App() {
    var _a = (0, react_2.useState)([]), galleryList = _a[0], setGalleryList = _a[1];
    (0, react_2.useEffect)(function () {
        getGalleryList();
    }, []);
    var getGalleryList = function () {
        (0, axios_1.default)({
            method: 'GET',
            url: '/gallery'
        })
            .then(function (response) {
            setGalleryList(response.data);
        })
            .catch(function (error) {
            console.log('getGalleryList fail:', error);
        });
    };
    console.log('galleryList in app', galleryList);
    return (<div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>

        <GalleyList_1.default galleryList={galleryList} getGalleryList={getGalleryList}/>
      </div>);
}
exports.default = App;
