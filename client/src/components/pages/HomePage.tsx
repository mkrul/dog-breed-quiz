import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Input, Typography } from "@mui/material";
import {
  setUsernameAction,
  clearUserStoreAction,
} from "../../redux/features/userSlice";
import { clearBreedsAction } from "../../redux/features/breedSlice";
import { clearSettingsAction } from "../../redux/features/settingSlice";
import { clearResultAction } from "../../redux/features/resultsSlice";
import { RootState } from "../../redux/store";
import { Result } from "../../interfaces/result";
import "../../assets/main.css";
import "../../assets/homepage.css";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [userNameInput, setUserNameInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resultData = useSelector((state: RootState) => state.results as Result);

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUserNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNameInput(e.target.value);
  };

  const handleSubmit = () => {
    if (userNameInput.length > 0) {
      try {
        dispatch(clearResultAction());
        dispatch(clearUserStoreAction());
        dispatch(clearBreedsAction());
        dispatch(clearSettingsAction());
        dispatch(setUsernameAction(userNameInput));
      } catch (error) {
        console.log(error);
      }
      navigate("/test/alignment");
    } else {
      alert("Please enter a username to begin the test");
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
                  src={require("../../assets/images/pit-bull-01.jpg")}
                  alt="Photo by Katie Bernotsky"
                />
                <div className="mt-4 text-sm">
                  Photo by{" "}
                  <a
                    href="https://unsplash.com/@pupscruffs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Katie Bernotsky
                  </a>{" "}
                  on{" "}
                  <a
                    href="https://unsplash.com/photos/black-and-white-short-coated-dog-on-green-grass-field-during-daytime-47vG88bHW7U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unsplash
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-5">
              <div className="flex flex-col justify-center h-full">
                <div>
                  <h6 className="mb-10 text-5xl font-medium tracking-tight font-heading">
                    Why "ban this breed"?
                  </h6>
                  <Typography className="mb-4">
                    Proponents of breed-specific legislation (BSL) argue that
                    certain dog breeds should be banned or regulated based on
                    statistical data surrounding dog attacks. The most commonly
                    targeted breeds are those labeled "pit bulls". Many people
                    use "pit bull" as an umbrella term for dogs with certain
                    physical characteristics, such as a muscular build and a
                    short coat, and breed bans often target individual dogs
                    based on their appearance.
                  </Typography>
                  <Typography className="mb-4">
                    This project aims to measure the accuracy of visual breed
                    identification, as well as how different groups of people
                    identify dogs as pit bulls, taking their personal biases
                    into account.
                  </Typography>
                  <Typography className="mb-6">
                    You can learn more about this test by clicking{" "}
                    {
                      <Link to="/about" className="font-bold">
                        here
                      </Link>
                    }
                    .
                  </Typography>
                  <div className="flex flex-wrap -m-4 justify-center">
                    <div className="w-full md:w-auto p-4">
                      <p className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                        {!resultData.completed && (
                          <button
                            onClick={handleOpenModal}
                            className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
                          >
                            Start the test
                          </button>
                        )}
                        {showModal && (
                          <Modal
                            open={showModal}
                            onClose={handleCloseModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={modalStyle} borderRadius={2}>
                              <h2 className="text-2xl font-semibold tracking-tight">
                                Please enter a username
                              </h2>
                              <Input
                                type="text"
                                value={userNameInput}
                                onChange={handleUserNameInput}
                                placeholder={"Type your name here"}
                                className="mt-4 mb-4"
                              />
                              <div className="flex justify-around">
                                <button
                                  onClick={handleSubmit}
                                  className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 mt-3"
                                >
                                  Start test
                                </button>
                                <button
                                  onClick={handleCloseModal}
                                  className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 mt-3"
                                >
                                  Close
                                </button>
                              </div>
                            </Box>
                          </Modal>
                        )}
                      </p>
                    </div>
                    <div className="w-full md:w-auto p-4">
                      <p className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                        <Link
                          to="/test/results"
                          className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
                        >
                          View results
                        </Link>
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

export default HomePage;
