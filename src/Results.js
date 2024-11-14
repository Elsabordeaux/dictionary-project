import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="Results">
        <section className="shadow">
          <h1 className="text-capitalize">{props.definition.word}</h1>
          <Phonetic phonetic={props.definition.phonetic} />
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
