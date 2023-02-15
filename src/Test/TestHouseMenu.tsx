
import { Field } from "react-final-form";
import BasicContainerThing from "../util/basicContainer";
import SelectInput from "./SelectInput";
import values from "../Test/values.json"


const TestHouseMenu = (): JSX.Element => {

  return (
    <>
      <BasicContainerThing title="Select your house type:">
        <Field<string> name="houseType" component={SelectInput} placeholder="Select house">
          <option />
          <option value="3000">1 bed flat</option>
          <option value="4000">2 bed flat</option>
          <option value="5000">3 bed flat</option>
        </Field>
      </BasicContainerThing>
    </>
  );
}

export default TestHouseMenu;
