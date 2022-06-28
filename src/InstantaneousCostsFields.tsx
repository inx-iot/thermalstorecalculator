import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import ContainerThing from "./util/container";
import InfoThing from "./util/infoThing";


const InstantaneousCostsFields = () => {

    return <FormSpy <IThermalForm>
        subscription={{
            values: true,
            dirtySinceLastSubmit: true,
            submitting: true,
        }}
    >
        {({ values, dirtySinceLastSubmit, submitting }) => (<ContainerThing title="Instantaneous Heating Cost Calculator">
            <InfoThing md={6} xs={6} sm={6} textA="Direct heating @ flat rate" description="Daily cost of instantaneous direct heating @ flat rate)" value={values.instantaneousHeatingCostFlatRate} preValue="£" />
            <InfoThing md={6} xs={6} sm={6} textA="Direct heating @ peak rate" description="Daily cost of instantaneous direct heating @ peak rate" value={values.instantaneousHeatingCostPeakRate} preValue="£" />
        </ContainerThing>)
        }
    </FormSpy >

}


export default InstantaneousCostsFields;