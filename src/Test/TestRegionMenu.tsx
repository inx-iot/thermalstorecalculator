import { Field } from "react-final-form";
import BasicContainerThing from "../util/basicContainer";
import SelectInput from "./SelectInput";
import values from "../Test/values.json"

 
const TestRegionMenu = (): JSX.Element => {

return (
    <>
        <BasicContainerThing title="Select your region:">
            <Field<string> name="regionMenu" component={SelectInput} >
              <option />
              <option value="2500">South of England</option>
              <option value="3500">Midlands</option>
              <option value="4500">North England</option>
              <option value="5500">Scotland</option>
            </Field>
        </BasicContainerThing>
    </>
  );
}

export default TestRegionMenu;