"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const hooks_1 = require("../../redux/hooks");
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const FormGroup_1 = __importDefault(require("@mui/material/FormGroup"));
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const settingSlice_1 = require("../../redux/features/settingSlice");
const AlignmentPage = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const selectedAlignment = (0, react_redux_1.useSelector)((state) => state.settings.alignment);
    const handleSetAlignment = (value) => {
        dispatch((0, settingSlice_1.setAlignmentAction)(value));
    };
    const handleSubmit = () => {
        if (selectedAlignment.length > 0) {
            navigate("/test/breeds");
        }
        else {
            alert("Please select an alignment to continue");
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "antialiased bg-body text-body font-body", children: (0, jsx_runtime_1.jsx)("section", { className: "pt-8 py-12 md:py-24", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "mb-10 md:mb-20 text-5xl sm:text-6xl md:text-9xl xl:text-10xl font-semibold font-heading" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap -m-5", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-1/2 p-5", children: (0, jsx_runtime_1.jsxs)("div", { className: "overflow-hidden rounded-2xl", children: [(0, jsx_runtime_1.jsx)("img", { className: "w-full h-full object-cover", src: require("../../assets/images/pit-bull-02.jpg"), alt: "Photo by Karthegan Padmanaban" }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 text-sm", children: ["Photo by", " ", (0, jsx_runtime_1.jsx)("a", { href: "https://unsplash.com/@gixxerkidd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash", target: "_blank", children: "Karthegan Padmanaban" }), " ", "on", " ", (0, jsx_runtime_1.jsx)("a", { href: "https://unsplash.com/photos/white-and-brown-american-pitbull-terrier-puppy-on-green-grass-field-during-daytime-zLMkYi-3-W0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash", target: "_blank", children: "Unsplash" })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-1/2 p-5", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col justify-center h-full", children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h6", { className: "mb-10 text-5xl font-medium tracking-tight font-heading", children: "Choose the statement that best aligns with your beliefs" }), (0, jsx_runtime_1.jsx)("div", { className: "mb-6", children: (0, jsx_runtime_1.jsx)("div", { className: "relative flex items-center gap-2 mb-4", children: (0, jsx_runtime_1.jsxs)(FormGroup_1.default, { children: [(0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { className: "text-neutral-600 text-lg font-medium tracking-tight text-left ml-2 relative flex items-center gap-2 mb-4", control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { checked: selectedAlignment === "pro", onChange: () => handleSetAlignment("pro"), inputProps: { "aria-label": "pro" } }), label: "Pit bulls make wonderful pets if they have a good owner to train and socialize them." }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { className: "text-neutral-600 text-lg font-medium tracking-tight text-left ml-2 relative flex items-center gap-2 mb-4", control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { checked: selectedAlignment === "neutral", onChange: () => handleSetAlignment("neutral"), inputProps: { "aria-label": "neutral" } }), label: "Pit bulls are genetically inclined to be dog\n                        aggressive, but in the right hands, they can be amazing\n                        companions." }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { className: "text-neutral-600 text-lg font-medium tracking-tight text-left ml-2 relative flex items-center gap-2 mb-4", control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { checked: selectedAlignment === "anti", onChange: () => handleSetAlignment("anti"), inputProps: { "aria-label": "anti" } }), label: "Pit bulls are dangerous and should be banned,\n                          regulated, or phased out of existence." })] }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap -m-4 justify-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-auto p-4", children: (0, jsx_runtime_1.jsx)("p", { className: "mb-2 text-xl text-neutral-600 font-semibold tracking-tight", children: (0, jsx_runtime_1.jsx)("button", { onClick: handleSubmit, className: "inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200", children: "Next" }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-auto p-4", children: (0, jsx_runtime_1.jsx)("p", { className: "mb-2 text-xl text-neutral-600 font-semibold tracking-tight", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => navigate("/"), className: "inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200", children: "Back" }) }) })] })] }) }) })] })] }) }) }));
};
exports.default = AlignmentPage;
