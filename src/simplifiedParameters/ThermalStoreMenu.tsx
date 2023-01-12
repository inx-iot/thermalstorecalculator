import React, { useState } from "react";
import DropDown from "./thermalStoreDropDown";

const ThermalStoreMenu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectThermalStore, setSelectThermalStore] = useState<string>("");
  const thermalStore = () => {
    return ["Water cylinder based high temperature Thermal Storage (size calculated for you)", 
            "Water cylinder (Standard maximum temperature limiter) (size is calculated for you)", 
            "Specific Water cylinder (user enters the size).", 
            "Specific thermal storage (user enters the storage capacity in kWh - this isn't  over-ridable in the current UI, but you can leave this non-functional for now)"
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

  const thermalStoreSelection = (thermalStore: string): void => {
    setSelectThermalStore(thermalStore);
  };

  return (
    <>
      <div className="announcement">
        <div>
          {selectThermalStore
            ? `You selected ${selectThermalStore}`
            : "Select your thermal storage"}
        </div>
      </div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectThermalStore ? selectThermalStore : "Select ..."} </div>
        {showDropDown && (
          <DropDown
            thermalStore={thermalStore()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            thermalStoreSelection={thermalStoreSelection}
          />
        )}
      </button>
    </>
  );
};

export default ThermalStoreMenu;

