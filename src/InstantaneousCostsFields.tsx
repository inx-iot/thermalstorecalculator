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
            <InfoThing md={4} xs={4} sm={4} textA="Efficiency" description="Efficiency of direct immersion heating" value={100} preValue="%" valueDecimalPlace={0} />
            <InfoThing md={4} xs={4} sm={4} textA="Direct @ flat" description="Daily cost of instantaneous direct heating @ flat rate" value={values.instantaneousHeatingCostFlatRate} preValue="£" />
            <InfoThing md={4} xs={4} sm={4} textA="Direct @ peak" description="Daily cost of instantaneous direct heating @ peak rate" value={values.instantaneousHeatingCostPeakRate} preValue="£" />
        </ContainerThing>)
        }
    </FormSpy >

}


export default InstantaneousCostsFields;