"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
const material_1 = require("@mui/material");
const react_redux_1 = require("react-redux");
const material_2 = require("@mui/material");
const userSlice_1 = require("../../redux/features/userSlice");
const breedSlice_1 = require("../../redux/features/breedSlice");
const settingSlice_1 = require("../../redux/features/settingSlice");
const resultsSlice_1 = require("../../redux/features/resultsSlice");
require("../../assets/main.css");
require("../../assets/homepage.css");
const HomePage = () => {
    const [showModal, setShowModal] = (0, react_1.useState)(false);
    const [userNameInput, setUserNameInput] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_2.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const modalStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };
    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleUserNameInput = (e) => {
        setUserNameInput(e.target.value);
    };
    const handleSubmit = () => {
        if (userNameInput.length > 0) {
            try {
                dispatch((0, resultsSlice_1.clearResultAction)());
                dispatch((0, userSlice_1.clearUserStoreAction)());
                dispatch((0, breedSlice_1.clearBreedsAction)());
                dispatch((0, settingSlice_1.clearSettingsAction)());
                dispatch((0, userSlice_1.setUsernameAction)(userNameInput));
            }
            catch (error) {
                console.log(error);
            }
            navigate("/test/alignment");
        }
        else {
            alert("Please enter a username to begin the test");
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "antialiased bg-body text-body font-body", children: (0, jsx_runtime_1.jsx)("section", { className: "pt-8 py-12 md:py-24", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "mb-10 md:mb-20 text-5xl sm:text-6xl md:text-9xl xl:text-10xl font-semibold font-heading" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap -m-5", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-1/2 p-5", children: (0, jsx_runtime_1.jsxs)("div", { className: "overflow-hidden rounded-2xl", children: [(0, jsx_runtime_1.jsx)("img", { className: "w-full h-full object-cover", src: require("../../assets/images/pit-bull-01.jpg"), alt: "Photo by Katie Bernotsky" }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 text-sm", children: ["Photo by", " ", (0, jsx_runtime_1.jsx)("a", { href: "https://unsplash.com/@pupscruffs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash", children: "Katie Bernotsky" }), " ", "on", " ", (0, jsx_runtime_1.jsx)("a", { href: "https://unsplash.com/photos/black-and-white-short-coated-dog-on-green-grass-field-during-daytime-47vG88bHW7U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash", children: "Unsplash" })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-1/2 p-5", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col justify-center h-full", children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h6", { className: "mb-10 text-5xl font-medium tracking-tight font-heading", children: "Why \"ban this breed\"?" }), (0, jsx_runtime_1.jsx)(material_2.Typography, { className: "mb-4", children: "Proponents of breed-specific legislation (BSL) argue that certain dog breeds should be banned or regulated based on statistical data surrounding dog attacks. The most commonly targeted breeds are those labeled \"pit bulls\". Many people use \"pit bull\" as an umbrella term for dogs with certain physical characteristics, such as a muscular build and a short coat, and breed bans often target individual dogs based on their appearance." }), (0, jsx_runtime_1.jsx)(material_2.Typography, { className: "mb-4", children: "This project aims to measure the accuracy of visual breed identification, as well as how different groups of people identify dogs as pit bulls, taking their personal biases into account." }), (0, jsx_runtime_1.jsxs)(material_2.Typography, { className: "mb-6", children: ["You can learn more about this test by clicking", " ", (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/about", className: "font-bold", children: "here" }), "."] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap -m-4 justify-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-auto p-4", children: (0, jsx_runtime_1.jsxs)("p", { className: "mb-2 text-xl text-neutral-600 font-semibold tracking-tight", children: [(0, jsx_runtime_1.jsx)("button", { onClick: handleOpenModal, className: "inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200", children: "Start the test" }), showModal && ((0, jsx_runtime_1.jsx)(material_1.Modal, { open: showModal, onClose: handleCloseModal, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description", children: (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: modalStyle, borderRadius: 2, children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-semibold tracking-tight", children: "Please enter a username" }), (0, jsx_runtime_1.jsx)(material_2.Input, { type: "text", value: userNameInput, onChange: handleUserNameInput, placeholder: "Type your name here", className: "mt-4 mb-4" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-around", children: [(0, jsx_runtime_1.jsx)("button", { onClick: handleSubmit, className: "inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 mt-3", children: "Start test" }), (0, jsx_runtime_1.jsx)("button", { onClick: handleCloseModal, className: "inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 mt-3", children: "Close" })] })] }) }))] }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-auto p-4", children: (0, jsx_runtime_1.jsx)("p", { className: "mb-2 text-xl text-neutral-600 font-semibold tracking-tight", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/test/results", className: "inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200", children: "View results" }) }) })] })] }) }) })] })] }) }) }));
};
exports.default = HomePage;
