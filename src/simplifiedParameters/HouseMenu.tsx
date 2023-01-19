import React, { useState } from "react";
import BasicContainerThing from "../util/basicContainer";
import DropDown from "./houseTypeDropDown";

const HouseMenu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectHouse, setSelectHouse] = useState<string>("");
  const houses = () => {
    return [
      "1 bedroom flat",
      "2 bedroom flat",
      "3 bedroom flat",
      "4 bedroom flat",
      "2 bedroom house (Terraced/Semi detached)",
      "3 bedroom house (Terraced/Semi detached)",
      "4 bedroom house (Terraced/Semi detached)",
      "5 bedroom house (Terraced/Semi detached)",
    ];
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const houseSelection = (house: string): void => {
    setSelectHouse(house);
  };

  return (
    <>
      <BasicContainerThing title="Select your house type:">
        <button
          className={showDropDown ? "active" : undefined}
          onClick={(): void => toggleDropDown()}
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            dismissHandler(e)
          }
        >
          <div>{selectHouse ? selectHouse : "Select ..."} </div>
          {showDropDown && (
            <DropDown
              houses={houses()}
              showDropDown={false}
              toggleDropDown={(): void => toggleDropDown()}
              houseSelection={houseSelection}
            />
          )}
        </button>
      </BasicContainerThing>
    </>
  );
};

export default HouseMenu;
