"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var router_1 = require("next/router");
var FormArea = function () {
    var _a = react_1.useState(""), inputValue = _a[0], setInputValue = _a[1];
    var router = router_1.useRouter();
    var onChange = function (e) {
        setInputValue(e.target.value);
    };
    var _b = react_1.useState({
        forename: '',
        surname: '',
        email: '',
        company: '',
        message: ''
    }), query = _b[0], setQuery = _b[1];
    // Update inputs value
    var handleParam = function () { return function (e) {
        var name = e.target.name;
        var value = e.target.value;
        setQuery(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[name] = value, _a)));
        });
    }; };
    // Form Submit function
    var formSubmit = function (e) {
        router.push("/thanks" + inputValue);
        e.preventDefault();
        var formData = new FormData();
        Object.entries(query).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            formData.append(key, value);
        });
        fetch('https://getform.io/f/fff5dcb9-386d-4296-8b90-143becb470a8', {
            method: 'POST',
            body: formData
        }).then(function () {
            return setQuery({
                forename: '',
                surname: '',
                email: '',
                company: '',
                message: ''
            });
        });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { id: "contact", className: "bg-brand-gradient w-full" },
            react_1["default"].createElement("h2", { className: "py-20 text-center text-base font-bold text-white md:text-sm" }, "Get In Touch"),
            react_1["default"].createElement("form", { className: "m-auto w-6/12 xl:w-8/12 lg:w-9/12 md:w-11/12", onSubmit: formSubmit },
                react_1["default"].createElement("div", { className: "imrz-text-black grid grid-cols-2 gap-5" },
                    react_1["default"].createElement("div", { className: "mb-3 pt-0" },
                        react_1["default"].createElement("p", { className: "text-white" }, "First Name"),
                        react_1["default"].createElement("input", { type: "text", name: "forename", className: "form-input", required: true, value: query.forename, onChange: handleParam() })),
                    react_1["default"].createElement("div", { className: "mb-3 pt-0" },
                        react_1["default"].createElement("p", { className: "text-white" }, "Last Name"),
                        react_1["default"].createElement("input", { type: "text", name: "surname", className: "form-input", required: true, value: query.surname, onChange: handleParam() }))),
                react_1["default"].createElement("div", { className: "imrz-text-black grid grid-cols-2 gap-5" },
                    react_1["default"].createElement("div", { className: "mb-3 pt-0" },
                        react_1["default"].createElement("p", { className: "text-white" }, "Email"),
                        react_1["default"].createElement("input", { type: "email", name: "email", className: "form-input", required: true, value: query.email, onChange: handleParam() })),
                    react_1["default"].createElement("div", { className: "mb-3 pt-0" },
                        react_1["default"].createElement("p", { className: "text-white" }, "Company Name"),
                        react_1["default"].createElement("input", { type: "text", name: "company", className: "form-input", required: true, value: query.company, onChange: handleParam() }))),
                react_1["default"].createElement("div", { className: "mb-3 pt-0" },
                    react_1["default"].createElement("p", { className: "text-white" }, "Description (Optional)"),
                    react_1["default"].createElement("textarea", { name: "message", className: "form-input", value: query.message, onChange: handleParam() })),
                react_1["default"].createElement("div", { className: "pt-0 pb-20" },
                    react_1["default"].createElement("button", { type: "submit", className: "button-pink" }, "Submit"))))));
};
exports["default"] = FormArea;
