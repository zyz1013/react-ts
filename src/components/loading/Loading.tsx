import * as React from "react";

export default (props: { text?: string }) => (
  <div style={{ padding: "10px 8px" }}>
    {typeof props.text === "string" && props.text !== ""
      ? props.text
      : "Loading..."}
  </div>
);
