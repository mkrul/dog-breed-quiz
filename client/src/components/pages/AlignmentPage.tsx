import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { setAlignmentAction } from "../../redux/features/settingSlice";
import { Settings } from "../../interfaces/settings";
import "../../assets/main.css";

const AlignmentPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedAlignment = useSelector(
    (state: { settings: Settings }) => state.settings.alignment
  );

  const handleSetAlignment = (value: string) => {
    dispatch(setAlignmentAction(value));
  };

  const handleSubmit = () => {
    if (selectedAlignment.length > 0) {
      navigate("/test/breeds");
    } else {
      alert("Please select an alignment to continue");
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
                  src={require("../../assets/images/pit-bull-02.jpg")}
                  alt="Photo by Karthegan Padmanaban"
                />
                <div className="mt-4 text-sm">
                  Photo by{" "}
                  <a
                    href="https://unsplash.com/@gixxerkidd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                  >
                    Karthegan Padmanaban
                  </a>{" "}
                  on{" "}
                  <a
                    href="https://unsplash.com/photos/white-and-brown-american-pitbull-terrier-puppy-on-green-grass-field-during-daytime-zLMkYi-3-W0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
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
                    Choose the statement that best aligns with your beliefs
                  </h6>
                  <div className="mb-6">
                    <div className="relative flex items-center gap-2 mb-4">
                      <FormGroup>
                        <FormControlLabel
                          className="text-neutral-600 text-lg font-medium tracking-tight text-left ml-2 relative flex items-center gap-2 mb-4"
                          control={
                            <Checkbox
                              checked={selectedAlignment === "pro"}
                              onChange={() => handleSetAlignment("pro")}
                              inputProps={{ "aria-label": "pro" }}
                            />
                          }
                          label="Pit bulls make wonderful pets if they have a good owner to train and socialize them."
                        />
                        <FormControlLabel
                          className="text-neutral-600 text-lg font-medium tracking-tight text-left ml-2 relative flex items-center gap-2 mb-4"
                          control={
                            <Checkbox
                              checked={selectedAlignment === "neutral"}
                              onChange={() => handleSetAlignment("neutral")}
                              inputProps={{ "aria-label": "neutral" }}
                            />
                          }
                          label="Pit bulls are genetically inclined to be dog
                        aggressive, but in the right hands, they can be amazing
                        companions."
                        />
                        <FormControlLabel
                          className="text-neutral-600 text-lg font-medium tracking-tight text-left ml-2 relative flex items-center gap-2 mb-4"
                          control={
                            <Checkbox
                              checked={selectedAlignment === "anti"}
                              onChange={() => handleSetAlignment("anti")}
                              inputProps={{ "aria-label": "anti" }}
                            />
                          }
                          label="Pit bulls are dangerous and should be banned,
                          regulated, or phased out of existence."
                        />
                      </FormGroup>
                    </div>
                  </div>

                  <div className="flex flex-wrap -m-4 justify-center">
                    <div className="w-full md:w-auto p-4">
                      <p className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                        <button
                          onClick={handleSubmit}
                          className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
                        >
                          Next
                        </button>
                      </p>
                    </div>
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

export default AlignmentPage;
