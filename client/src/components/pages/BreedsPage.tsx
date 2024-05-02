import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector, useDispatch } from "react-redux";
import { User } from "../../interfaces/user";
import Checkbox from "@mui/material/Checkbox";
import {
  addBreedAction,
  removeBreedAction,
} from "../../redux/features/breedSlice";
import e from "cors";

const BreedsPage = () => {
  const allBreeds: string[] = [
    "American Pit Bull Terrier",
    "American Staffordshire Terrier",
    "Staffordshire Bull Terrier",
    "American Bully",
  ];
  const [selectedImage, setSelectedImage] = useState("pit-bull-02");
  const [imageAuthor, setImageAuthor] = useState("Karthegan Padmanaban");
  const [imageSource, setImageSource] = useState("Unsplash");
  const [imageLinkPrimary, setImageLinkPrimary] = useState(
    "https://unsplash.com/@gixxerkidd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
  );
  const [imageLinkSecondary, setImageLinkSecondary] = useState(
    "https://unsplash.com/photos/white-and-brown-american-pitbull-terrier-puppy-on-green-grass-field-during-daytime-zLMkYi-3-W0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedBreeds = useSelector(
    (state: { breeds: { name: string; selected: boolean }[] }) =>
      state.breeds.map((breed) => breed.name)
  );

  useEffect(() => {
    const svgs = document.querySelectorAll("svg");
    if (svgs && selectedBreeds.length > 0) {
      svgs.forEach((svg) => {
        if (selectedBreeds.includes(svg.id)) {
          svg.setAttribute("checked", "checked");
          svg.classList.remove("hidden");
        }
      });
    }
  }, [selectedBreeds]);

  const handleBreedChange = (breed: string) => {
    const el = document.getElementById(breed);
    console.log(el);
    if (selectedBreeds.includes(breed)) {
      dispatch(removeBreedAction(breed));
      el?.removeAttribute("checked");
      el?.classList.add("hidden");
    } else {
      dispatch(addBreedAction(breed));
      el?.setAttribute("checked", "checked");
      el?.classList.remove("hidden");
    }
  };

  const handleSubmit = () => {
    if (selectedBreeds.length > 0) {
      navigate("/test/dna");
    } else {
      alert("Select at least one breed to continue");
    }
  };

  const handleChangeImageData = (image: string) => {
    if ("pit-bull-02" === image) {
      setSelectedImage("pit-bull-02");
      setImageAuthor("Katie Bernotsky");
      setImageSource("Unsplash");
      setImageLinkPrimary(
        "https://unsplash.com/@gixxerkidd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
      );
      setImageLinkSecondary(
        "https://unsplash.com/photos/white-and-brown-american-pitbull-terrier-puppy-on-green-grass-field-during-daytime-zLMkYi-3-W0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
      );
    } else if ("American Pit Bull Terrier" === image) {
      setSelectedImage("American Pit Bull Terrier");
      setImageAuthor("Unknown");
      setImageSource("Pinterest");
      setImageLinkPrimary("https://www.pinterest.com/pin/34973334599054212/");
      setImageLinkSecondary(
        "https://i.pinimg.com/originals/93/08/c8/9308c8aed4571ccd7a1ae0efaacd6fd4.jpg"
      );
    } else if ("American Staffordshire Terrier" === image) {
      setSelectedImage("American Staffordshire Terrier");
      setImageAuthor("Raya");
      setImageSource("Pinterest");
      setImageLinkPrimary(
        "https://www.pinterest.com/4th3American Staffordshire Terrier/"
      );
      setImageLinkSecondary(
        "https://www.pinterest.com/pin/1040120476434643492/"
      );
    } else if ("Staffordshire Bull Terrier" === image) {
      setSelectedImage("Staffordshire Bull Terrier");
      setImageAuthor("Rohan");
      setImageSource("Unsplash");
      setImageLinkPrimary(
        "https://unsplash.com/@rohanphoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
      );
      setImageLinkSecondary(
        "https://unsplash.com/photos/black-short-coated-dog-on-green-grass-field-during-daytime-UxyBUbmBXIU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
      );
    } else if ("American Bully" === image) {
      setSelectedImage("American Bully");
      setImageAuthor("Attitude Boy");
      setImageSource("Pinterest");
      setImageLinkPrimary("https://www.pinterest.com/aamirsohailkrk/");
      setImageLinkSecondary(
        "https://i.pinimg.com/originals/ff/5b/69/ff5b694c23003aa14aea8b166b2c96d7.jpg"
      );
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
                  src={require(`../../assets/images/${selectedImage}.jpg`)}
                  alt={`Photo by ${imageAuthor}`}
                />
                <div className="mt-4 text-sm">
                  Photo by{" "}
                  <a href={imageLinkPrimary} target="_blank">
                    {imageAuthor}
                  </a>{" "}
                  on{" "}
                  <a href={imageLinkSecondary} target="_blank">
                    {imageSource}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-5">
              <div className="flex flex-col justify-center h-full">
                <div>
                  <h6 className="mb-10 text-5xl font-medium tracking-tight font-heading">
                    Select the breeds that you consider to be pit bulls
                  </h6>
                  <div className="mb-6 ml-6">
                    {allBreeds.map((breed) => (
                      <label
                        key={breed}
                        className="relative flex items-center gap-2 mb-4"
                        onMouseEnter={() => handleChangeImageData(`${breed}`)}
                      >
                        <input
                          className="input-radio-1-06 opacity-0 absolute h-8 w-8 rounded-full"
                          type="checkbox"
                          name="checkbox"
                          value={breed}
                          checked={selectedBreeds.includes(breed)}
                          onChange={() => handleBreedChange(breed)}
                        />
                        <div className="border border-neutral-600 w-8 h-8 flex justify-center items-center rounded-full">
                          <svg
                            className="fill-current hidden"
                            id={breed}
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
                          {breed}
                        </span>
                      </label>
                    ))}
                  </div>

                  <div className="flex flex-wrap -m-4 justify-center">
                    <div className="w-full md:w-auto p-4">
                      <div className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                        <button
                          onClick={() => navigate("/test/alignment")}
                          className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
                        >
                          Back
                        </button>
                      </div>
                    </div>
                    <div className="w-full md:w-auto p-4">
                      <div className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                        <button
                          onClick={handleSubmit}
                          className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-200 focus:bg-neutral-200 rounded-lg focus:ring-4 focus:ring-neutral-300 transition duration-200"
                        >
                          Next
                        </button>
                      </div>
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

export default BreedsPage;
