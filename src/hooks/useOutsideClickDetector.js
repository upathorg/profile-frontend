import React from "react";

export default function useCurrentRefDetector(ref) {
  const [detected, setDetected] = React.useState(false);

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setDetected(true);
      } else {
        setDetected(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return detected;
}
