import React, { useState } from "react";
import BasicContainerThing from "../util/basicContainer";
import DropDown from "./atHomeDropDown";

interface AtHomeMenu {
  selectAtHome: any,
  setSelectAtHome: any
}
 
const AtHomeMenu: React.FC<AtHomeMenu> = ( {selectAtHome, setSelectAtHome } ): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const atHome = () => {
    return ["home in the evening only", "home in the morning mostly", "home all day"];
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const atHomeSelection = (atHome: string): void => {
    setSelectAtHome(atHome);
  };

  return (
    <>
     <BasicContainerThing title="Select when you are home:">
        <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => dismissHandler(e)}
      >
          <div>{selectAtHome ? selectAtHome : "Select ..."} </div>
          {showDropDown && (
            <DropDown
              atHome={atHome()}
              showDropDown={false}
              toggleDropDown={(): void => toggleDropDown()}
              atHomeSelection={atHomeSelection} />
          )}
        </button>
      </BasicContainerThing>
      </>
  )
}


export default AtHomeMenu;
