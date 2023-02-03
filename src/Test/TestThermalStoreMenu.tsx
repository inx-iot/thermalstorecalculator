import { Field } from "react-final-form";
import BasicContainerThing from "../util/basicContainer";
import RadioInput from "./RadioInput";


const TestThermalStorageMenu = () => {

  return (
    <BasicContainerThing title="Thermal store parameters:">
      <div>
              <label>
                <Field<string>
                  name="thermalStoreCapacity"
                  component={RadioInput}
                  type="radio"
                  value="1000"
                />{" "}
                Water cylinder based high temperature Thermal Storage (size calculated for you)
              </label><br/>
              <label>
                <Field<string>
                  name="thermalStoreCapacity"
                  component={RadioInput}
                  type="radio"
                  value="1500"
                />{" "}
                Water cylinder - standard maximum temperature limiter (size is calculated for you)
              </label>
          </div>
    </BasicContainerThing>
  );
};

export default TestThermalStorageMenu;
