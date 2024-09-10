import React from "react";

const Error = ({ error }: { error: string }) => {
  return <div className="text-center text-red-500">{error}</div>;
};

export default Error;
