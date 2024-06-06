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
const hooks_1 = require("../../redux/hooks");
const material_1 = require("@mui/material");
const react_responsive_carousel_1 = require("react-responsive-carousel");
require("react-responsive-carousel/lib/styles/carousel.min.css");
const resultsSlice_1 = require("../../redux/features/resultsSlice");
const DogsPage = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [dogData, setDogData] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    const [showFinalLoading, setShowFinalLoading] = (0, react_1.useState)(false);
    const [endOfTest, setEndOfTest] = (0, react_1.useState)(false);
    const userData = (0, react_redux_1.useSelector)((state) => state.user);
    const breedData = (0, react_redux_1.useSelector)((state) => state.breeds);
    const settingsData = (0, react_redux_1.useSelector)((state) => state.settings);
    const resultData = (0, react_redux_1.useSelector)((state) => state.results);
    const settings = (0, react_redux_1.useSelector)((state) => state.settings);
    const userSelectedPercentage = settings.percentage;
    const positiveBtnText = settingsData.alignment === "anti" ? "Ban it" : "It's a Pit";
    const negativeBtnText = settingsData.alignment === "anti" ? "Skip it" : "Not a Pit";
    (0, react_1.useEffect)(() => {
        if (endOfTest) {
            setShowFinalLoading(true);
            handleSaveUserData();
            setTimeout(() => {
                setShowFinalLoading(false);
                navigate("/test/results");
            }, 1000);
        }
    }, [resultData]);
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                setLoading(true);
                const domain_url = process.env.NODE_ENV === "production"
                    ? "https://ban-this-breed-b3bc9b835a36.herokuapp.com"
                    : "http://localhost:5000";
                const response = yield fetch(`${domain_url}/api/dogs`);
                const res = yield response.json();
                setDogData(res.data);
                setLoading(false);
            }
            catch (error) {
                console.log(error);
                setLoading(false);
            }
        });
        fetchData();
        window.onbeforeunload = () => {
            return "";
        };
        return () => {
            window.onbeforeunload = null;
        };
    }, []);
    const handleNext = () => __awaiter(void 0, void 0, void 0, function* () {
        if (currentIndex === dogData.length - 1) {
            setEndOfTest(true);
            dispatch((0, resultsSlice_1.incrementFieldAsync)({ field: "completed", increment: 1 }));
        }
        else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    });
    const handleSaveUserData = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const domain_url = process.env.NODE_ENV === "production"
                ? "https://ban-this-breed-b3bc9b835a36.herokuapp.com"
                : "http://localhost:5000";
            const response = yield fetch(`${domain_url}/api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: {
                        username: userData.username,
                        alignment: settingsData.alignment,
                        percentage: settingsData.percentage,
                        breeds: breedData,
                        settings: settingsData,
                        results: resultData.selections,
                        accuracy: resultData.userAccuracy,
                    },
                }),
            });
            const res = yield response.json();
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    });
    const handleAnswerYes = () => __awaiter(void 0, void 0, void 0, function* () {
        const selectedBreeds = breedData.filter((breed) => breed.selected);
        let currentDogHasApbt = currentDog.apbt > 0;
        let currentDogHasAst = currentDog.ast > 0;
        let currentDogHasSbt = currentDog.sbt > 0;
        let currentDogHasAb = currentDog.ab > 0;
        let userSelectedApbt = selectedBreeds.find((breed) => breed.label === "apbt");
        let userSelectedAst = selectedBreeds.find((breed) => breed.label === "ast");
        let userSelectedSbt = selectedBreeds.find((breed) => breed.label === "sbt");
        let userSelectedAb = selectedBreeds.find((breed) => breed.label === "ab");
        let apbt = currentDogHasApbt && userSelectedApbt ? currentDog.apbt : 0;
        let ast = currentDogHasAst && userSelectedAst ? currentDog.ast : 0;
        let sbt = currentDogHasSbt && userSelectedSbt ? currentDog.sbt : 0;
        let ab = currentDogHasAb && userSelectedAb ? currentDog.ab : 0;
        let guessRangeStart = userSelectedPercentage - 10;
        let correctGuess = apbt + ast + sbt + ab >= guessRangeStart ? 1 : 0;
        const imageUrl = `../../assets/images/dogs/${currentDog.dir}/${currentDog.images[0]}`;
        yield Promise.all([
            dispatch((0, resultsSlice_1.incrementFieldAsync)({ field: "totalDogs", increment: 1 })),
            dispatch((0, resultsSlice_1.incrementFieldAsync)({ field: "totalSelected", increment: 1 })),
            dispatch((0, resultsSlice_1.incrementFieldAsync)({
                field: correctGuess ? "totalCorrectGuesses" : "totalIncorrectGuesses",
                increment: 1,
            })),
            dispatch((0, resultsSlice_1.updateSelectionsAsync)({
                imageUrl,
                correctGuess: !!correctGuess,
                dir: currentDog.dir,
                image: currentDog.images[0],
            })),
            dispatch((0, resultsSlice_1.updateUserAccuracyAsync)()),
        ]).finally(() => {
            handleNext();
        });
    });
    const handleAnswerNo = () => __awaiter(void 0, void 0, void 0, function* () {
        const selectedBreeds = breedData.filter((breed) => breed.selected);
        let currentDogHasApbt = currentDog.apbt > 0;
        let currentDogHasAst = currentDog.ast > 0;
        let currentDogHasSbt = currentDog.sbt > 0;
        let currentDogHasAb = currentDog.ab > 0;
        let userSelectedApbt = selectedBreeds.find((breed) => breed.label === "apbt");
        let userSelectedAst = selectedBreeds.find((breed) => breed.label === "ast");
        let userSelectedSbt = selectedBreeds.find((breed) => breed.label === "sbt");
        let userSelectedAb = selectedBreeds.find((breed) => breed.label === "ab");
        let apbt = currentDogHasApbt && userSelectedApbt ? currentDog.apbt : 0;
        let ast = currentDogHasAst && userSelectedAst ? currentDog.ast : 0;
        let sbt = currentDogHasSbt && userSelectedSbt ? currentDog.sbt : 0;
        let ab = currentDogHasAb && userSelectedAb ? currentDog.ab : 0;
        let guessRangeStart = userSelectedPercentage - 10;
        let correctGuess = apbt + ast + sbt + ab < guessRangeStart ? 1 : 0;
        const imageUrl = `../../assets/images/dogs/${currentDog.dir}/${currentDog.images[0]}`;
        yield Promise.all([
            dispatch((0, resultsSlice_1.incrementFieldAsync)({ field: "totalDogs", increment: 1 })),
            dispatch((0, resultsSlice_1.incrementFieldAsync)({ field: "totalSkipped", increment: 1 })),
            dispatch((0, resultsSlice_1.incrementFieldAsync)({
                field: correctGuess ? "totalCorrectGuesses" : "totalIncorrectGuesses",
                increment: 1,
            })),
            dispatch((0, resultsSlice_1.updateSelectionsAsync)({
                imageUrl,
                correctGuess: !!correctGuess,
                dir: currentDog.dir,
                image: currentDog.images[0],
            })),
            dispatch((0, resultsSlice_1.updateUserAccuracyAsync)()),
        ]).finally(() => {
            handleNext();
        });
    });
    const currentDog = dogData[currentIndex] || [];
    if (showFinalLoading === true) {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center h-screen", children: [(0, jsx_runtime_1.jsx)(material_1.CircularProgress, { size: 75 }), (0, jsx_runtime_1.jsx)("h2", { className: "mt-10 text-3xl font-semibold font-heading", children: "Calculating Results..." })] }));
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "antialiased bg-body text-body font-body", children: (0, jsx_runtime_1.jsx)("section", { className: "pt-8 py-12 md:py-24", children: (0, jsx_runtime_1.jsxs)("div", { className: loading ? "loading" : "container mx-auto px-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "mb-10 md:mb-20 text-5xl sm:text-6xl md:text-9xl xl:text-10xl font-semibold font-heading" }), !loading && currentDog.images && currentDog.images.length > 0 ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap -m-5", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-1/2 p-5", children: (0, jsx_runtime_1.jsx)("div", { className: "overflow-hidden rounded-2xl", children: (0, jsx_runtime_1.jsx)(react_responsive_carousel_1.Carousel, { children: currentDog.images.map((image, index) => image && ((0, jsx_runtime_1.jsx)("img", { className: "w-full h-full object-cover scale-x-[-1]", src: require(`../../assets/images/dogs/${currentDog.dir}/${image}`) }, index))) }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-1/2 p-5", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col justify-center h-full", children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h6", { className: "mb-10 text-5xl font-medium tracking-tight font-heading", children: [currentIndex + 1, " / 60"] }), (0, jsx_runtime_1.jsx)("div", { className: "mb-6", children: (0, jsx_runtime_1.jsxs)("div", { className: "relative flex items-center justify-center gap-2 mb-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-auto p-4", children: (0, jsx_runtime_1.jsx)("div", { className: "mb-2 text-xl text-neutral-600 font-semibold tracking-tight", children: (0, jsx_runtime_1.jsx)("button", { onClick: handleAnswerYes, className: "inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-green-700 hover:bg-green-800 focus:bg-green-800 rounded-lg focus:ring-4 focus:ring-green-300 transition duration-200", children: positiveBtnText }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-auto p-4", children: (0, jsx_runtime_1.jsx)("div", { className: "mb-2 text-xl text-neutral-600 font-semibold tracking-tight", children: (0, jsx_runtime_1.jsx)("button", { onClick: handleAnswerNo, className: "inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-crimson-700 hover:bg-crimson-800 focus:bg-crimson-800 rounded-lg focus:ring-4 focus:ring-red-300 transition duration-200", children: negativeBtnText }) }) })] }) })] }) }) })] })) : ((0, jsx_runtime_1.jsx)(material_1.CircularProgress, {}))] }) }) }));
};
exports.default = DogsPage;
