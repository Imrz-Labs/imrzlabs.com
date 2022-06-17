"use strict";

exports.__esModule = true;

var head_1 = require("next/head");

var image_1 = require("next/image");

var router_1 = require("next/router");

var react_1 = require("react");

var thanks = function thanks() {
  var router = router_1.useRouter();
  react_1.useEffect(function () {
    setTimeout(function () {
      router.push('/');
    }, 5000);
  }, []);
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(head_1["default"], null, react_1["default"].createElement("title", null, "Form Successful | Imrz Labs"), react_1["default"].createElement("meta", {
    name: "description",
    content: "Imrz Labs is a web 3.0 company created by industry 4 veterans who have started and sold highly scaleable tech companies with the goal to make emerging technologies accessible for everyone"
  }), react_1["default"].createElement("meta", {
    name: "keywords",
    content: "Immersive company, immersive agency, imrz, imrz labs, imrz agency, imrz ventures, 3D, metaverse, oasis, ar, vr, xr, mr, tokenisation, mining, NFTs, DAOs, Defi, AI, Airdrops, Decentralization, Smart Contracts, Blockchain, Crypto, Web 3, Computer Vision, DApps, Phygital, Digital Twin, coins, Staking"
  }), react_1["default"].createElement("link", {
    rel: "icon",
    href: "/imrzicon.gif"
  })), react_1["default"].createElement("div", null, react_1["default"].createElement(components_1.TopMenu, null)), react_1["default"].createElement("div", {
    className: "m-auto bg-white flex h-screen w-full flex-col items-center justify-center gap-y-5 overflow-hidden pb-[-250px] text-center"
  }, react_1["default"].createElement(image_1["default"], {
    src: "/Success.png",
    width: 250,
    height: 250
  }), react_1["default"].createElement("div", {
    className: "text-lg"
  }, "Thank You!"), react_1["default"].createElement("div", {
    className: "text-base"
  }, "The form was submitted successfully."), react_1["default"].createElement("div", null, "Redirecting in 3...")), react_1["default"].createElement("div", null, react_1["default"].createElement(components_1.Footer, null)));
};

exports["default"] = thanks;