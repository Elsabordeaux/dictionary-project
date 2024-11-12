import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h3>
        <em>{props.phonetic}</em>
        <div className="audio-link">
          <a
            className="btn btn-primary"
            href="https://dictionary.cambridge.org/pronunciation/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Search for audio pronunciation here
          </a>
        </div>
      </h3>
    </div>
  );
}
