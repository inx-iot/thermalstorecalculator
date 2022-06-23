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
            <InfoThing textA="Daily heating cost @ flat rate)" textB="£/EU/$" value={values.instantaneousHeatingCostFlatRate} preValue="£" />
            <InfoThing textA="Daily heating cost @ peak rate)" textB="£/EU/$" value={values.instantaneousHeatingCostPeakRate} preValue="£" />
        </div>)
        }
    </FormSpy >

}


export default InstantaneousCostsFields;