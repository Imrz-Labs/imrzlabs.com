"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var image_1 = require("next/image");
var react_1 = require("react");
var components_1 = require("../../components");
var team = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(head_1["default"], null,
            react_1["default"].createElement("title", null, "Imrz Ventures | Reality is your canvas!"),
            react_1["default"].createElement("meta", { name: "description", content: "Imrz Labs is a web 3.0 company created by industry 4 veterans who have started and sold highly scaleable tech companies with the goal to make emerging technologies accessible for everyone" }),
            react_1["default"].createElement("meta", { name: "keywords", content: "Immersive company, immersive agency, imrz, imrz labs, imrz agency, imrz ventures, 3D, metaverse, oasis, ar, vr, xr, mr, tokenisation, mining, NFTs, DAOs, Defi, AI, Airdrops, Decentralization, Smart Contracts, Blockchain, Crypto, Web 3, Computer Vision, DApps, Phygital, Digital Twin, coins, Staking" }),
            react_1["default"].createElement("link", { rel: "icon", href: "/imrzicon.gif" })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(components_1.TopMenu, null)),
        react_1["default"].createElement("div", { className: "h-screen w-screen" },
            react_1["default"].createElement("div", { className: "bg-brand-gradient inset-x-0 top-0 flex h-screen opacity-80 mix-blend-hue" })),
        react_1["default"].createElement("div", { className: "absolute top-[30%] w-full text-white" },
            react_1["default"].createElement("div", { className: "ml-24 w-full" },
                react_1["default"].createElement(image_1["default"], { className: "flex items-start justify-start", src: "/imrzpeople.svg", alt: "Imrz Labs Agency", width: 350, height: 100 })),
            react_1["default"].createElement("h1", { className: "my-14 mx-auto ml-48 flex w-5/12 items-center justify-start text-left text-base font-bold 3xl:w-7/12 xl:w-10/12 lg:w-10/12 md:w-10/12 md:text-xs sm:w-11/12 sm:text-tiny " }, "The IMRZ eco-system expands daily and includes a roster of experience and innovation."),
            react_1["default"].createElement("a", { href: "http://" },
                react_1["default"].createElement("button", { type: "button", className: "hover:bg-brand-gradient ml-48 mb-20 flex h-[70px] w-[275px] items-center justify-center rounded-xl bg-pink-500 px-5 text-xs font-semibold uppercase text-white shadow transition ease-in-out hover:text-white hover:duration-150" }, "JOIN OUR DISCORD"))),
        react_1["default"].createElement("div", { className: "mt-[-33%]" },
            react_1["default"].createElement(image_1["default"], { className: "relative h-screen w-screen object-contain", src: "/team.png", alt: "Imrz Labs Agency", width: 350, height: 100, layout: "responsive" })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(components_1.FormArea, null)),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(components_1.Footer, null))));
};
exports["default"] = team;
