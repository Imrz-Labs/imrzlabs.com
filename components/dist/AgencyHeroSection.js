"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AgencyHeroSection = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "h-[90vh] sm:h-[80vh] bg-brand-gradient w-screen" },
            react_1["default"].createElement("div", { className: "md:pt-[110px] 4xl:pt-[160px] w-full text-white" },
                react_1["default"].createElement("div", { className: "m-auto w-9/12 flex justify-center" },
                    react_1["default"].createElement("img", { className: "pb-10 h-auto w-auto hidden", src: "/imrzagency.svg", alt: "Imrz Agency" }),
                    react_1["default"].createElement("img", { className: "m-auto flex 4xl:mb-8 md:m-0", src: "/imrzagency-mid.svg", alt: "Imrz Agency" })),
                react_1["default"].createElement("h1", { className: "imrz-h1-hero md:mt-8" }, "Use our experience, insight and agility to elevate your business and deliver future focused solutions."),
                react_1["default"].createElement("div", { className: "imrz-b-hero" },
                    react_1["default"].createElement("a", { href: "#contact" },
                        react_1["default"].createElement("button", { type: "button", className: "button-pink" }, "Talk To US")))))));
};
exports["default"] = AgencyHeroSection;
