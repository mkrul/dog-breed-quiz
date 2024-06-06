"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const HomePage_1 = __importDefault(require("./components/pages/HomePage"));
const AboutPage_1 = __importDefault(require("./components/pages/AboutPage"));
const theme = (0, material_1.createTheme)({
    palette: {
        text: {
            primary: "#00575E",
        },
    },
    typography: {
        allVariants: {
            letterSpacing: "-0.025rem",
            lineHeight: 1.25,
        },
        fontSize: 18,
        fontWeightMedium: 500,
        fontFamily: [
            "DM Sans",
            "ui-sans-serif",
            "system-ui",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "Noto Sans",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
            "Noto Color Emoji",
        ].join(","),
    },
});
const App = () => {
    return ((0, jsx_runtime_1.jsxs)(material_1.ThemeProvider, { theme: theme, children: [(0, jsx_runtime_1.jsx)(material_1.CssBaseline, {}), (0, jsx_runtime_1.jsx)("div", { className: "App", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(HomePage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/about", element: (0, jsx_runtime_1.jsx)(AboutPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/" }) })] }) })] }));
};
exports.default = App;
