import React from "react";
import { Link } from "react-router-dom";

const ResultsPage: React.FC = () => {
  return (
    <div className="antialiased bg-body text-body font-body">
      <section className="mt-4 pt-6 py-12 md:py-2">
        <div className="container mx-auto px-4 pb-5">
          <div className="mb-20">
            <h2 className="mb-12 text-5xl font-semibold font-subheading">
              Your Results
            </h2>
            <div className="mb-5 text-xl text-neutral-700 font-medium">
              <p className="mb-5">
                You identified <span className="font-bold">30</span> out of{" "}
                <span className="font-bold">100</span> dogs as pit bulls.
              </p>
              <p className="mb-5">
                Based on the criteria you set, your overall accuracy was{" "}
                <span className="font-bold">33%</span>.
              </p>
              <p className="mb-5">
                This means that <span className="font-bold">20</span> dogs were
                identified incorrectly based on your critera.
              </p>
              <p className="mb-20">
                Out of all dogs shown, 18 were within{" "}
                <span className="font-bold">25%</span> of the threshold you set
                at the beginning of the test.
              </p>
            </div>
          </div>
          <div className="mb-20">
            <h2 className="text-5xl font-semibold font-subheading">
              Total Results
            </h2>
            <h6 className="mb-5 font-bold">(All Participants)</h6>
            <p className="mb-6">
              These results are based on the criteria set by all participants
              and broken down based on how participants identified themselves.
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
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">Neutral</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">Anti-pit bull</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
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
              These results are based on the criteria set by participants who
              identified as pro-pit bull.
            </p>
            <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
              <thead>
                <tr>
                  <th className="py-2">Breed Selection</th>
                  <th className="py-2">Count</th>
                  <th className="py-2">Avg. Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">APBT</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">All Breeds *</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-20">
            <h2 className="text-5xl font-semibold font-subheading">
              Breakdown
            </h2>
            <h6 className="mb-5 font-bold">(Neutral)</h6>
            <p className="mb-6">
              These results are based on the criteria set by participants who
              identified as neutral.
            </p>
            <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
              <thead>
                <tr>
                  <th className="py-2">Breed Selection</th>
                  <th className="py-2">Count</th>
                  <th className="py-2">Avg. Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">APBT</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">All Breeds *</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
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
              These results are based on the criteria set by participants who
              identified as anti-pit bull.
            </p>
            <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
              <thead>
                <tr>
                  <th className="py-2">Breed Selection</th>
                  <th className="py-2">Count</th>
                  <th className="py-2">Avg. Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">APBT</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">All Breeds *</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Link
            to="/1"
            className="mb-6 inline-flex items-center justify-center text-center h-16 p-5 font-semibold text-lg text-white tracking-tight bg-neutral-900 hover:bg-neutral-200 focus:bg-neutral-200 rounded-lg focus:ring-4 focus:ring-neutral-300 transition duration-200"
          >
            Go Back
          </Link>

          <div>
            * All Breeds includes the American Pit Bull Terrier (APBT), American
            Staffordshire Terrier, Staffordshire Bull Terrier, and American
            Bully.
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;
