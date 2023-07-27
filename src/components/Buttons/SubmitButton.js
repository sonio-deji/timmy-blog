import React from "react";

function SubmitButton({action}) {
  return (
    <button className="" style={{ backgroundColor: "#6EEB83" }} type="submit">
      {action}
    </button>
  );
}

export default SubmitButton;
