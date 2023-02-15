import { Field } from "react-final-form";
import BasicContainerThing from "../util/basicContainer";
import RadioInput from "./RadioInput";


const TestSeasonalWeightings = () => {

  return (
    <BasicContainerThing title="Please select from the following seasonal weightings:">
      <div>
              <label>
                <Field<string>
                  name="seasonalWeighting"
                  component={RadioInput}
                  type="radio"
                  value="1000"
                />{" "}
                SCOP values (averaged over year of space heating - add an explainer
                that this weighted towards higher heating usage in winter)
              </label><br/>

              <label>
                <Field<string>
                  name="seasonalWeighting"
                  component={RadioInput}
                  type="radio"
                  value="1500"
                />{" "}
                COP-Winter (winter months December-February)
              </label><br/>

              <label>
                <Field<string>
                  name="seasonalWeighting"
                  component={RadioInput}
                  type="radio"
                  value="1750"
                />{" "}
                COP-Average (Average of OEM quoted values)
              </label><br/>

          </div>
    </BasicContainerThing>
  );
};

export default TestSeasonalWeightings;
