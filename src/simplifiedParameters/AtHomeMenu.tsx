import React, { useState } from "react";
import DropDown from "./atHomeDropDown";
 
const AtHomeMenu: React.FC = ({ }): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectAtHome, setSelectAtHome] = useState<string>("");
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
     <div className="announcement">
        <h3>
          {"Select when you are home:"}
        </h3>
      </div><button
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
      </>
    )
}


export default AtHomeMenu;