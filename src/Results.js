import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="Results">
        <section className="shadow row">
          <div className="col-6">
            <h1 className="text-capitalize">{props.definition.word}</h1>
            <Phonetic phonetic={props.definition.phonetic} />
          </div>
          <div className="col-6">
            <img
              src={props.photos[0].src.landscape}
              className=" img-fluid rounded"
              alt={props.photos[0].alt}
            />
          </div>
        </section>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <section className="shadow" key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
