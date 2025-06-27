import React from "react";

type StyledTextProps = {
  children: React.ReactNode;
};

export const StyledText = ({ children }: StyledTextProps) => {
  return (
    <span className="break-all text-emerald-400 font-semibold">{children}</span>
  );
};
