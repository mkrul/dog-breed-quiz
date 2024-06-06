"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const react_responsive_carousel_1 = require("react-responsive-carousel");
const material_1 = require("@mui/material");
require("react-responsive-carousel/lib/styles/carousel.min.css");
const ResultsPage = () => {
    const [showDogs, setShowDogs] = (0, react_1.useState)(false);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [loadingBreakdown, setLoadingBreakdown] = (0, react_1.useState)(false);
    const [showBreakdown, setShowBreakdown] = (0, react_1.useState)(false);
    const [proAccuracy, setProAccuracy] = (0, react_1.useState)(0);
    const [modAccuracy, setModerateAccuracy] = (0, react_1.useState)(0);
    const [antiAccuracy, setAntiAccuracy] = (0, react_1.useState)(0);
    const [proCount, setProCount] = (0, react_1.useState)(0);
    const [modCount, setModerateCount] = (0, react_1.useState)(0);
    const [antiCount, setAntiCount] = (0, react_1.useState)(0);
    const [proApbtCount, setProApbtCount] = (0, react_1.useState)(0);
    const [allUsersAccuracy, setAllUsersAccuracy] = (0, react_1.useState)(0);
    const [proApbtAccuracy, setProApbtAccuracy] = (0, react_1.useState)(0);
    const [proMultiCount, setProMultiCount] = (0, react_1.useState)(0);
    const [proMultiAccuracy, setProMultiAccuracy] = (0, react_1.useState)(0);
    const [modApbtCount, setModerateApbtCount] = (0, react_1.useState)(0);
    const [modApbtAccuracy, setModerateApbtAccuracy] = (0, react_1.useState)(0);
    const [modMultiCount, setModerateMultiCount] = (0, react_1.useState)(0);
    const [modMultiAccuracy, setModerateMultiAccuracy] = (0, react_1.useState)(0);
    const [antiApbtCount, setAntiApbtCount] = (0, react_1.useState)(0);
    const [antiApbtAccuracy, setAntiApbtAccuracy] = (0, react_1.useState)(0);
    const [antiMultiCount, setAntiMultiCount] = (0, react_1.useState)(0);
    const [antiMultiAccuracy, setAntiMultiAccuracy] = (0, react_1.useState)(0);
    const [topUsers, setTopUsers] = (0, react_1.useState)([]);
    const resultData = (0, react_redux_1.useSelector)((state) => state.results);
    const word1 = resultData.totalSelected === 1 ? "dog" : "dogs";
    const word2 = resultData.totalSelected === 1 ? "a pit bull" : "pit bulls";
    const word3 = resultData.totalIncorrectGuesses === 1 ? "was" : "were";
    const imageRefs = (0, react_1.useRef)(new Map());
    const incorrectGuesses = resultData.selections.filter((selection) => !selection.correctGuess);
    const fetchAllUserData = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoadingBreakdown(true);
            const domain_url = process.env.NODE_ENV === "production"
                ? "https://ban-this-breed-b3bc9b835a36.herokuapp.com"
                : "http://localhost:5000";
            const response = yield fetch(`${domain_url}/api/users`);
            response.json().then((res) => {
                const breakdown = res.data;
                setLoadingBreakdown(false);
                setShowBreakdown(true);
                setProAccuracy(breakdown.proAccuracy);
                setModerateAccuracy(breakdown.moderateAccuracy);
                setAntiAccuracy(breakdown.antiAccuracy);
                setProCount(breakdown.proCount);
                setModerateCount(breakdown.moderateCount);
                setAntiCount(breakdown.antiCount);
                setProApbtCount(breakdown.proApbtCount);
                setProApbtAccuracy(breakdown.proApbtAccuracy);
                setProMultiCount(breakdown.proMultiCount);
                setProMultiAccuracy(breakdown.proMultiAccuracy);
                setModerateApbtCount(breakdown.moderateApbtCount);
                setModerateApbtAccuracy(breakdown.moderateApbtAccuracy);
                setModerateMultiCount(breakdown.moderateMultiCount);
                setModerateMultiAccuracy(breakdown.moderateMultiAccuracy);
                setAntiApbtCount(breakdown.antiApbtCount);
                setAntiApbtAccuracy(breakdown.antiApbtAccuracy);
                setAntiMultiCount(breakdown.antiMultiCount);
                setAntiMultiAccuracy(breakdown.antiMultiAccuracy);
                setAllUsersAccuracy(breakdown.allUsersAccuracy);
                setTopUsers(breakdown.topUsers);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
    (0, react_1.useEffect)(() => {
        if (incorrectGuesses.length > 0) {
            setLoading(true);
            let loadedImages = 0;
            incorrectGuesses.forEach((selection, index) => {
                const imgKey = `${selection.dir}/${selection.image}`;
                if (!imageRefs.current.has(imgKey)) {
                    const img = new Image();
                    img.src = `/assets/images/dogs/${selection.dir}/${selection.image}`;
                    img.onload = () => {
                        loadedImages++;
                        if (loadedImages === incorrectGuesses.length) {
                            setLoading(false);
                        }
                    };
                    img.onerror = () => {
                        console.error(`Failed to load image at ${img.src}`);
                        loadedImages++;
                        if (loadedImages === incorrectGuesses.length) {
                            setLoading(false);
                        }
                    };
                    imageRefs.current.set(imgKey, img);
                }
                else {
                    loadedImages++;
                    if (loadedImages === incorrectGuesses.length) {
                        setLoading(false);
                    }
                }
            });
        }
        else {
            setLoading(false);
        }
    }, [incorrectGuesses]);
    const handleShowSelections = () => {
        setShowDogs(!showDogs);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "antialiased bg-body text-body font-body", children: (0, jsx_runtime_1.jsxs)("section", { className: "mt-4 pt-6 py-12 md:py-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-4 pb-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-15", children: [(0, jsx_runtime_1.jsx)("h2", { className: "mb-12 text-5xl font-semibold font-subheading", children: "Your Results" }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5 text-xl text-neutral-700 font-medium", children: [(0, jsx_runtime_1.jsxs)("p", { className: "mb-5", children: ["You selected", " ", (0, jsx_runtime_1.jsx)("span", { className: "font-bold", children: resultData.totalSelected }), " ", word1, " that appeared to be ", word2, " based on the criteria you set at the beginning of the test"] }), (0, jsx_runtime_1.jsxs)("p", { className: "mb-5", children: ["Out of all dogs selected,", " ", (0, jsx_runtime_1.jsx)("span", { className: "font-bold", children: resultData.totalIncorrectGuesses }), " ", word3, " identified incorrectly based on your criteria"] }), (0, jsx_runtime_1.jsxs)("p", { className: "mb-5", children: ["The average accuracy for all participants is currently", " ", (0, jsx_runtime_1.jsx)("span", { className: "font-bold", children: allUsersAccuracy > 0
                                                        ? `${allUsersAccuracy.toFixed(1)}%`
                                                        : "0%" })] }), (0, jsx_runtime_1.jsxs)("p", { className: "mb-5", children: ["Your overall accuracy was", " ", (0, jsx_runtime_1.jsx)("span", { className: "font-bold", children: resultData.userAccuracy > 0
                                                        ? `${resultData.userAccuracy.toFixed(1)}%`
                                                        : "0%" })] })] })] }), resultData.totalIncorrectGuesses > 0 && ((0, jsx_runtime_1.jsxs)("button", { onClick: handleShowSelections, className: "inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-md text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 mt-3", children: [!showDogs ? "View" : "Hide", " incorrect guesses"] })), (0, jsx_runtime_1.jsx)("div", { className: "w-full", children: showDogs && ((0, jsx_runtime_1.jsx)("div", { className: "inline-flex justify-center w-full", children: loading ? ((0, jsx_runtime_1.jsx)("div", { className: "mt-3 w-full p-5", children: (0, jsx_runtime_1.jsx)(material_1.CircularProgress, {}) })) : ((0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-1/2 p-5", children: (0, jsx_runtime_1.jsx)("div", { className: "overflow-hidden rounded-2xl", children: (0, jsx_runtime_1.jsx)(react_responsive_carousel_1.Carousel, { children: incorrectGuesses.map((selection, index) => ((0, jsx_runtime_1.jsx)("img", { className: "w-full h-full object-cover", src: require(`../../assets/images/dogs/${selection.dir}/${selection.image}`), alt: "Dog" }, index))) }) }) })) })) }), loadingBreakdown && !showBreakdown && ((0, jsx_runtime_1.jsx)("div", { className: "mt-6 mb-5", children: (0, jsx_runtime_1.jsx)(material_1.CircularProgress, {}) })), !loadingBreakdown && !showBreakdown && ((0, jsx_runtime_1.jsx)("button", { onClick: fetchAllUserData, className: "inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-md text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 mt-5", children: "View All Results" })), !loadingBreakdown && showBreakdown && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-20 mt-6", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-5xl font-semibold font-subheading", children: "Total Results" }), (0, jsx_runtime_1.jsx)("h6", { className: "mb-5 font-bold", children: "(All Participants)" }), (0, jsx_runtime_1.jsx)("p", { className: "mb-6", children: "These results are based on the criteria set by all participants and broken down based on how participants identified themselves." }), (0, jsx_runtime_1.jsxs)("table", { className: "w-full mb-5 text-xl text-neutral-700 font-medium", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "Alignment" }), (0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "Count" }), (0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "Avg. Accuracy" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "py-2", children: "Pro-pit bull" }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: proCount }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: proCount > 0 ? `${proAccuracy.toFixed(1)}%` : "0%" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "py-2", children: "Moderate" }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: modCount }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: modCount > 0 ? `${modAccuracy.toFixed(1)}%` : "0%" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "py-2", children: "Anti-pit bull" }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: antiCount }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: antiCount > 0 ? `${antiAccuracy.toFixed(1)}%` : "0%" })] })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-20", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-5xl font-semibold font-subheading", children: "Breakdown" }), (0, jsx_runtime_1.jsx)("h6", { className: "mb-5 font-bold", children: "(Pro-pit bull)" }), (0, jsx_runtime_1.jsx)("p", { className: "mb-6", children: "These results are based on the criteria set by participants who identified as pro-pit bull." }), (0, jsx_runtime_1.jsxs)("table", { className: "w-full mb-5 text-xl text-neutral-700 font-medium", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "\"What is a pit bull?\"" }), (0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "Count" }), (0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "Avg. Accuracy" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "py-2", children: "APBT only" }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: proApbtCount }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: proApbtCount > 0
                                                                        ? `${proApbtAccuracy.toFixed(1)}%`
                                                                        : "0%" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "py-2", children: "Multiple breeds" }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: proMultiCount }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: proMultiCount > 0
                                                                        ? `${proMultiAccuracy.toFixed(1)}%`
                                                                        : "0%" })] })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-20", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-5xl font-semibold font-subheading", children: "Breakdown" }), (0, jsx_runtime_1.jsx)("h6", { className: "mb-5 font-bold", children: "(Moderate)" }), (0, jsx_runtime_1.jsx)("p", { className: "mb-6", children: "These results are based on the criteria set by participants who identified as moderate." }), (0, jsx_runtime_1.jsxs)("table", { className: "w-full mb-5 text-xl text-neutral-700 font-medium", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "\"What is a pit bull?\"" }), (0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "Count" }), (0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "Avg. Accuracy" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "py-2", children: "APBT only" }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: modApbtCount }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: modApbtCount > 0
                                                                        ? `${modApbtAccuracy.toFixed(1)}%`
                                                                        : "0%" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "py-2", children: "Multiple breeds" }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: modMultiCount }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: modMultiCount > 0
                                                                        ? `${modMultiAccuracy.toFixed(1)}%`
                                                                        : "0%" })] })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-20", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-5xl font-semibold font-subheading", children: "Breakdown" }), (0, jsx_runtime_1.jsx)("h6", { className: "mb-5 font-bold", children: "(Anti-pit bull)" }), (0, jsx_runtime_1.jsx)("p", { className: "mb-6", children: "These results are based on the criteria set by participants who identified as anti-pit bull." }), (0, jsx_runtime_1.jsxs)("table", { className: "w-full mb-5 text-xl text-neutral-700 font-medium", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "\"What is a pit bull?\"" }), (0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "Count" }), (0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "Avg. Accuracy" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "py-2", children: "APBT only" }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: antiApbtCount }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: antiApbtCount > 0
                                                                        ? `${antiApbtAccuracy.toFixed(1)}%`
                                                                        : "0%" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "py-2", children: "Multiple breeds" }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: antiMultiCount }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: antiMultiCount > 0
                                                                        ? `${antiMultiAccuracy.toFixed(1)}%`
                                                                        : "0%" })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "pt-6 text-5xl font-semibold font-subheading", children: "Top Results" }), (0, jsx_runtime_1.jsx)("h6", { className: "mb-5 font-bold", children: "(All Participants)" }), (0, jsx_runtime_1.jsxs)("table", { className: "w-full mb-5 text-xl text-neutral-700 font-medium", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "Username" }), (0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "Alignment" }), (0, jsx_runtime_1.jsx)("th", { className: "py-2", children: "Accuracy" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: topUsers.map((user, index) => {
                                                        return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "py-2", children: user.username }), (0, jsx_runtime_1.jsx)("td", { className: "py-2", children: user.alignment }), (0, jsx_runtime_1.jsxs)("td", { className: "py-2", children: [user.accuracy.toFixed(1), "%"] })] }, index));
                                                    }) })] })] })] }))] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/1", className: "mb-6 mt-3 inline-flex items-center justify-center text-center h-16 p-5 font-semibold text-lg text-white tracking-tight bg-neutral-900 hover:bg-neutral-200 focus:bg-neutral-200 rounded-lg focus:ring-4 focus:ring-neutral-300 transition duration-200", children: "Go Back" })] }) }));
};
exports.default = ResultsPage;
