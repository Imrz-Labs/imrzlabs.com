"use strict";

exports.__esModule = true;

var head_1 = require("next/head");

var react_1 = require("react");

var components_1 = require("../../../components");

var ProductCard_1 = require("../../../components/ProductCard");

var ProductHero_1 = require("../../../components/ProductHero");

var ventures = function ventures() {
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(head_1["default"], null, react_1["default"].createElement("title", null, "Imrz Products | Reality is your canvas!"), react_1["default"].createElement("meta", {
    name: "description",
    content: "Imrz Labs is a web 3.0 company created by industry 4 veterans who have started and sold highly scaleable tech companies with the goal to make emerging technologies accessible for everyone"
  }), react_1["default"].createElement("meta", {
    name: "keywords",
    content: "Immersive company, immersive agency, imrz, imrz labs, imrz agency, imrz products, imrz ventures, 3D, metaverse, oasis, ar, vr, xr, mr, tokenisation, mining, NFTs, DAOs, Defi, AI, Airdrops, Decentralization, Smart Contracts, Blockchain, Crypto, Web 3, Computer Vision, DApps, Phygital, Digital Twin, coins, Staking"
  }), react_1["default"].createElement("link", {
    rel: "icon",
    href: "/imrzicon.gif"
  })), react_1["default"].createElement("div", null, react_1["default"].createElement(components_1.TopMenu, null)), react_1["default"].createElement("div", null, react_1["default"].createElement(ProductHero_1["default"], null)), react_1["default"].createElement("div", null, react_1["default"].createElement(ProductCard_1["default"], null)), react_1["default"].createElement("div", null, react_1["default"].createElement(components_1.FormArea, null)), react_1["default"].createElement("div", null, react_1["default"].createElement(components_1.Footer, null)));
};

exports["default"] = ventures;