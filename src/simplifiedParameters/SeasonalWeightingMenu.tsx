import React, { useState } from "react";
import BasicContainerThing from "../util/basicContainer";

const SeasonalWeightingMenu = () => {
  const [selectedSeasonalWeighting, setSelectedSeasonalWeighting] =
    useState<String>();

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSeasonalWeighting(event.target.value);
  };

  const optionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSeasonalWeighting(event.target.value);
  };

  const userInputOption = (selectedSeasonalWeighting === "Enter value here" || document.getElementById('valueEntered')) 

  return (
    <BasicContainerThing title="Please select from the following seasonal weightings:">
      <div className="radioButtons">
        <input
          type="radio"
          name="seasonalWeighting"
          value="SCOPvalues"
          id="SCOPvalues"
          onChange={radioHandler}
        />
        <label htmlFor="SCOPvalues">
          SCOP values (averaged over year of space heating - add an explainer
          that this weighted towards higher heating usage in winter)
        </label>
     </div><br></br>

      <div className="radioButtonsColumn">
        <input
          type="radio"
          name="seasonalWeighting"
          value="COPwinter"
          id="COPwinter"
          onChange={radioHandler}
        />
        <label htmlFor="COPwinter">
          COP-Winter (winter months December-February)
        </label>
      </div>

      <div className="radioButtonsColumn">
        <input
          type="radio"
          name="seasonalWeighting"
          value="COPaverage"
          id="COPaverage"
          onChange={radioHandler}
        />
        <label htmlFor="COPaverage">
          COP-Average (Average of OEM quoted values)
        </label>
      </div>

      <div className="radioButtons">
        <input
          type="radio"
          name="seasonalWeighting"
          value="Enter value here"
          id="userDefined"
          onChange={radioHandler}
        />
        <label htmlFor="userDefined">Enter your own value </label>
        {userInputOption && <input
          type="number"
          name="seasonalWeighting"
          id="valueEntered"
          onChange={optionHandler}
        />}
      </div>
    </BasicContainerThing>
  );
};

export default SeasonalWeightingMenu;
