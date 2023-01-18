import React, { useState } from "react";

const ThermalStorageMenu = () => {
  const [selectThermalStorage, setSelectThermalStorage] = useState<String>();

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectThermalStorage(event.target.value);
  };

  const optionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectThermalStorage(event.target.value);
  };

  const userInputWaterOption =
    selectThermalStorage === "Enter value here water" ||
    document.getElementById("valueEnteredWater");

  const userInputThermalStorage =
    selectThermalStorage === "Enter value here thermal" ||
    document.getElementById("valueEnteredThermal");

  return (
    <div className="container">
      <h3>Thermal store parameters: </h3>
      <p>
        <input
          type="radio"
          name="thermalStoreCapacity"
          value="waterCylinderHigh"
          id="waterCylinderHigh"
          onChange={radioHandler}
        />
        <label htmlFor="waterCylinderHigh">
          Water cylinder based high temperature Thermal Storage (size calculated
          for you)
        </label>
      </p>

      <p>
        <input
          type="radio"
          name="thermalStoreCapacity"
          value="waterCylinderStandard"
          id="waterCylinderStandard"
          onChange={radioHandler}
        />
        <label htmlFor="waterCylinderStandard">
          Water cylinder (Standard maximum temperature limiter) (size is
          calculated for you)
        </label>
      </p>

      <p>
        <input
          type="radio"
          name="thermalStoreCapacity"
          value="Enter value here water"
          id="specificWaterCylinder"
          onChange={radioHandler}
        />
        <label htmlFor="specificWaterCylinder">
          Please enter the size of your water cylinder (litres) {" "}
        </label>
        {userInputWaterOption&& (
        <input
          type="number"
          name="thermalStoreCapacity"
          id="valueEnteredWater"
          onChange={optionHandler}
        />)}
      </p>

      <p>
        <input
          type="radio"
          name="thermalStoreCapacity"
          value="Enter value here thermal"
          id="userDefined"
          onChange={radioHandler}
        />
        <label htmlFor="userDefined">
          Please enter your thermal storage capacity (kWh){" "}
        </label>
        {userInputThermalStorage && (
          <input
            type="number"
            name="thermalStoreCapacity"
            id="valueEnteredThermal"
            onChange={optionHandler}
          />
        )}
      </p>
    </div>
  );
};

export default ThermalStorageMenu;
