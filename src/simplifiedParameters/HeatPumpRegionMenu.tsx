import React, { useState } from "react";
import DropDown from "./heatPumpRegionDropDown";

const HeatPumpRegionMenu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectHeatPumpRegionMenu, setSelectHeatPumpRegionMenu] = useState<string>("");
  const heatPumpRegion = () => {
    return ["South of England", "Midland", "North England", "Scotland"];
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };


  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const heatPumpRegionSelection = (heatPumpRegion: string): void => {
    setSelectHeatPumpRegionMenu(heatPumpRegion);
  };

  return (
    <>
      <div className="announcement">
        <div>
          {selectHeatPumpRegionMenu
            ? `You selected ${selectHeatPumpRegionMenu}`
            : "Select your region"}
        </div>
      </div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectHeatPumpRegionMenu ? selectHeatPumpRegionMenu : "Select ..."} </div>
        {showDropDown && (
          <DropDown
            heatPumpRegion={heatPumpRegion()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            heatPumpRegionSelection={heatPumpRegionSelection}
          />
        )}
      </button>
    </>
  );
};

export default HeatPumpRegionMenu;
