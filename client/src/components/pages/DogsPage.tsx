import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { CircularProgress } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { Dog } from "../../interfaces/dog";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { addResultAsync } from "../../redux/features/resultSlice";
import { RootState } from "../../redux/store";
import { Result } from "../../interfaces/result";
import { Score } from "../../interfaces/score";
import {
  addTotalDogsAction,
  addTotalDogsSelectedAction,
  addTotalCorrectGuessesAction,
  addtotalCorrectWithBufferAction,
  addTotalIncorrectGuessesAction,
  addTotalIncorrectWithBufferAction,
  addTotalSkippedAction,
  updateUserAccuracyAction,
  addTotalDogs,
} from "../../redux/features/scoreSlice";

const DogsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [dogData, setDogData] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedBreeds = useSelector((state: RootState) => state.breeds);
  const scoreData = useSelector((state: RootState) => state.score as Score);
  const resultData = useSelector(
    (state: RootState) => state.result as Result[]
  );
  // get settings from redux store
  const settings = useSelector((state: RootState) => state.settings);
  const buffer = settings.buffer;
  const percentage = settings.percentage;

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

    // Unmount the window.onbeforeunload event
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  const calculateTotalDogs = async () => {
    return scoreData.totalDogs + 1;
  };

  const calculateCurrentUserAccuracy = (totalDogs: number) => {
    const userAccuracy = (scoreData.totalCorrectGuesses / totalDogs) * 100;

    return Math.round(userAccuracy * 100) / 100;
  };

  const handleNext = async () => {
    if (currentIndex >= dogData.length - 1) {
      navigate("/results");
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleAnswerYes = async () => {
    const apbtPercentage = currentDog.apbt;
    const astPercentage = currentDog.ast;
    const sbtPercentage = currentDog.sbt;
    const abPercentage = currentDog.ab;
    let bufferValue = 10;
    let userSelectedApbt = false;
    let userSelectedAst = false;
    let userSelectedSbt = false;
    let userSelectedAb = false;
    let selected = 1;
    const imageUrl = `../../assets/images/dogs/${currentDog.dir}/${currentDog.images[0]}`;
    let guessResult = 0;
    let resultWithBuffer = 0;

    // iterate through selectedBreeds and determine which breeds the user selected
    selectedBreeds.forEach((breed) => {
      if (breed.name === "American Pit Bull Terrier" && breed.selected) {
        userSelectedApbt = true;
      }
      if (breed.name === "American Staffordshire Terrier" && breed.selected) {
        userSelectedAst = true;
      }
      if (breed.name === "Staffordshire Bull Terrier" && breed.selected) {
        userSelectedSbt = true;
      }
      if (breed.name === "American Bully" && breed.selected) {
        userSelectedAb = true;
      }
    });

    const totalDogs = await calculateTotalDogs();
    dispatch(addTotalDogsAction(totalDogs));
    dispatch(
      addTotalDogsSelectedAction(scoreData.totalDogsSelected + selected)
    );

    console.log("userSelectedAb", userSelectedAb);
    console.log("abPercentage", abPercentage);
    console.log(
      "userSelectedAb && abPercentage >= percentage",
      userSelectedAb && abPercentage >= percentage
    );
    if (
      (userSelectedApbt && apbtPercentage >= percentage) ||
      (userSelectedAst && astPercentage >= percentage) ||
      (userSelectedSbt && sbtPercentage >= percentage) ||
      (userSelectedAb && abPercentage >= percentage)
    ) {
      guessResult = 1;
      dispatch(
        addTotalCorrectGuessesAction(
          scoreData.totalCorrectGuesses + guessResult
        )
      );
    } else {
      dispatch(
        addTotalIncorrectGuessesAction(
          scoreData.totalIncorrectGuesses + guessResult
        )
      );
    }

    if (buffer) {
      if (
        (userSelectedApbt && apbtPercentage + bufferValue >= percentage) ||
        (userSelectedAst && astPercentage + bufferValue >= percentage) ||
        (userSelectedSbt && sbtPercentage + bufferValue >= percentage) ||
        (userSelectedAb && abPercentage + bufferValue >= percentage)
      ) {
        resultWithBuffer = 1;
        dispatch(
          addtotalCorrectWithBufferAction(
            scoreData.totalCorrectWithBuffer + resultWithBuffer
          )
        );
      } else {
        dispatch(
          addTotalIncorrectWithBufferAction(
            scoreData.totalIncorrectWithBuffer + resultWithBuffer
          )
        );
      }
    }

    await dispatch(
      addResultAsync({
        imageUrl,
        selected: selected === 1,
        correctGuess: guessResult === 1,
        correctWithBuffer: resultWithBuffer === 1,
      })
    );

    const accuracy = calculateCurrentUserAccuracy(totalDogs);
    dispatch(updateUserAccuracyAction(accuracy));

    handleNext();
  };

  const handleAnswerNo = async () => {
    const apbtPercentage = currentDog.apbt;
    const astPercentage = currentDog.ast;
    const sbtPercentage = currentDog.sbt;
    const abPercentage = currentDog.ab;
    let bufferValue = 10;
    let userSelectedApbt = false;
    let userSelectedAst = false;
    let userSelectedSbt = false;
    let userSelectedAb = false;

    // iterate through selectedBreeds and determine which breeds the user selected
    selectedBreeds.forEach((breed) => {
      if (breed.name === "American Pit Bull Terrier" && breed.selected) {
        userSelectedApbt = true;
      }
      if (breed.name === "American Staffordshire Terrier" && breed.selected) {
        userSelectedAst = true;
      }
      if (breed.name === "Staffordshire Bull Terrier" && breed.selected) {
        userSelectedSbt = true;
      }
      if (breed.name === "American Bully" && breed.selected) {
        userSelectedAb = true;
      }
    });

    let selected = 0;
    const imageUrl = `../../assets/images/dogs/${currentDog.dir}/${currentDog.images[0]}`;
    let guessResult = 0;
    let resultWithBuffer = 0;

    const totalDogs = await calculateTotalDogs();
    dispatch(addTotalDogsAction(totalDogs));
    dispatch(addTotalSkippedAction(scoreData.totalSkipped + 1));

    if (
      (userSelectedApbt && apbtPercentage < percentage) ||
      (userSelectedAst && astPercentage < percentage) ||
      (userSelectedSbt && sbtPercentage < percentage) ||
      (userSelectedAb && abPercentage < percentage)
    ) {
      guessResult = 1;
      dispatch(
        addTotalCorrectGuessesAction(
          scoreData.totalCorrectGuesses + guessResult
        )
      );
    } else {
      dispatch(
        addTotalIncorrectGuessesAction(
          scoreData.totalIncorrectGuesses + guessResult
        )
      );
    }

    if (buffer) {
      if (
        (userSelectedApbt && apbtPercentage + bufferValue < percentage) ||
        (userSelectedAst && astPercentage + bufferValue < percentage) ||
        (userSelectedSbt && sbtPercentage + bufferValue < percentage) ||
        (userSelectedAb && abPercentage + bufferValue < percentage)
      ) {
        resultWithBuffer = 1;
        dispatch(
          addtotalCorrectWithBufferAction(
            scoreData.totalCorrectWithBuffer + resultWithBuffer
          )
        );
      } else {
        dispatch(
          addTotalIncorrectWithBufferAction(
            scoreData.totalIncorrectWithBuffer + resultWithBuffer
          )
        );
      }
    }

    await dispatch(
      addResultAsync({
        imageUrl,
        selected: selected === 0,
        correctGuess: guessResult === 1,
        correctWithBuffer: resultWithBuffer === 1,
      })
    );

    const accuracy = calculateCurrentUserAccuracy(totalDogs);
    dispatch(updateUserAccuracyAction(accuracy));

    handleNext();
  };

  const currentDog = dogData[currentIndex] || [];

  return (
    <div className="antialiased bg-body text-body font-body">
      <section className="pt-8 py-12 md:py-24">
        <div className={loading ? "loading" : "container mx-auto px-4"}>
          <h2 className="mb-10 md:mb-20 text-5xl sm:text-6xl md:text-9xl xl:text-10xl font-semibold font-heading"></h2>
          {!loading && currentDog?.images?.length > 0 ? (
            <div className="flex flex-wrap -m-5">
              <div className="w-full md:w-1/2 p-5">
                <div className="overflow-hidden rounded-2xl">
                  <Carousel>
                    {currentDog.images.map(
                      (image, index) =>
                        image && (
                          <img
                            key={index}
                            className="w-full h-full object-cover"
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
                      {currentIndex + 1} / 50
                    </h6>
                    <div className="mb-6">
                      <div className="relative flex items-center justify-center gap-2 mb-4">
                        <div className="w-full md:w-auto p-4">
                          <div className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                            <button
                              onClick={handleAnswerYes}
                              className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-green-700 hover:bg-green-800 focus:bg-green-800 rounded-lg focus:ring-4 focus:ring-green-300 transition duration-200"
                            >
                              It's a Pit
                            </button>
                          </div>
                        </div>
                        <div className="w-full md:w-auto p-4">
                          <div className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                            <button
                              onClick={handleAnswerNo}
                              className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-crimson-700 hover:bg-crimson-800 focus:bg-crimson-800 rounded-lg focus:ring-4 focus:ring-red-300 transition duration-200"
                            >
                              Not a Pit
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
