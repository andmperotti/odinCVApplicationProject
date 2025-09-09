import { useState } from "react";
import "../styles/index.css";

export default function General() {
  const [status, setStatus] = useState("edit");

  if (status === "edit") {
    return (
      <>
        <h1>General Information: </h1>
        <form action="">
          <p>* Designates an optional field</p>
          <label>
            Name: <input type="text" />
          </label>
          <label>
            Email: <input type="text" />
          </label>
          <label>
            Phone:
            <input type="text" />
          </label>
          <label>
            Location*: <input type="text" />
          </label>
          <label>
            Professional Title*: <input type="text" />
          </label>
          <label>
            Description*: <input type="text" />
          </label>
          <label>
            Skills*: <input type="text" />
          </label>
          <button id="add-skill" type="button">
            Add Another Skill
          </button>
          <button
            id="submit-general"
            onClick={() => setStatus("submit")}
            type="button"
          >
            Submit
          </button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <h1>Persons Name</h1>

        <button onClick={() => setStatus("edit")} type="button">
          Edit
        </button>
      </>
    );
  }
}
