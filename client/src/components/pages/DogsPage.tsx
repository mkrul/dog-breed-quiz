import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { CircularProgress } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { Dog } from "../../interfaces/dog";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RootState } from "../../redux/store";
import { Result } from "../../interfaces/result";
import {
  incrementFieldAsync,
  updateSelectionsAsync,
  updateUserAccuracyAsync,
} from "../../redux/features/resultsSlice";

const DogsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [dogData, setDogData] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFinalLoading, setShowFinalLoading] = useState(false);
  const [endOfTest, setEndOfTest] = useState(false);

  const userData = useSelector((state: RootState) => state.user);
  const breedData = useSelector((state: RootState) => state.breeds);
  const settingsData = useSelector((state: RootState) => state.settings);
  const resultData = useSelector((state: RootState) => state.results as Result);

  const settings = useSelector((state: RootState) => state.settings);
  const userSelectedPercentage = settings.percentage;

  const positiveBtnText =
    settingsData.alignment === "anti" ? "Ban it" : "It's a Pit";
  const negativeBtnText =
    settingsData.alignment === "anti" ? "Skip it" : "Not a Pit";

  useEffect(() => {
    if (endOfTest) {
      setShowFinalLoading(true);
      handleSaveUserData();
      setTimeout(() => {
        setShowFinalLoading(false);
        navigate("/results");
      }, 1000);
    }
  }, [resultData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/dogs");
        const res = await response.json();
        setDogData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();

    window.onbeforeunload = () => {
      return "";
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  const handleNext = async () => {
    if (currentIndex === dogData.length - 1) {
      setEndOfTest(true);
      dispatch(incrementFieldAsync({ field: "completed", increment: 1 }));
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleSaveUserData = async () => {
    try {
      const domain_url =
        process.env.NODE_ENV === "production"
          ? "https://www.banthisbreed.com"
          : "http://localhost";
      const response = await fetch(`${domain_url}:5000/api/user`, {
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

      const res = await response.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAnswerYes = async () => {
    const selectedBreeds = breedData.filter((breed) => breed.selected);

    let currentDogHasApbt = currentDog.apbt > 0;
    let currentDogHasAst = currentDog.ast > 0;
    let currentDogHasSbt = currentDog.sbt > 0;
    let currentDogHasAb = currentDog.ab > 0;

    let userSelectedApbt = selectedBreeds.find(
      (breed) => breed.label === "apbt"
    );

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

    await Promise.all([
      dispatch(incrementFieldAsync({ field: "totalDogs", increment: 1 })),
      dispatch(incrementFieldAsync({ field: "totalSelected", increment: 1 })),
      dispatch(
        incrementFieldAsync({
          field: correctGuess ? "totalCorrectGuesses" : "totalIncorrectGuesses",
          increment: 1,
        })
      ),
      dispatch(
        updateSelectionsAsync({
          imageUrl,
          correctGuess: !!correctGuess,
          dir: currentDog.dir,
          image: currentDog.images[0],
        })
      ),
      dispatch(updateUserAccuracyAsync()),
    ]).finally(() => {
      handleNext();
    });
  };

  const handleAnswerNo = async () => {
    const selectedBreeds = breedData.filter((breed) => breed.selected);

    let currentDogHasApbt = currentDog.apbt > 0;
    let currentDogHasAst = currentDog.ast > 0;
    let currentDogHasSbt = currentDog.sbt > 0;
    let currentDogHasAb = currentDog.ab > 0;

    let userSelectedApbt = selectedBreeds.find(
      (breed) => breed.label === "apbt"
    );

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

    await Promise.all([
      dispatch(incrementFieldAsync({ field: "totalDogs", increment: 1 })),
      dispatch(incrementFieldAsync({ field: "totalSkipped", increment: 1 })),
      dispatch(
        incrementFieldAsync({
          field: correctGuess ? "totalCorrectGuesses" : "totalIncorrectGuesses",
          increment: 1,
        })
      ),
      dispatch(
        updateSelectionsAsync({
          imageUrl,
          correctGuess: !!correctGuess,
          dir: currentDog.dir,
          image: currentDog.images[0],
        })
      ),
      dispatch(updateUserAccuracyAsync()),
    ]).finally(() => {
      handleNext();
    });
  };

  const currentDog = dogData[currentIndex] || [];

  if (showFinalLoading === true) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <CircularProgress size={75} />
        <h2 className="mt-10 text-3xl font-semibold font-heading">
          Calculating Results...
        </h2>
      </div>
    );
  }

  return (
    <div className="antialiased bg-body text-body font-body">
      <section className="pt-8 py-12 md:py-24">
        <div className={loading ? "loading" : "container mx-auto px-4"}>
          <h2 className="mb-10 md:mb-20 text-5xl sm:text-6xl md:text-9xl xl:text-10xl font-semibold font-heading"></h2>
          {!loading && currentDog.images && currentDog.images.length > 0 ? (
            <div className="flex flex-wrap -m-5">
              <div className="w-full md:w-1/2 p-5">
                <div className="overflow-hidden rounded-2xl">
                  <Carousel>
                    {currentDog.images.map(
                      (image, index) =>
                        image && (
                          <img
                            key={index}
                            className="w-full h-full object-cover scale-x-[-1]"
                            src={require(`../../assets/images/dogs/${currentDog.dir}/${image}`)}
                          />
                        )
                    )}
                  </Carousel>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-5">
                <div className="flex flex-col justify-center h-full">
                  <div>
                    <h6 className="mb-10 text-5xl font-medium tracking-tight font-heading">
                      {currentIndex + 1} / 60
                    </h6>
                    <div className="mb-6">
                      <div className="relative flex items-center justify-center gap-2 mb-4">
                        <div className="w-full md:w-auto p-4">
                          <div className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                            <button
                              onClick={handleAnswerYes}
                              className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-green-700 hover:bg-green-800 focus:bg-green-800 rounded-lg focus:ring-4 focus:ring-green-300 transition duration-200"
                            >
                              {positiveBtnText}
                            </button>
                          </div>
                        </div>
                        <div className="w-full md:w-auto p-4">
                          <div className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                            <button
                              onClick={handleAnswerNo}
                              className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-crimson-700 hover:bg-crimson-800 focus:bg-crimson-800 rounded-lg focus:ring-4 focus:ring-red-300 transition duration-200"
                            >
                              {negativeBtnText}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <CircularProgress />
          )}
        </div>
      </section>
    </div>
  );
};

export default DogsPage;
