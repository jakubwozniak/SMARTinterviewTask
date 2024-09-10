import { Loader } from "lucide-react";
import React from "react";

const LoaderSpinner = () => {
  return (
    <div className="flex flex-center justify-center h-full w-full py-6">
      <Loader className="animate-spin text-muted-foreground" size={60} />
    </div>
  );
};

export default LoaderSpinner;
