import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import Slider from "@mui/material/Slider";
import { Settings } from "../../interfaces/settings";
import { Modal, Box, Typography } from "@mui/material";
import { setPercentageAction } from "../../redux/features/settingSlice";

const DnaPage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const selectedPercentage = useSelector(
    (state: { settings: Settings }) => state.settings.percentage
  );

  const handlePercentageChange = (event: Event, value: number | number[]) => {
    dispatch(setPercentageAction(value as number));
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    if (selectedPercentage < 20) {
      alert("Please select a percentage.");
    } else {
      navigate("/test/dogs");
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
                  alt="Photo by Dogs In The World"
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
                    Adjust the slider to select a percentage. The system
                    includes a 10% courtesy buffer, meaning it considers
                    selections within 10% of the actual percentage as correct.
                    For instance, if a dog is 40% American Bully and you select
                    50%, your answer will be deemed correct because it falls
                    within the 10% buffer range.
                  </p>
                  <div className="mb-2 ml-6">
                    <Slider
                      aria-label="percentage"
                      value={selectedPercentage}
                      valueLabelDisplay="auto"
                      shiftStep={30}
                      onChange={handlePercentageChange}
                      step={5}
                      marks
                      min={25}
                      max={100}
                    />
                  </div>
                  <div>
                    <p className="mb-5 text-xl text-neutral-700 font-medium">
                      Selected value:{" "}
                      <span className="font-bold">{selectedPercentage}%</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap -m-4 justify-center">
                    <div className="w-full md:w-auto p-4">
                      <p className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                        <button
                          onClick={handleOpenModal}
                          className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
                        >
                          Next
                        </button>
                        {showModal && (
                          <Modal
                            open={showModal}
                            onClose={handleCloseModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={modalStyle} borderRadius={2}>
                              <h2 className="text-2xl font-semibold tracking-tight">
                                Attention
                              </h2>
                              <Typography className="mb-4 mt-3">
                                You will now be shown 60 random dogs to
                                identify. Once you begin the test, you will{" "}
                                <strong>not</strong> be able to modify your
                                settings.
                              </Typography>
                              <Typography className="mb-4">
                                Click "Continue" to proceed or "Cancel" to
                                return to the previous screen and make
                                adjustments.
                              </Typography>
                              <div className="flex justify-around">
                                <button
                                  onClick={handleSubmit}
                                  className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 mt-3"
                                >
                                  Continue
                                </button>
                                <button
                                  onClick={handleCloseModal}
                                  className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 mt-3"
                                >
                                  Cancel
                                </button>
                              </div>
                            </Box>
                          </Modal>
                        )}
                      </p>
                    </div>
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
