import React from "react";

type StyledTextProps = {
  children: React.ReactNode;
};

export const StyledText = ({ children }: StyledTextProps) => {
  return (
    <span className="break-all text-zinc-200 font-medium">{children}</span>
  );
};
