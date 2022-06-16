"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HeroSection = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "h-[90vh] sm:h-[80vh] 4xl:h-sc w-screen bg-black bg-[url('/hero.png')] bg-fixed bg-center bg-no-repeat" },
            react_1["default"].createElement("div", { className: "bg-brand-gradient inset-x-0 top-0 flex h-screen opacity-90 mix-blend-hue" })),
        react_1["default"].createElement("div", { className: "absolute 4xl:top-[25%] top-[30%] text-white" },
            react_1["default"].createElement("h1", { className: "mx-auto 4xl:text-lg w-full pb-5 text-center text-xl font-bold 4xl:leading-auto leading-[80px] 3xl:w-9/12 xl:w-10/12 xl:text-lg lg:w-10/12 md:w-10/12 md:text-base sm:w-full sm:text-sm" },
                "Making Emerging Technologies ",
                react_1["default"].createElement("br", null),
                "Accessible To All"),
            react_1["default"].createElement("p", { className: "mx-auto w-7/12 text-center text-sm 4xl:text-sm 4xl:leading-[-40px] leading-[46px] 3xl:w-7/12 3xl:px-10 xl:w-10/12 lg:w-10/12 md:w-10/12 md:text-xs sm:w-11/12 sm:text-tiny " }, "The online world is changing, and with it comes opportunities to take your business forward by immersing your business in the latest developments in technology and the internet."),
            react_1["default"].createElement("a", { href: "#contact" },
                react_1["default"].createElement("button", { type: "button", className: "button-pink" }, "Talk To US")))));
};
exports["default"] = HeroSection;