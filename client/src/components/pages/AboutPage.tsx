import React, { useState } from "react";
import { Link } from "react-router-dom";
import Circle from "../Circle";

interface targetVisibilityState {
  [buttonId: string]: boolean;
}

const AboutPage: React.FC = () => {
  const [divVisibility, setDivVisibility] = useState<targetVisibilityState>({});

  const toggleDivVisibility = (buttonId: string) => {
    setDivVisibility((prevVisibility) => ({
      ...prevVisibility,
      [buttonId]: !prevVisibility[buttonId],
    }));
  };

  return (
    <React.Fragment>
      <div className="antialiased bg-body text-body font-body">
        <section className="pt-8 py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/3 p-8">
                <h1 className="text-6xl sm:text-9xl xl:text-11xl font-semibold mb-10 font-heading text-neutral-900">
                  FAQ
                </h1>
                <p className="text-xl font-medium max-w-3xl text-neutral-400">
                  If you have any questions that aren't answered here, please
                  contact us at{" "}
                  <a href="mailto: banthisbreed@gmail.com">
                    banthisbreed@gmail.com
                  </a>
                </p>
              </div>
              <div className="w-full md:w-2/3 p-8">
                <div className="pt-4 pb-8 border-t border-neutral-600">
                  <div className="flex justify-between gap-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold font-heading text-neutral-700 text-left">
                      What is the purpose of this test?
                    </h2>
                    <Circle buttonId="q1" toggle={toggleDivVisibility} />
                  </div>
                  {divVisibility["q1"] && (
                    <div className="mt-5 text-left">
                      This assessment is intended to provide participants with
                      an opportunity to learn more about the limitations of
                      visual breed identification, as well as how individual
                      biases can influence the way that we perceive dogs.
                    </div>
                  )}
                </div>
                <div className="pt-4 pb-8 border-t border-neutral-600">
                  <div className="flex justify-between gap-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold font-heading text-neutral-700 text-left">
                      How does the test work?
                    </h2>
                    <Circle buttonId="q2" toggle={toggleDivVisibility} />
                  </div>
                  {divVisibility["q2"] && (
                    <div className="mt-5 text-left">
                      This test is designed to measure how accurately pit bulls
                      can be identified based on observed physical
                      characteristics. The assessment relies on how individual
                      participants categorize pit bulls, as well as DNA test
                      results.
                    </div>
                  )}
                </div>
                <div className="pt-4 pb-8 border-t border-neutral-600">
                  <div className="flex justify-between gap-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold font-heading text-neutral-700 text-left">
                      Where do the DNA results come from?
                    </h2>
                    <Circle buttonId="q3" toggle={toggleDivVisibility} />
                  </div>
                  {divVisibility["q3"] && (
                    <div className="mt-5 text-left">
                      Data used in this assessment were gathered at random from
                      public sources . Some of the companies that provide DNA
                      testing services for dogs include{" "}
                      <a href="https://shop.embarkvet.com" target="_blank">
                        Embark
                      </a>
                      ,{" "}
                      <a href="https://www.wisdompanel.com/" target="_blank">
                        Wisdom Panel
                      </a>
                      ,{" "}
                      <a href="https://www.dnamydog.com/" target="_blank">
                        DNA My Dog
                      </a>
                      , and{" "}
                      <a href="https://www.orivet.com/" target="_blank">
                        Orivet
                      </a>{" "}
                      . Because Embark is widely considered to be the most
                      accurate DNA test kit for dogs, this project will use
                      Embark's results to compare against visual breed
                      identifications.
                    </div>
                  )}
                </div>
                <div className="pt-4 pb-8 border-t border-neutral-600">
                  <div className="flex justify-between gap-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold font-heading text-neutral-700 text-left">
                      What are the limitations of using DNA to identify breeds?
                    </h2>
                    <Circle buttonId="q4" toggle={toggleDivVisibility} />
                  </div>
                  {divVisibility["q4"] && (
                    <div className="mt-5 text-left">
                      <p>
                        DNA testing can only detect breeds that are present in a
                        dog's immediate ancestry, and ancestors more than four
                        generations back may not be detected at all. The
                        accuracy of DNA tests can also vary significantly
                        between different companies and tests.
                      </p>
                      <p className="mt-2">
                        Additionally, some breeds can be especially difficult to
                        distinguish from one another due to their common
                        ancestry. For example, the genetic profiles of the
                        American Pit Bull Terrier and the American Staffordshire
                        Terrier are very similar, as they are closely related
                        breeds.
                      </p>
                    </div>
                  )}
                </div>
                <div className="pt-4 pb-8 border-t border-neutral-600">
                  <div className="flex justify-between gap-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold font-heading text-neutral-700 text-left">
                      How will the results be used?
                    </h2>
                    <Circle buttonId="q5" toggle={toggleDivVisibility} />
                  </div>
                  {divVisibility["q5"] && (
                    <div className="mt-5 text-left">
                      This project was developed for educational and
                      entertainment purposes by a private third party and is not
                      a part of any official government or academic research. It
                      is not affiliated with Embark or any other DNA testing
                      service. The results of this test are not intended to
                      promote any specific breed or type of dog.
                    </div>
                  )}
                </div>
                <div className="container w-full mt-6">
                  <Link
                    to="/1"
                    className="inline-flex items-center justify-center text-center h-16 p-5 font-semibold text-lg text-white tracking-tight bg-neutral-900 hover:bg-neutral-200 focus:bg-neutral-200 rounded-lg focus:ring-4 focus:ring-neutral-300 transition duration-200"
                  >
                    Go Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
