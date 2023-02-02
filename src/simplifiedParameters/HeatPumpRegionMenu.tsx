import React, { useState } from "react";
import BasicContainerThing from "../util/basicContainer";
import DropDown from "./heatPumpRegionDropDown";

interface HeatPumpRegionMenu {
  selectHeatPumpRegionMenu: any,
  setSelectHeatPumpRegionMenu: any
}

const HeatPumpRegionMenu: React.FC<HeatPumpRegionMenu> = ( {selectHeatPumpRegionMenu, setSelectHeatPumpRegionMenu} ): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  
  const heatPumpRegion = () => {
    return ["South of England", "Midlands", "North England", "Scotland"];
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
      <BasicContainerThing title="Select your region:">
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
      </BasicContainerThing>
    </>
  );
};

export default HeatPumpRegionMenu;
