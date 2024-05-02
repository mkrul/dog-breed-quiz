import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { setAlignmentAction } from "../../redux/features/settingsSlice";
import { Settings } from "../../interfaces/settings";

const AlignmentPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedAlignment = useSelector(
    (state: { settings: Settings }) => state.settings.alignment
  );

  useEffect(() => {
    const radioInput = document.getElementById(`${selectedAlignment}-radio`);
    if (radioInput && selectedAlignment.length > 0) {
      radioInput.setAttribute("checked", "checked");
      displayNewAlignment(selectedAlignment);
    }
  }, [selectedAlignment]);

  const handleSetAlignment = (value: string) => {
    dispatch(setAlignmentAction(value));
    displayNewAlignment(value);
  };

  const displayNewAlignment = (value: string) => {
    const selected = document.getElementById(
      `${value}-radio`
    ) as HTMLInputElement;
    selected.checked = true;
    const style = document.getElementById(`${value}-style`);
    style?.classList.remove("hidden");
    hideUnselectedAlignment(selected);
  };

  const hideUnselectedAlignment = (selected: HTMLInputElement) => {
    document.querySelectorAll("input[type=checkbox]").forEach((el) => {
      const option = el as HTMLInputElement;
      if (option !== selected) {
        option.removeAttribute("checked");
        const style = document.getElementById(`${option.value}-style`);
        style?.classList.add("hidden");
      }
    });
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
                  alt="Photo by Katie Bernotsky"
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
                  <div className="mb-6 ml-6">
                    <label className="relative flex items-center gap-2 mb-4">
                      <input
                        className="input-radio-1-06 opacity-0 absolute h-8 w-8 rounded-full"
                        type="checkbox"
                        id="pro-radio"
                        name="field-radio"
                        value="pro"
                        checked={selectedAlignment === "pro"}
                        onChange={() => handleSetAlignment("pro")}
                      />
                      <div className="border border-neutral-600 w-8 h-8 flex justify-center items-center rounded-full">
                        <svg
                          className="fill-current hidden"
                          id="pro-style"
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
                      <span className="w-5/6 text-neutral-600 text-lg font-medium tracking-tight text-left  ml-2">
                        "Pit bulls are like any other dog! It's all in how you
                        raise them."
                      </span>
                    </label>
                    <label className="relative flex items-center gap-2 mb-4">
                      <input
                        className="input-radio-2-06 opacity-0 absolute h-8 w-8 rounded-full"
                        type="checkbox"
                        id="neutral-radio"
                        name="field-radio"
                        value="neutral"
                        checked={selectedAlignment === "neutral"}
                        onChange={() => handleSetAlignment("neutral")}
                      />
                      <div className="border border-neutral-600 w-8 h-8 flex justify-center items-center rounded-full">
                        <svg
                          className="fill-current hidden"
                          id="neutral-style"
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
                      <span className="w-5/6 text-neutral-600 text-lg font-medium tracking-tight text-left  ml-2">
                        "Pit bulls are genetically inclined to be dog
                        aggressive, but in the right hands, they can be amazing
                        companions."
                      </span>
                    </label>
                    <label className="relative flex items-center gap-2 mb-4">
                      <input
                        className="input-radio-1-06 opacity-0 absolute h-8 w-8 rounded-full"
                        type="checkbox"
                        id="anti-radio"
                        name="field-radio"
                        value="anti"
                        checked={selectedAlignment === "anti"}
                        onChange={() => handleSetAlignment("anti")}
                      />
                      <div className="border border-neutral-600 w-8 h-8 flex justify-center items-center rounded-full">
                        <svg
                          className="fill-current hidden"
                          id="anti-style"
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
                      <span className="w-5/6 text-neutral-600 text-lg font-medium tracking-tight text-left  ml-2">
                        "Pit bulls are dangerous and should be banned,
                        regulated, or phased out of existence."
                      </span>
                    </label>
                  </div>

                  <div className="flex flex-wrap -m-4 justify-center">
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
