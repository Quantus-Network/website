import * as React from "react";

export const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="font-small bg-tag rounded-[50px] px-[19px] py-[7px]">
      {children}
    </span>
  );
};
