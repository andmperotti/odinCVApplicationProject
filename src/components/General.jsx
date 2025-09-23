import { useState } from "react";
import { GeneralInput } from "./GeneralInput";
import { GeneralOutput } from "./GeneralOutput";

export default function General({ person, setPerson }) {
  const [status, setStatus] = useState("edit");

  if (status === "edit") {
    return (
      <div id="general-input">
        <h1>General Information: </h1>
        <GeneralInput
          person={person}
          setPerson={setPerson}
          status={status}
          setStatus={setStatus}
        />
        <hr className="section-divide"></hr>
      </div>
    );
  } else {
    return (
      <div id="general-output">
        <GeneralOutput person={person} setStatus={setStatus} />
      </div>
    );
  }
}
