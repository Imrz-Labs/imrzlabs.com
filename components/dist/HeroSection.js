"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HeroSection = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "h-[90vh] sm:h-[80vh] 4xl:h-sc w-screen bg-black bg-[url('/hero.png')] bg-fixed bg-center bg-no-repeat" },
            react_1["default"].createElement("div", { className: "bg-brand-gradient inset-x-0 top-0 flex h-screen opacity-90 mix-blend-hue" })),
        react_1["default"].createElement("div", { className: "absolute 4xl:top-[25%] top-[30%] text-white" },
            react_1["default"].createElement("h1", { className: "hero-h1" }, "Making Emerging Technologies Accessible"),
            react_1["default"].createElement("p", { className: "hero-p" }, "The online world is changing, and with it comes opportunities to take your business forward by immersing your business in the latest developments in technology and the internet."),
            react_1["default"].createElement("a", { href: "#contact" },
                react_1["default"].createElement("button", { type: "button", className: "button-pink" }, "Talk To US")))));
};
exports["default"] = HeroSection;
