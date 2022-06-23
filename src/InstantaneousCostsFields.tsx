import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import InfoThing from "./util/infoThing";


const InstantaneousCostsFields = () => {

    return <FormSpy <IThermalForm>
        subscription={{
            values: true,
            dirtySinceLastSubmit: true,
            submitting: true,
        }}
    >
        {({ values, dirtySinceLastSubmit, submitting }) => (<div>
            <InfoThing textA="Daily heating cost / day (Direct heating @ flat rate)" textB="(Theoretical reference only)" value={values.instantaneousHeatingCostFlatRate} preValue="£" />
            <InfoThing textA="Daily heating cost / day (Direct heating @ peak rate)" textB="(Direct heating is usually at peak times if ToU Tariffs are used)" value={values.instantaneousHeatingCostPeakRate} preValue="£" />
        </div>)
        }
    </FormSpy >

}


export default InstantaneousCostsFields;