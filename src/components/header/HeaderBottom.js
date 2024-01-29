import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const HeaderBottom = () => {
  const [showGross, setShowGross] = useState(false);
  const [gender, setGender] = useState(false);
  const [scoringType, setScoringType] = useState("Gross");
  const [genderSelected, setGenderSelected] = useState("Male");

  const showScoring = () => {
    setShowGross(!showGross);
  };

  const showGender = () => {
    setGender(!gender);
  };

  const handleScoringChange = (scoringType) => {
    setShowGross(false);
    setScoringType(scoringType)
  };

  const handleGenderChange = (selectedGender) => {
    setGender(false);
    setGenderSelected(selectedGender);
  };

  useEffect(() => {
    console.log(genderSelected);
    console.log(scoringType);
  }, [genderSelected, scoringType]);

  return (
    <div className="flex items-center justify-center gap-10 p-5">
      <div className="flex items-center gap-2 relative">
        Scoring
        {/* TO add a transition effect to the drop down using useContext */}
        <FaChevronDown
          className={`cursor-pointer transition-transform duration-500 transform ${
            showGross ? "rotate-180" : "rotate-0"
          }`}
          onClick={showScoring}
        />
        {showGross && (
          <ul className="bg-white border rounded-md p-1 absolute top-7 w-full">
            <li
              className="p-2 rounded-sm cursor-pointer hover:bg-[#90EE90]/[0.1]"
              onClick={() => handleScoringChange("Gross")}
            >
              Gross
            </li>
            <hr className="m-1" />
            <li
              className="p-2 rounded-sm cursor-pointer hover:bg-[#90EE90]/[0.1]"
              onClick={() => handleScoringChange("Net")}
            >
              Net
            </li>
          </ul>
        )}
      </div>
      <div className="flex items-center gap-2 relative">
        Gender
        {/* TO add a transition effect to the drop down  */}
        <FaChevronDown
          className={`cursor-pointer transition-transform duration-500 transform ${
            gender ? "rotate-180" : "rotate-0"
          }`}
          onClick={showGender}
        />
        {gender && (
          <ul className="bg-white border rounded-md p-1 absolute top-7 w-full">
            <li
              className="p-2 rounded-sm cursor-pointer hover:bg-[#90EE90]/[0.1]"
              onClick={() => handleGenderChange("Female")}
            >
              Female
            </li>
            <hr className="m-1" />
            <li
              className="p-2 rounded-sm cursor-pointer hover:bg-[#90EE90]/[0.1]"
              onClick={() => handleGenderChange("Male")}
            >
              Male
            </li>
          </ul>
        )}
      </div>
      <p className="cursor-pointer">Tee Times</p>
    </div>
  );
};

export default HeaderBottom;
