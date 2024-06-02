import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  addBreedAction,
  removeBreedAction,
} from "../../redux/features/breedSlice";
import { RootState } from "../../redux/store";

const BreedsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState("pit-bull-02");
  const [imageAuthor, setImageAuthor] = useState("Karthegan Padmanaban");
  const [imageSource, setImageSource] = useState("Unsplash");
  const [imageLinkPrimary, setImageLinkPrimary] = useState(
    "https://unsplash.com/@gixxerkidd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
  );
  const [imageLinkSecondary, setImageLinkSecondary] = useState(
    "https://unsplash.com/photos/white-and-brown-american-pitbull-terrier-puppy-on-green-grass-field-during-daytime-zLMkYi-3-W0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
  );

  const selectedBreeds = useSelector((state: RootState) => state.breeds);

  const handleSetBreed = (breed: string) => {
    const index = selectedBreeds.findIndex((b) => b.label === breed);
    if (index > -1) {
      if (selectedBreeds[index].selected) {
        dispatch(removeBreedAction(breed));
      } else {
        dispatch(addBreedAction(breed));
      }
    }
  };

  const handleSubmit = () => {
    const selected = selectedBreeds.filter((breed) => breed.selected);
    if (selected.length > 0) {
      navigate("/test/dna");
    } else {
      alert("Select at least one breed to continue");
    }
  };

  const handleChangeImageData = (name: string) => {
    switch (name) {
      case "American Pit Bull Terrier":
        setImageAuthor("Unknown");
        setImageSource("Pinterest");
        setImageLinkPrimary("https://www.pinterest.com/pin/34973334599054212/");
        setImageLinkSecondary(
          "https://i.pinimg.com/originals/93/08/c8/9308c8aed4571ccd7a1ae0efaacd6fd4.jpg"
        );
        setSelectedImage("apbt");
        break;
      case "American Staffordshire Terrier":
        setImageAuthor("Raya");
        setImageSource("Pinterest");
        setImageLinkPrimary(
          "https://www.pinterest.com/4th3American Staffordshire Terrier/"
        );
        setImageLinkSecondary(
          "https://www.pinterest.com/pin/1040120476434643492/"
        );
        setSelectedImage("ast");
        break;
      case "Staffordshire Bull Terrier":
        setImageAuthor("Rohan");
        setImageSource("Unsplash");
        setImageLinkPrimary(
          "https://unsplash.com/@rohanphoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        );
        setImageLinkSecondary(
          "https://unsplash.com/photos/black-short-coated-dog-on-green-grass-field-during-daytime-UxyBUbmBXIU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        );
        setSelectedImage("sbt");
        break;
      case "American Bully":
        setImageAuthor("Attitude Boy");
        setImageSource("Pinterest");
        setImageLinkPrimary("https://www.pinterest.com/aamirsohailkrk/");
        setImageLinkSecondary(
          "https://i.pinimg.com/originals/ff/5b/69/ff5b694c23003aa14aea8b166b2c96d7.jpg"
        );
        setSelectedImage("ab");
        break;
      default:
        setImageAuthor("Katie Bernotsky");
        setImageSource("Unsplash");
        setImageLinkPrimary(
          "https://unsplash.com/@gixxerkidd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        );
        setImageLinkSecondary(
          "https://unsplash.com/photos/white-and-brown-american-pitbull-terrier-puppy-on-green-grass-field-during-daytime-zLMkYi-3-W0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        );
        setSelectedImage("pit-bull-02");
        break;
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
                    {selectedBreeds.map((breed) => (
                      <FormGroup key={breed.label}>
                        <FormControlLabel
                          className="text-neutral-600 text-lg font-medium tracking-tight text-left ml-2 relative flex items-center gap-2 mb-2"
                          onMouseEnter={() => handleChangeImageData(breed.name)}
                          control={
                            <Checkbox
                              checked={breed.selected}
                              onChange={() => handleSetBreed(breed.label)}
                              inputProps={{
                                "aria-label": breed.label,
                              }}
                            />
                          }
                          label={breed.name}
                        />
                      </FormGroup>
                    ))}
                  </div>
                  <div className="flex flex-wrap -m-4 justify-center">
                    <div className="w-full md:w-auto p-4">
                      <div className="mb-2 text-xl text-neutral-600 font-semibold tracking-tight">
                        <button
                          onClick={handleSubmit}
                          className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
                        >
                          Next
                        </button>
                      </div>
                    </div>
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
