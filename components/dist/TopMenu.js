"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var image_1 = require("next/image");
var TopMenu = function () {
    var showiosnav = {
        background: 'white',
        height: '64px',
        width: '100%',
        position: 'fixed',
        zIndex: 100
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "fixed z-50 flex h-[85px] w-full items-center bg-white backdrop-blur-md md:m-0 md:hidden md:flex-col md:items-center " },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement("a", { className: "md:auto my-auto flex-none 3xl:ml-[145px] 2xl:ml-auto xl:ml-[-10px] lg:m-auto md:mx-auto  md:mr-[-15%] md:mt-5 md:w-auto sm:ml-[-55px]" },
                    React.createElement(image_1["default"], { src: "/logo.svg", className: "logo-setting", alt: "Imrz Labs", width: 300, height: 32 }))),
            React.createElement("div", { className: "mr-[3.5rem] flex w-full justify-end 3xl:w-7/12 2xl:w-full md:mx-auto md:mt-[-70%] md:flex-col" },
                React.createElement("nav", { className: "my-auto mr-10 flex items-start space-x-14 lg:space-x-10 md:m-auto md:flex-col md:space-y-20 " },
                    React.createElement(link_1["default"], { href: "/agency" },
                        React.createElement("a", { className: "link-style-default hover:text-blue-500" }, "Agency")),
                    React.createElement(link_1["default"], { href: "/products" },
                        React.createElement("a", { className: "link-style-default hover:text-pink-500" }, "Products"))),
                React.createElement("a", { href: "#contact" },
                    React.createElement("button", { type: "button", className: "hover:bg-brand-gradient imrz-blue h-[50px] w-[150px] rounded-md px-5 text-xs font-semibold uppercase text-white shadow lg:h-[45px] lg:w-[100px] lg:text-tiny md:m-auto md:mb-5 md:ml-[80%] sm:ml-[76%]" }, "Contact")))),
        React.createElement("div", { className: "bg-white z-50 h-[64px] fixed w-full" },
            React.createElement("input", { id: "my-drawer-4", type: "checkbox", className: " drawer-toggle " }),
            React.createElement("div", { className: "drawer-content" },
                React.createElement("label", { htmlFor: "my-drawer-4", tabIndex: "2", className: "btn btn-ghost btn-circle z-50 mt-2" },
                    React.createElement("svg", { fill: "none", height: "44", viewBox: "0 0 24 24", width: "44", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("path", { d: "M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z", fill: "currentColor" }),
                        React.createElement("path", { d: "M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z", fill: "currentColor" }),
                        React.createElement("path", { d: "M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z", fill: "currentColor" })))),
            React.createElement("div", { className: "drawer-side  " },
                React.createElement("label", { htmlFor: "my-drawer-4", className: "drawer-overlay" }),
                React.createElement("ul", { className: "imrz-text menu w-80 overflow-y-auto bg-white p-4" },
                    React.createElement("li", null,
                        React.createElement("a", { href: "/agency" }, "Agency")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "/products" }, "Products")))),
            React.createElement("div", { className: "flex absolute justify-center item-center w-full mt-[-46%]" },
                React.createElement(link_1["default"], { href: "/" },
                    React.createElement("a", { className: "" },
                        React.createElement("img", { src: "/logo.svg", className: "max-h-6", alt: "Imrz Labs" })))),
            React.createElement("div", { className: "flex justify-end mt-[-49%] mr-2" },
                React.createElement("a", { href: "#contact" },
                    React.createElement("button", { type: "button", className: "hover:bg-brand-gradient imrz-blue h-[40px] w-[120px] rounded-md object-scale-down text-tiny font-semibold uppercase text-white shadow transition ease-in-out hover:duration-150 sm:hidden" }, "Contact")),
                React.createElement("a", { href: "#contact" },
                    React.createElement("button", { className: "imrz-blue btn btn-ghost rounded-lg md:hidden sm:flex" },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-7 w-7", viewBox: "0 0 20 20", fill: "#ffffff" },
                            React.createElement("path", { d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" }),
                            React.createElement("path", { d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" }))))))));
};
exports["default"] = TopMenu;
