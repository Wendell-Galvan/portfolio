import React from "react";

function Cards(props) {
  return (
    <div className="max-w-sm mx-10 rounded overflow-hidden shadow-lg my-20 shadow-emerald-800 bg-stone-800 hover:scale-105">
      <a
        href={props.imgLink}
        target="_blank"
        className="font-bold font-shantell uppercase text-emerald-600 text-xl my-2 flex justify-center"
      >
        {props.header}
      </a>
      <a href={props.imgLink} target="_blank" rel="noreferrer">
        <img
          className="w-full max-h-60 object-contain"
          src={props.img}
          alt="project"
        />
      </a>
      <div className="px-6 py-4">
        <p className="text-emerald-500 text-base">{props.paragraph}</p>
      </div>
      <div className="flex justify-center p-2">
        <a href={props.button} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Github
          </button>
        </a>
      </div>
    </div>
  );
}

export default Cards;
