import React from "react";
import { ContentWrapperProps } from "./util";

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div style={{ width: "100%" }}>{children}</div>
    </div>
  );
};

export default ContentWrapper;
