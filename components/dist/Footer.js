"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var image_1 = require("next/image");
var Footer = function () {
    return (react_1["default"].createElement("section", { className: "imrz-black pt-8 " },
        react_1["default"].createElement("div", { className: "pl-48 lg:pl-0 imrz-black m-auto flex h-auto w-full items-center justify-around lg:flex-col lg:pt-10 " },
            react_1["default"].createElement("div", { className: "" },
                react_1["default"].createElement(link_1["default"], { href: "/" },
                    react_1["default"].createElement("a", { className: "" },
                        react_1["default"].createElement(image_1["default"], { className: "h-auto object-cover", src: "/imrzlight.svg", alt: "Imrz Labs", width: 155, height: 25 })))),
            react_1["default"].createElement("div", { className: "m-auto lg:my-10" },
                react_1["default"].createElement("ul", { className: "flex items-center justify-center space-x-10 text-center font-semibold text-white md:w-full " },
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { target: "_blank", href: "https://www.imrz.blog", className: "link-style-default text-tiny text-white" }, "Blog")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(link_1["default"], { href: "/careers" },
                            react_1["default"].createElement("a", { className: "link-style-default text-tiny text-white indicator" },
                                react_1["default"].createElement("span", { className: "indicator-item font-normal text-tiny badge h-4 bg-brand-gradient text-white" }, "hiring"),
                                react_1["default"].createElement("div", { className: "grid h-8 place-items-center" }, "Careers")))),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(link_1["default"], { href: "/privacy" },
                            react_1["default"].createElement("a", { className: "link-style-default m-auto text-tiny text-white" }, "Privacy"))))),
            react_1["default"].createElement("div", { className: "pr-48 lg:pr-0 " },
                react_1["default"].createElement("ul", { className: "flex items-center gap-5" },
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "https://discord.gg/5eruR3BAH7" },
                            react_1["default"].createElement(image_1["default"], { src: "/discord.svg", alt: "Imrz Labs", width: 40, height: 40 }))),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { target: "_blank", href: "https://www.twitter.com/imrzlabs" },
                            react_1["default"].createElement(image_1["default"], { src: "/twitt.svg", alt: "Imrz Labs", width: 20, height: 20 }))),
                    react_1["default"].createElement("li", null,
                        ' ',
                        react_1["default"].createElement("a", { target: "_blank", href: "https://www.linkedin.com/company/imrzlabs" },
                            react_1["default"].createElement(image_1["default"], { src: "/linkedin.svg", alt: "Imrz Labs", width: 40, height: 40 })))))),
        react_1["default"].createElement("div", { className: "imrz-black w-full flex justify-center items-center m-auto py-10 text-center text-[15px] text-white lg:pt-0 lg:mt-20 lg:mb-2" }, "Copyright \u00A9 2022 IMRZ Labs")));
};
exports["default"] = Footer;
