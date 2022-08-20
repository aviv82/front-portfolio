import { useEffect, useState } from "react";
import "./WorkDisplay.css";

export const WorkDisplay = ({ works }) => {
  const [id, setId] = useState(2);

  const handleNext = () => {
    if (id === works.length + 1) {
      setId(2);
    } else {
      setId(id + 1);
    }
    // console.log("boom");
  };

  const handlePrevious = () => {
    if (id === 2) {
      setId(works.length + 1);
    } else {
      setId(id - 1);
    }
    // console.log("boom");
  };

  useEffect(() => {
    // console.log("works connection", works, "id:", id);
  }, []);

  const workToDisplay = works.filter((work) => work.id === id);

  /*
  console.log(
    "to display",
    workToDisplay[0].attributes.media.data.attributes.formats.large.url
  );
*/
  const videoEmbed = `https://youtube.com/embed/${workToDisplay[0].attributes.link}`;

  return (
    <div className="display-wrap">
      <h1 className="display-title">{workToDisplay[0].attributes.title}</h1>
      <h3 className="display-genre">
        Media: {workToDisplay[0].attributes.type}
      </h3>
      {workToDisplay[0].attributes.type === "Video" ? (
        <div className="display-video">
          <iframe
            width="780"
            height="420"
            className="video-iframe"
            src={videoEmbed}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <img
          className="display-image"
          src={workToDisplay[0].attributes.link}
          alt={workToDisplay[0].attributes.title}
        ></img>
      )}

      <div className="display-selection">
        <svg
          onClick={handlePrevious}
          className="display-button"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 19C14.2337 19.0005 14.4601 18.9191 14.64 18.77C14.7413 18.6861 14.825 18.583 14.8863 18.4666C14.9477 18.3503 14.9855 18.223 14.9975 18.092C15.0096 17.961 14.9957 17.8289 14.9567 17.7033C14.9177 17.5777 14.8542 17.4611 14.77 17.36L10.29 12L14.61 6.63C14.6931 6.52771 14.7551 6.41002 14.7925 6.28368C14.83 6.15734 14.8421 6.02485 14.8281 5.89382C14.8142 5.76279 14.7745 5.63581 14.7113 5.52017C14.6481 5.40454 14.5627 5.30252 14.46 5.22C14.3565 5.12897 14.2354 5.0603 14.1041 5.01831C13.9729 4.97632 13.8343 4.96192 13.6972 4.976C13.5601 4.99009 13.4274 5.03236 13.3075 5.10016C13.1875 5.16796 13.0828 5.25983 13 5.37L8.17001 11.37C8.02293 11.5489 7.94252 11.7734 7.94252 12.005C7.94252 12.2366 8.02293 12.4611 8.17001 12.64L13.17 18.64C13.2703 18.761 13.3978 18.8567 13.542 18.9192C13.6862 18.9818 13.8431 19.0095 14 19Z"
            fill="none"
          />
        </svg>
        <svg
          onClick={handleNext}
          className="display-button"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99999 19C9.76634 19.0005 9.5399 18.9191 9.35999 18.77C9.25873 18.6861 9.17503 18.583 9.11368 18.4666C9.05233 18.3503 9.01453 18.223 9.00245 18.092C8.99038 17.961 9.00426 17.8289 9.0433 17.7033C9.08235 17.5777 9.14579 17.4611 9.22999 17.36L13.71 12L9.38999 6.63C9.30692 6.52771 9.24489 6.41002 9.20746 6.28368C9.17003 6.15734 9.15794 6.02485 9.17187 5.89382C9.18581 5.76279 9.22551 5.63581 9.28868 5.52017C9.35186 5.40454 9.43726 5.30252 9.53999 5.22C9.64346 5.12897 9.76462 5.0603 9.89588 5.01831C10.0271 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6925 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6022 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 9.99999 19Z"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};
