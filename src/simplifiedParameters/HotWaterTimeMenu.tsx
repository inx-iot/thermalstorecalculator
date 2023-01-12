import React, { useState } from "react";
import DropDown from "./hotWaterTimeDropDown";

const HotWaterTimeMenu: React.FC = (): JSX.Element => {
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
      <div className="announcement">
        <div>
          {selectHotWaterTime
            ? `You use hot water in the ${selectHotWaterTime}.`
            : "Select when you need hot water"}
        </div>
      </div>
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
    </>
  );
};

export default HotWaterTimeMenu;
