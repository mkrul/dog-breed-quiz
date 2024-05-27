import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Breakdown } from "../../interfaces/breakdown";
import { TopUser } from "../../interfaces/topUser";
import { Carousel } from "react-responsive-carousel";
import { RootState } from "../../redux/store";
import { Result } from "../../interfaces/result";
import { Selection } from "../../interfaces/selection";
import { CircularProgress } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ResultsPage = () => {
  const [showDogs, setShowDogs] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingBreakdown, setLoadingBreakdown] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const [proAccuracy, setProAccuracy] = useState(0);
  const [modAccuracy, setModerateAccuracy] = useState(0);
  const [antiAccuracy, setAntiAccuracy] = useState(0);
  const [proCount, setProCount] = useState(0);
  const [modCount, setModerateCount] = useState(0);
  const [antiCount, setAntiCount] = useState(0);
  const [proApbtCount, setProApbtCount] = useState(0);
  const [proApbtAccuracy, setProApbtAccuracy] = useState(0);
  const [proMultiCount, setProMultiCount] = useState(0);
  const [proMultiAccuracy, setProMultiAccuracy] = useState(0);
  const [modApbtCount, setModerateApbtCount] = useState(0);
  const [modApbtAccuracy, setModerateApbtAccuracy] = useState(0);
  const [modMultiCount, setModerateMultiCount] = useState(0);
  const [modMultiAccuracy, setModerateMultiAccuracy] = useState(0);
  const [antiApbtCount, setAntiApbtCount] = useState(0);
  const [antiApbtAccuracy, setAntiApbtAccuracy] = useState(0);
  const [antiMultiCount, setAntiMultiCount] = useState(0);
  const [antiMultiAccuracy, setAntiMultiAccuracy] = useState(0);
  const [topUsers, setTopUsers] = useState<TopUser[]>([]);

  const resultData = useSelector((state: RootState) => state.results as Result);
  const word1 = resultData.totalSelected === 1 ? "dog" : "dogs";
  const word2 = resultData.totalSelected === 1 ? "a pit bull" : "pit bulls";
  const word3 = resultData.totalIncorrectGuesses === 1 ? "was" : "were";
  const imageRefs = useRef(new Map());

  const incorrectGuesses = resultData.selections.filter(
    (selection: Selection) => !selection.correctGuess
  );

  const fetchAllUserData = async () => {
    try {
      setLoadingBreakdown(true);
      const domain_url =
        process.env.NODE_ENV === "production"
          ? "https://www.banthisbreed.com"
          : "http://localhost";
      const response = await fetch(`${domain_url}:5000/api/users`);
      response.json().then((res) => {
        const breakdown = res.data as Breakdown;
        setLoadingBreakdown(false);
        setShowBreakdown(true);
        setProAccuracy(breakdown.proAccuracy);
        setModerateAccuracy(breakdown.moderateAccuracy);
        setAntiAccuracy(breakdown.antiAccuracy);
        setProCount(breakdown.proCount);
        setModerateCount(breakdown.moderateCount);
        setAntiCount(breakdown.antiCount);
        setProApbtCount(breakdown.proApbtCount);
        setProApbtAccuracy(breakdown.proApbtAccuracy);
        setProMultiCount(breakdown.proMultiCount);
        setProMultiAccuracy(breakdown.proMultiAccuracy);
        setModerateApbtCount(breakdown.moderateApbtCount);
        setModerateApbtAccuracy(breakdown.moderateApbtAccuracy);
        setModerateMultiCount(breakdown.moderateMultiCount);
        setModerateMultiAccuracy(breakdown.moderateMultiAccuracy);
        setAntiApbtCount(breakdown.antiApbtCount);
        setAntiApbtAccuracy(breakdown.antiApbtAccuracy);
        setAntiMultiCount(breakdown.antiMultiCount);
        setAntiMultiAccuracy(breakdown.antiMultiAccuracy);
        setTopUsers(breakdown.topUsers);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (incorrectGuesses.length > 0) {
      setLoading(true);
      let loadedImages = 0;
      incorrectGuesses.forEach((selection, index) => {
        const imgKey = `${selection.dir}/${selection.image}`;
        if (!imageRefs.current.has(imgKey)) {
          const img = new Image();
          img.src = `/assets/images/dogs/${selection.dir}/${selection.image}`;
          img.onload = () => {
            loadedImages++;
            console.log(`Loaded ${img.src}`);
            if (loadedImages === incorrectGuesses.length) {
              setLoading(false);
            }
          };
          img.onerror = () => {
            console.error(`Failed to load image at ${img.src}`);
            loadedImages++;
            if (loadedImages === incorrectGuesses.length) {
              setLoading(false);
            }
          };
          imageRefs.current.set(imgKey, img);
        } else {
          loadedImages++;
          if (loadedImages === incorrectGuesses.length) {
            setLoading(false);
          }
        }
      });
    } else {
      setLoading(false);
    }
  }, [incorrectGuesses]);

  const handleShowSelections = () => {
    setShowDogs(!showDogs);
  };

  return (
    <div className="antialiased bg-body text-body font-body">
      <section className="mt-4 pt-6 py-12 md:py-2">
        <div className="container mx-auto px-4 pb-5">
          <div className="mb-15">
            <h2 className="mb-12 text-5xl font-semibold font-subheading">
              Your Results
            </h2>
            <div className="mb-5 text-xl text-neutral-700 font-medium">
              <p className="mb-5">
                You selected{" "}
                <span className="font-bold">{resultData.totalSelected}</span>{" "}
                {word1} that appeared to be {word2} based on the criteria you
                set at the beginning of the test
              </p>
              <p className="mb-5">
                Out of all dogs selected,{" "}
                <span className="font-bold">
                  {resultData.totalIncorrectGuesses}
                </span>{" "}
                {word3} identified incorrectly based on your criteria
              </p>
              <p className="mb-5">
                The average accuracy for all participants is currently{" "}
                <span className="font-bold">45.3%</span>
              </p>
              <p className="mb-5">
                Your overall accuracy was{" "}
                <span className="font-bold">
                  {resultData.userAccuracy.toFixed(1)}%
                </span>
              </p>
            </div>
          </div>
          {resultData.totalIncorrectGuesses > 0 && (
            <button
              onClick={handleShowSelections}
              className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-md text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 mt-3"
            >
              {!showDogs ? "View" : "Hide"} incorrect guesses
            </button>
          )}
          <div className="w-full">
            {showDogs && (
              <div className="inline-flex justify-center w-full">
                {loading ? (
                  <div className="mt-3 w-full p-5">
                    <CircularProgress />
                  </div>
                ) : (
                  <div className="w-full md:w-1/2 p-5">
                    <div className="overflow-hidden rounded-2xl">
                      <Carousel>
                        {incorrectGuesses.map((selection, index) => (
                          <img
                            key={index}
                            className="w-full h-full object-cover"
                            src={require(`../../assets/images/dogs/${selection.dir}/${selection.image}`)}
                            alt="Dog"
                          />
                        ))}
                      </Carousel>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          {loadingBreakdown && !showBreakdown && (
            <div className="mt-6 mb-5">
              <CircularProgress />
            </div>
          )}
          {!loadingBreakdown && !showBreakdown && (
            <button
              onClick={fetchAllUserData}
              className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-md text-neutral-900 hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 mt-5"
            >
              View All Results
            </button>
          )}
          {!loadingBreakdown && showBreakdown && (
            <div>
              <div className="mb-20 mt-6">
                <h2 className="text-5xl font-semibold font-subheading">
                  Total Results
                </h2>
                <h6 className="mb-5 font-bold">(All Participants)</h6>
                <p className="mb-6">
                  These results are based on the criteria set by all
                  participants and broken down based on how participants
                  identified themselves.
                </p>
                <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
                  <thead>
                    <tr>
                      <th className="py-2">Alignment</th>
                      <th className="py-2">Count</th>
                      <th className="py-2">Avg. Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2">Pro-pit bull</td>
                      <td className="py-2">{proCount}</td>
                      <td className="py-2">
                        {proCount > 0 ? `${proAccuracy.toFixed(1)}%` : "0%"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">Moderate</td>
                      <td className="py-2">{modCount}</td>
                      <td className="py-2">
                        {modCount > 0 ? `${modAccuracy.toFixed(1)}%` : "0%"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">Anti-pit bull</td>
                      <td className="py-2">{antiCount}</td>
                      <td className="py-2">
                        {antiCount > 0 ? `${antiAccuracy.toFixed(1)}%` : "0%"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mb-20">
                <h2 className="text-5xl font-semibold font-subheading">
                  Breakdown
                </h2>
                <h6 className="mb-5 font-bold">(Pro-pit bull)</h6>
                <p className="mb-6">
                  These results are based on the criteria set by participants
                  who identified as pro-pit bull.
                </p>
                <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
                  <thead>
                    <tr>
                      <th className="py-2">"What is a pit bull?"</th>
                      <th className="py-2">Count</th>
                      <th className="py-2">Avg. Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2">APBT only</td>
                      <td className="py-2">{proApbtCount}</td>
                      <td className="py-2">
                        {proApbtCount > 0
                          ? `${proApbtAccuracy.toFixed(1)}%`
                          : "0%"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">Multiple breeds</td>
                      <td className="py-2">{proMultiCount}</td>
                      <td className="py-2">
                        {proMultiCount > 0
                          ? `${proMultiAccuracy.toFixed(1)}%`
                          : "0%"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mb-20">
                <h2 className="text-5xl font-semibold font-subheading">
                  Breakdown
                </h2>
                <h6 className="mb-5 font-bold">(Moderate)</h6>
                <p className="mb-6">
                  These results are based on the criteria set by participants
                  who identified as moderate.
                </p>
                <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
                  <thead>
                    <tr>
                      <th className="py-2">"What is a pit bull?"</th>
                      <th className="py-2">Count</th>
                      <th className="py-2">Avg. Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2">APBT only</td>
                      <td className="py-2">{modApbtCount}</td>
                      <td className="py-2">
                        {modApbtCount > 0
                          ? `${modApbtAccuracy.toFixed(1)}%`
                          : "0%"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">Multiple breeds</td>
                      <td className="py-2">{modMultiCount}</td>
                      <td className="py-2">
                        {modMultiCount > 0
                          ? `${modMultiAccuracy.toFixed(1)}%`
                          : "0%"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mb-20">
                <h2 className="text-5xl font-semibold font-subheading">
                  Breakdown
                </h2>
                <h6 className="mb-5 font-bold">(Anti-pit bull)</h6>
                <p className="mb-6">
                  These results are based on the criteria set by participants
                  who identified as anti-pit bull.
                </p>
                <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
                  <thead>
                    <tr>
                      <th className="py-2">"What is a pit bull?"</th>
                      <th className="py-2">Count</th>
                      <th className="py-2">Avg. Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2">APBT only</td>
                      <td className="py-2">{antiApbtCount}</td>
                      <td className="py-2">
                        {antiApbtCount > 0
                          ? `${antiApbtAccuracy.toFixed(1)}%`
                          : "0%"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">Multiple breeds</td>
                      <td className="py-2">{antiMultiCount}</td>
                      <td className="py-2">
                        {antiMultiCount > 0
                          ? `${antiMultiAccuracy.toFixed(1)}%`
                          : "0%"}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h2 className="pt-6 text-5xl font-semibold font-subheading">
                  Top Results
                </h2>
                <h6 className="mb-5 font-bold">(All Participants)</h6>

                <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
                  <thead>
                    <tr>
                      <th className="py-2">Username</th>
                      <th className="py-2">Alignment</th>
                      <th className="py-2">Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topUsers.map((user, index) => {
                      return (
                        <tr key={index}>
                          <td className="py-2">{user.username}</td>
                          <td className="py-2">{user.alignment}</td>
                          <td className="py-2">{user.accuracy.toFixed(1)}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <Link
          to="/1"
          className="mb-6 mt-3 inline-flex items-center justify-center text-center h-16 p-5 font-semibold text-lg text-white tracking-tight bg-neutral-900 hover:bg-neutral-200 focus:bg-neutral-200 rounded-lg focus:ring-4 focus:ring-neutral-300 transition duration-200"
        >
          Go Back
        </Link>
      </section>
    </div>
  );
};

export default ResultsPage;
