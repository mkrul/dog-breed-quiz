"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../../redux/hooks");
const react_redux_1 = require("react-redux");
const Slider_1 = __importDefault(require("@mui/material/Slider"));
const material_1 = require("@mui/material");
const settingSlice_1 = require("../../redux/features/settingSlice");
const DnaPage = () => {
    const [showModal, setShowModal] = (0, react_1.useState)(false);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
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
    const selectedPercentage = (0, react_redux_1.useSelector)((state) => state.settings.percentage);
    const handlePercentageChange = (event, value) => {
        dispatch((0, settingSlice_1.setPercentageAction)(value));
    };
    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleSubmit = () => {
        if (selectedPercentage < 20) {
            alert("Please select a percentage.");
        }
        else {
            navigate("/test/dogs");
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "antialiased bg-body text-body font-body", children: (0, jsx_runtime_1.jsx)("section", { className: "pt-8 py-12 md:py-24", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "mb-10 md:mb-20 text-5xl sm:text-6xl md:text-9xl xl:text-10xl font-semibold font-heading" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap -m-5", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-1/2 p-5", children: (0, jsx_runtime_1.jsxs)("div", { className: "overflow-hidden rounded-2xl", children: [(0, jsx_runtime_1.jsx)("img", { className: "w-full h-full object-cover", src: require("../../assets/images/pit-bull-03.jpg"), alt: "Photo by Dogs In The World" }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 text-sm", children: ["Photo by", " ", (0, jsx_runtime_1.jsx)("a", { href: "https://www.pinterest.com/workingdogsintheworld/", children: "Dogs In The World" }), " ", "on", " ", (0, jsx_runtime_1.jsx)("a", { href: "https://i.pinimg.com/originals/24/35/63/24356337cf5b07b6c28e76f3806ff2a0.jpg", children: "Pinterest" })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-1/2 p-5", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col justify-center h-full", children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h6", { className: "mb-10 text-4xl font-medium tracking-tight font-heading", children: "What percentage of pit bull DNA would you use to classify a dog as a pit bull?" }), (0, jsx_runtime_1.jsx)("p", { className: "mb-5 text-xl text-neutral-700 font-medium", children: "Adjust the slider to select a percentage. The system includes a 10% courtesy buffer, meaning it considers selections within 10% of the actual percentage as correct. For instance, if a dog is 40% American Bully and you select 50%, your answer will be deemed correct because it falls within the 10% buffer range." }), (0, jsx_runtime_1.jsx)("div", { className: "mb-2 ml-6", children: (0, jsx_runtime_1.jsx)(Slider_1.default, { "aria-label": "percentage", value: selectedPercentage, valueLabelDisplay: "auto", shiftStep: 30, onChange: handlePercentageChange, step: 5, marks: true, min: 25, max: 100 }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("p", { className: "mb-5 text-xl text-neutral-700 font-medium", children: ["Selected value:", " ", (0, jsx_runtime_1.jsxs)("span", { className: "font-bold", children: [selectedPercentage, "%"] })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap -m-4 justify-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-auto p-4", children: (0, jsx_runtime_1.jsxs)("p", { className: "mb-2 text-xl text-neutral-600 font-semibold tracking-tight", children: [(0, jsx_runtime_1.jsx)("button", { onClick: handleOpenModal, className: "inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200", children: "Next" }), showModal && ((0, jsx_runtime_1.jsx)(material_1.Modal, { open: showModal, onClose: handleCloseModal, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description", children: (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: modalStyle, borderRadius: 2, children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-semibold tracking-tight", children: "Attention" }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { className: "mb-4 mt-3", children: ["You will now be shown 60 random dogs to identify. Once you begin the test, you will", " ", (0, jsx_runtime_1.jsx)("strong", { children: "not" }), " be able to modify your settings."] }), (0, jsx_runtime_1.jsx)(material_1.Typography, { className: "mb-4", children: "Click \"Continue\" to proceed or \"Cancel\" to return to the previous screen and make adjustments." }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-around", children: [(0, jsx_runtime_1.jsx)("button", { onClick: handleSubmit, className: "inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 mt-3", children: "Continue" }), (0, jsx_runtime_1.jsx)("button", { onClick: handleCloseModal, className: "inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 mt-3", children: "Cancel" })] })] }) }))] }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-auto p-4", children: (0, jsx_runtime_1.jsx)("p", { className: "mb-2 text-xl text-neutral-600 font-semibold tracking-tight", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => navigate("/test/breeds"), className: "inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200", children: "Back" }) }) })] })] }) }) })] })] }) }) }));
};
exports.default = DnaPage;
