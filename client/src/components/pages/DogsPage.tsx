import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { CircularProgress } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Carousel } from "react-responsive-carousel";
import { Dog } from "../../interfaces/dog";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { addScoreAction } from "../../redux/features/scoreSlice";
import { RootState } from "../../redux/store";

const DogsPage = () => {
  const [dogData, setDogData] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const handleNext = () => {
    if (currentIndex + 1 >= dogData.length) {
      navigate("/results");
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dogData.length);
    }
  };

  const handleAnswer = (isYesAnswer: boolean) => {
    const { apbt, ast, sbt, ab } = currentDog;
    const imageUrl = `../../assets/images/dogs/${currentDog.dir}/${currentDog.images[0]}`;
    let sum = apbt + ast + sbt + ab;
    let correctGuess = false;
    let correctWithBuffer = false;

    if (
      (isYesAnswer && sum >= percentage) ||
      (!isYesAnswer && sum < percentage)
    ) {
      correctGuess = true;
    }

    if (buffer) {
      sum += 10;
      if (
        (isYesAnswer && sum >= percentage) ||
        (!isYesAnswer && sum < percentage)
      ) {
        correctWithBuffer = true;
      }
    }

    dispatch(
      addScoreAction({
        imageUrl,
        correctGuess,
        correctWithBuffer,
      })
    );

    handleNext();
  };

  const handleAnswerNo = () => {
    handleAnswer(false);
  };

  const handleAnswerYes = () => {
    handleAnswer(true);
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
