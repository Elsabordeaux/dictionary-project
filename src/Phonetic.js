import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic d-flex mt-4">
      <h3>
        <em>{props.phonetic}</em>
      </h3>
      <span className="audio-link ms-4">
        <a
          className="btn"
          href="https://dictionary.cambridge.org/pronunciation/"
          target="_blank"
          rel="noreferrer noopener"
          title="link to Cambridge dictionary pronunciation website"
        >
          🔉
        </a>
      </span>
    </div>
  );
}
