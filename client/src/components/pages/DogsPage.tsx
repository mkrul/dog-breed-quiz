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
import { current } from "@reduxjs/toolkit";
import { handleItemSelection } from "@mui/base/useList";

const DogsPage = () => {
  const [dogData, setDogData] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
  }, []);

  const handleNext = (value) => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dogData.length);
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
                    <div className="mb-6 ml-6">
                      <div className="relative flex items-center gap-2 mb-4">
                        <div className="w-full md:w-auto p-4">
                          <div className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                            <button
                              onClick={handleNext(true)}
                              className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
                            >
                              It's a Pit
                            </button>
                          </div>
                        </div>
                        <div className="w-full md:w-auto p-4">
                          <div className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                            <button
                              onClick={handleNext(false)}
                              className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-200 focus:bg-neutral-200 rounded-lg focus:ring-4 focus:ring-neutral-300 transition duration-200"
                            >
                              Not a Pit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="flex flex-wrap -m-4 justify-center">
                    <div className="w-full md:w-auto p-4">
                      <p className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                        <button
                          onClick={() => navigate("/")}
                          className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
                        >
                          Back
                        </button>
                      </p>
                    </div>
                    <div className="w-full md:w-auto p-4">
                      <p className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                        <button
                          onClick={handleSubmit}
                          className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-200 focus:bg-neutral-200 rounded-lg focus:ring-4 focus:ring-neutral-300 transition duration-200"
                        >
                          Next
                        </button>
                      </p>
                    </div>
                  </div> */}
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
