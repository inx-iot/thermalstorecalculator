import React, { useState } from "react";
import DropDown from "./heatingTypeDropDown";

const HeatingTypeMenu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectHeatingType, setSelectHeatingType] = useState<string>("");
  const heatingType = () => {
    return ["Central Heating & Hot water", "Hot Water only", "Central Heating Only"];
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };


  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const heatingTypeSelection = (heatingType: string): void => {
    setSelectHeatingType(heatingType);
  };

  return (
    <>
      <div className="announcement">
        <div>
          {selectHeatingType
            ? `You selected ${selectHeatingType}`
            : "Select your heating type"}
        </div>
      </div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectHeatingType ? selectHeatingType : "Select ..."} </div>
        {showDropDown && (
          <DropDown
            heatingType={heatingType()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            heatingTypeSelection={heatingTypeSelection}
          />
        )}
      </button>
    </>
  );
};

export default HeatingTypeMenu;
