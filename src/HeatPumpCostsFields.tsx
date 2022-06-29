import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import ContainerThing from "./util/container";
import InfoThing from "./util/infoThing";
import NumberField from "./util/numberField";



const HeatPumpCostsFields = () => {
    return <FormSpy <IThermalForm>
        subscription={{
            values: true,
            dirtySinceLastSubmit: true,
            submitting: true,
        }}
    >
        {({ values, dirtySinceLastSubmit, submitting }) => (<ContainerThing title="Heat Pump (HP) Cost Calculator">


            <NumberField md={3} xs={4} sm={4} name="heatPumpHeatEfficiency" label="COP/SCOP" unitChar="%" longText="SCOP or winter COP can be used for high winter heating duties" type="int" />

            <InfoThing md={5} xs={4} sm={4} textA="HP @ flat rate" preValue="£" value={values.heatPumpCostFlatRate} description="For those using falt rate tariff" />

            <InfoThing md={4} xs={4} sm={4} textA="HP @ peak rate" preValue="£" value={values.heatPumpCostPeakRate} description="For those with ToU tariff (e.g. EV charging)" />

        </ContainerThing>)
        }
    </FormSpy >
}


export default HeatPumpCostsFields;