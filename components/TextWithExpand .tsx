import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
interface TextWithExpandProps {
  text: string;
  maxHeight?: number;
  className?: string;
  expandText?: string;
  collapseText?: string;
}

const TextWithExpand: React.FC<TextWithExpandProps> = ({
  text,
  maxHeight = 100,
  className,
  expandText,
  collapseText,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsExpansion, setNeedsExpansion] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current && textRef.current.scrollHeight > maxHeight) {
      setNeedsExpansion(true);
    }
  }, [maxHeight]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div
        ref={textRef}
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isExpanded ? "max-h-none" : `max-h-[${maxHeight}px]`
        }`}
        style={{ maxHeight: isExpanded ? "none" : `${maxHeight}px` }}
      >
        <p className={className}>{text}</p>
      </div>
      {needsExpansion && (
        <Button
          variant="link"
          onClick={toggleExpansion}
          className="mt-2 p-0 text-inherit"
        >
          {isExpanded
            ? collapseText
              ? collapseText
              : "Collapse"
            : expandText
            ? expandText
            : "Expand"}
        </Button>
      )}
    </div>
  );
};

export default TextWithExpand;
