import React, { useState } from "react";
import BasicContainerThing from "../util/basicContainer";
import DropDown from "./hotWaterTimeDropDown";

const HotWaterTimeMenu: React.FC = ({}): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectHotWaterTime, setSelectHotWaterTime] = useState<string>("");
  const hotWaterTime = () => {
    return ["morning", "early evening", "late evening", "random"];
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const hotWaterTimeSelection = (hotWaterTime: string): void => {
    setSelectHotWaterTime(hotWaterTime);
  };

  return (
    <>
      <BasicContainerThing title="Select when you need hot water:">
        <button
          className={showDropDown ? "active" : undefined}
          onClick={(): void => toggleDropDown()}
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            dismissHandler(e)
          }
        >
          <div>{selectHotWaterTime ? selectHotWaterTime : "Select ..."} </div>
          {showDropDown && (
            <DropDown
              hotWaterTime={hotWaterTime()}
              showDropDown={false}
              toggleDropDown={(): void => toggleDropDown()}
              hotWaterTimeSelection={hotWaterTimeSelection}
            />
          )}
        </button>
      </BasicContainerThing>
    </>
  );
};

export default HotWaterTimeMenu;
