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
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const FormGroup_1 = __importDefault(require("@mui/material/FormGroup"));
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const breedSlice_1 = require("../../redux/features/breedSlice");
const BreedsPage = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [selectedImage, setSelectedImage] = (0, react_1.useState)("pit-bull-02");
    const [imageAuthor, setImageAuthor] = (0, react_1.useState)("Karthegan Padmanaban");
    const [imageSource, setImageSource] = (0, react_1.useState)("Unsplash");
    const [imageLinkPrimary, setImageLinkPrimary] = (0, react_1.useState)("https://unsplash.com/@gixxerkidd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
    const [imageLinkSecondary, setImageLinkSecondary] = (0, react_1.useState)("https://unsplash.com/photos/white-and-brown-american-pitbull-terrier-puppy-on-green-grass-field-during-daytime-zLMkYi-3-W0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
    const selectedBreeds = (0, react_redux_1.useSelector)((state) => state.breeds);
    const handleSetBreed = (breed) => {
        const index = selectedBreeds.findIndex((b) => b.label === breed);
        if (index > -1) {
            if (selectedBreeds[index].selected) {
                dispatch((0, breedSlice_1.removeBreedAction)(breed));
            }
            else {
                dispatch((0, breedSlice_1.addBreedAction)(breed));
            }
        }
    };
    const handleSubmit = () => {
        const selected = selectedBreeds.filter((breed) => breed.selected);
        if (selected.length > 0) {
            navigate("/test/dna");
        }
        else {
            alert("Select at least one breed to continue");
        }
    };
    const handleChangeImageData = (name) => {
        switch (name) {
            case "American Pit Bull Terrier":
                setImageAuthor("Unknown");
                setImageSource("Pinterest");
                setImageLinkPrimary("https://www.pinterest.com/pin/34973334599054212/");
                setImageLinkSecondary("https://i.pinimg.com/originals/93/08/c8/9308c8aed4571ccd7a1ae0efaacd6fd4.jpg");
                setSelectedImage("apbt");
                break;
            case "American Staffordshire Terrier":
                setImageAuthor("Raya");
                setImageSource("Pinterest");
                setImageLinkPrimary("https://www.pinterest.com/4th3American Staffordshire Terrier/");
                setImageLinkSecondary("https://www.pinterest.com/pin/1040120476434643492/");
                setSelectedImage("ast");
                break;
            case "Staffordshire Bull Terrier":
                setImageAuthor("Rohan");
                setImageSource("Unsplash");
                setImageLinkPrimary("https://unsplash.com/@rohanphoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
                setImageLinkSecondary("https://unsplash.com/photos/black-short-coated-dog-on-green-grass-field-during-daytime-UxyBUbmBXIU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
                setSelectedImage("sbt");
                break;
            case "American Bully":
                setImageAuthor("Attitude Boy");
                setImageSource("Pinterest");
                setImageLinkPrimary("https://www.pinterest.com/aamirsohailkrk/");
                setImageLinkSecondary("https://i.pinimg.com/originals/ff/5b/69/ff5b694c23003aa14aea8b166b2c96d7.jpg");
                setSelectedImage("ab");
                break;
            default:
                setImageAuthor("Katie Bernotsky");
                setImageSource("Unsplash");
                setImageLinkPrimary("https://unsplash.com/@gixxerkidd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
                setImageLinkSecondary("https://unsplash.com/photos/white-and-brown-american-pitbull-terrier-puppy-on-green-grass-field-during-daytime-zLMkYi-3-W0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
                setSelectedImage("pit-bull-02");
                break;
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "antialiased bg-body text-body font-body", children: (0, jsx_runtime_1.jsx)("section", { className: "pt-8 py-12 md:py-24", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "mb-10 md:mb-20 text-5xl sm:text-6xl md:text-9xl xl:text-10xl font-semibold font-heading" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap -m-5", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-1/2 p-5", children: (0, jsx_runtime_1.jsxs)("div", { className: "overflow-hidden rounded-2xl", children: [(0, jsx_runtime_1.jsx)("img", { className: "w-full h-full object-cover", src: require(`../../assets/images/${selectedImage}.jpg`), alt: `Photo by ${imageAuthor}` }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 text-sm", children: ["Photo by", " ", (0, jsx_runtime_1.jsx)("a", { href: imageLinkPrimary, target: "_blank", children: imageAuthor }), " ", "on", " ", (0, jsx_runtime_1.jsx)("a", { href: imageLinkSecondary, target: "_blank", children: imageSource })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-1/2 p-5", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col justify-center h-full", children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h6", { className: "mb-10 text-5xl font-medium tracking-tight font-heading", children: "Select the breeds that you consider to be pit bulls" }), (0, jsx_runtime_1.jsx)("div", { className: "mb-6 ml-6", children: selectedBreeds.map((breed) => ((0, jsx_runtime_1.jsx)(FormGroup_1.default, { children: (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { className: "text-neutral-600 text-lg font-medium tracking-tight text-left ml-2 relative flex items-center gap-2 mb-2", onMouseEnter: () => handleChangeImageData(breed.name), control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { checked: breed.selected, onChange: () => handleSetBreed(breed.label), inputProps: {
                                                                "aria-label": breed.label,
                                                            } }), label: breed.name }) }, breed.label))) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap -m-4 justify-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-auto p-4", children: (0, jsx_runtime_1.jsx)("div", { className: "mb-2 text-xl text-neutral-600 font-semibold tracking-tight", children: (0, jsx_runtime_1.jsx)("button", { onClick: handleSubmit, className: "inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200", children: "Next" }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-auto p-4", children: (0, jsx_runtime_1.jsx)("div", { className: "mb-2 text-xl text-neutral-600 font-semibold tracking-tight", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => navigate("/test/alignment"), className: "inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200", children: "Back" }) }) })] })] }) }) })] })] }) }) }));
};
exports.default = BreedsPage;
