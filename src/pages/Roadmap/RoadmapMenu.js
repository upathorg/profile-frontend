import React from "react";

import useOutsideClickDetector from "../../hooks/useOutsideClickDetector";
import DownIcon from "../../svg/ChevronDown";

export default function RoadmapMenu({
  roadmaps,
  currentRoadmap,
  setCurrentRoadmap,
}) {
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const dropdownRef = React.useRef(null);
  const isClickedOutside = useOutsideClickDetector(dropdownRef);

  React.useEffect(() => {
    if (openDropdown && isClickedOutside) {
      setOpenDropdown(false);
    }
  }, [openDropdown, isClickedOutside]);

  const handleClick = (roadmap) => {
    setCurrentRoadmap(roadmap);
    setOpenDropdown(false);
  };

  return (
    <div className="d-inline-block position-relative">
      <div
        className="cursor--pointer d-flex align-items-center"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <h1 className="roadmap-menu__heading my-4">{currentRoadmap.name}</h1>
        <DownIcon className="ml-2" />
      </div>

      {openDropdown && (
        <div
          ref={dropdownRef}
          className="dropdown__content border rounded bg-white p-3"
        >
          {roadmaps.map((roadmap, i) => (
            <div
              onClick={() => handleClick(roadmap)}
              key={`dropdown-item-${i}`}
              className="dropdown__item cursor--pointer p-2 font-weight-light"
            >
              {roadmap.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
