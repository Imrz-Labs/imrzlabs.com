"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ProductHero = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "h-[90vh] sm:h-[80vh] bg-brand-gradient w-screen" },
            react_1["default"].createElement("div", { className: "pt-[110px] w-full text-white" },
                react_1["default"].createElement("div", { className: "m-auto w-9/12" },
                    react_1["default"].createElement("img", { className: "flex h-[115px] w-auto lg:hidden", src: "/imrzproducts.svg", alt: "Imrz Products" }),
                    react_1["default"].createElement("img", { className: "m-auto hidden lg:flex", src: "/imrzproducts-mid.png", alt: "Imrz Products" })),
                react_1["default"].createElement("h1", { className: "imrz-h1-hero mt-8" }, "We\u2019ve developed a number of Web3 focused products that demonstrate our innovation capability in the space."),
                react_1["default"].createElement("div", { className: "imrz-b-hero" },
                    react_1["default"].createElement("a", { href: "#contact" },
                        react_1["default"].createElement("button", { type: "button", className: "button-pink" }, "Build With US")))))));
};
exports["default"] = ProductHero;
