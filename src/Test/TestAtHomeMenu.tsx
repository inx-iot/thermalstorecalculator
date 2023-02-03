import { Field } from "react-final-form";
import BasicContainerThing from "../util/basicContainer";
import SelectInput from "./SelectInput";
import values from "../Test/values.json"

 
const TestAtHomeMenu = (): JSX.Element => {

return (
    <>
     <BasicContainerThing title="Select when you are home:">
            <Field<string> name="selectWhenHome" component={SelectInput} placeholder="Select house">
              <option />
              <option value={"3000"}>home in the evening only</option>
              <option value="4000">home in the morning mostly</option>
              <option value="5000">home all day</option>
            </Field>
        </BasicContainerThing>
    </>
  );
}

export default TestAtHomeMenu;