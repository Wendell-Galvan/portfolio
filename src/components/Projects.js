import React from "react";
import Cards from "./Cards";
import youtube from "../images/youtube.png";
import ski from "../images/ski-app.png";
import news from "../images/news.png";

function Projects() {
  return (
    <div className="bg-stone-900">
      <div>
        <h1 className="flex justify-center text-4xl font-bold font-rampart uppercase text-emerald-700 py-5 drop-shadow-lg">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <Cards
          header="Video Library App"
          imgLink="https://vids-hooks-pi.vercel.app/"
          img={youtube}
          paragraph="Mock youtube site utilizing custom React hooks and Youtube API"
          button="https://github.com/Wendell-Galvan/Video-App"
        />
        <Cards
          header="Ski Weather App"
          imgLink="https://ski-weather-app.vercel.app/"
          img={ski}
          paragraph="Weather app that features current conditions for four popular mountains in Washington State. Optimized for mobile users"
          button="https://github.com/Wendell-Galvan/ski-weather-app"
        />
        <Cards
          header="News Feed App"
          imgLink="https://github.com/Wendell-Galvan/hackernews-app"
          img={news}
          paragraph="News App with search functionality and sidebar featuring popular news"
          button="https://github.com/Wendell-Galvan/hackernews-app"
        />
      </div>
    </div>
  );
}

export default Projects;
