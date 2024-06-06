"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Circle = ({ buttonId, toggle }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const handleClick = (buttonId) => {
        setIsOpen(!isOpen);
        toggle(buttonId);
    };
    const plusSign = () => {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("path", { d: "M23.75 18.75H21.25V16.25C21.25 15.9185 21.1183 15.6005 20.8839 15.3661C20.6495 15.1317 20.3315 15 20 15C19.6685 15 19.3505 15.1317 19.1161 15.3661C18.8817 15.6005 18.75 15.9185 18.75 16.25V18.75H16.25C15.9185 18.75 15.6005 18.8817 15.3661 19.1161C15.1317 19.3505 15 19.6685 15 20C15 20.3315 15.1317 20.6495 15.3661 20.8839C15.6005 21.1183 15.9185 21.25 16.25 21.25H18.75V23.75C18.75 24.0815 18.8817 24.3995 19.1161 24.6339C19.3505 24.8683 19.6685 25 20 25C20.3315 25 20.6495 24.8683 20.8839 24.6339C21.1183 24.3995 21.25 24.0815 21.25 23.75V21.25H23.75C24.0815 21.25 24.3995 21.1183 24.6339 20.8839C24.8683 20.6495 25 20.3315 25 20C25 19.6685 24.8683 19.3505 24.6339 19.1161C24.3995 18.8817 24.0815 18.75 23.75 18.75Z", fill: "#19191B" }) }));
    };
    const minusSign = () => {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("path", { d: "M16 18h 9v 3h -9h", fill: "#19191B" }) }));
    };
    return ((0, jsx_runtime_1.jsx)("button", { onClick: () => handleClick(buttonId), children: (0, jsx_runtime_1.jsx)("a", { className: "text-green-100 hover:text-green-200 transition duration-200", href: "#", children: (0, jsx_runtime_1.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", children: [(0, jsx_runtime_1.jsx)("circle", { cx: 20, cy: 20, r: 20, fill: "currentColor" }), isOpen ? minusSign() : plusSign()] }) }) }));
};
exports.default = Circle;
