import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import Slider from "@mui/material/Slider";
import { IUserState } from "../../interfaces/user";
import {
  setPercentageAction,
  setBufferAction,
} from "../../redux/features/userSlice";

const DnaPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedPercentage = useSelector(
    (state: { user: IUserState }) => state.user.percentage
  );
  const useBuffer = useSelector(
    (state: { user: IUserState }) => state.user.useBuffer
  );

  const [showSvg, setShowSvg] = useState(false); // State to control SVG visibility

  const handleBufferChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBufferAction(event.target.checked));
    setShowSvg(event.target.checked); // Control SVG visibility via state
  };

  const handlePercentageChange = (event: Event, value: number | number[]) => {
    dispatch(setPercentageAction(value as number));
  };

  const handleSubmit = () => {
    if (selectedPercentage < 20) {
      alert("Please select a percentage.");
    } else {
      navigate("/test");
    }
  };

  return (
    <div className="antialiased bg-body text-body font-body">
      <section className="pt-8 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 md:mb-20 text-5xl sm:text-6xl md:text-9xl xl:text-10xl font-semibold font-heading"></h2>
          <div className="flex flex-wrap -m-5">
            <div className="w-full md:w-1/2 p-5">
              <div className="overflow-hidden rounded-2xl">
                <img
                  className="w-full h-full object-cover"
                  src={require("../../assets/images/pit-bull-03.jpg")}
                  alt="Photo by Katie Bernotsky"
                />
                <div className="mt-4 text-sm">
                  Photo by{" "}
                  <a href="https://www.pinterest.com/workingdogsintheworld/">
                    Dogs In The World
                  </a>{" "}
                  on{" "}
                  <a href="https://i.pinimg.com/originals/24/35/63/24356337cf5b07b6c28e76f3806ff2a0.jpg">
                    Pinterest
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-5">
              <div className="flex flex-col justify-center h-full">
                <div>
                  <h6 className="mb-10 text-4xl font-medium tracking-tight font-heading">
                    What percentage of pit bull DNA would you use to classify a
                    dog as a pit bull?
                  </h6>
                  <p className="mb-5 text-xl text-neutral-700 font-medium">
                    Adjust the slider to set a percentage. An optional 10%
                    buffer may be applied, meaning that any dog with a DNA match
                    within 10% of the selected percentage value will be counted
                    in your results.
                  </p>
                  <div className="mb-2 ml-6">
                    <Slider
                      aria-label="percentage"
                      value={selectedPercentage}
                      valueLabelDisplay="auto"
                      shiftStep={30}
                      onChange={handlePercentageChange}
                      step={10}
                      marks
                      min={20}
                      max={100}
                    />
                  </div>
                  <div>
                    <p className="mb-5 text-xl text-neutral-700 font-medium">
                      Selected value:{" "}
                      <span className="font-bold">{selectedPercentage}%</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="mb-6 text-xl text-neutral-700 font-medium flex justify-center">
                      <input
                        className="input-radio-1-06 opacity-0 absolute h-8 w-8 rounded-full"
                        type="checkbox"
                        id="use-buffer-radio"
                        name="useBuffer"
                        checked={useBuffer}
                        onChange={handleBufferChange}
                      />
                      <div className="border border-neutral-600 w-8 h-8 flex justify-center items-center rounded-full">
                        <svg
                          className="fill-current hidden"
                          id="use-buffer"
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={11}
                          viewBox="0 0 15 11"
                          fill="none"
                        >
                          <line
                            x1="0.353553"
                            y1="5.64645"
                            x2="4.35355"
                            y2="9.64645"
                            stroke="currentColor"
                          />
                          <line
                            x1="14.3536"
                            y1="0.353553"
                            x2="4.35355"
                            y2="10.3536"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="w-5/6 text-neutral-600 text-lg font-medium tracking-tight text-left ml-3 checkbox-line-height">
                        Use 10% buffer?
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap -m-4 justify-center">
                    <div className="w-full md:w-auto p-4">
                      <p className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                        <button
                          onClick={() => navigate("/test/breeds")}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DnaPage;
