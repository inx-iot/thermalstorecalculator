import { Divider, Grid, Typography } from "@mui/material";
import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
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
        {({ values, dirtySinceLastSubmit, submitting }) => (<div>
            <Typography variant="h5">Heat Pump (HP) Cost Calculator
                <Divider component="hr" />
            </Typography>
            <Grid
                container
                spacing={3}
                justifyContent="left"
                style={{ marginTop: "15px" }} 
            >
                <NumberField name="heatPumpHeatEfficiency" label="COP/SCOP" unitChar="%" longText="SCOP or winter COP can be used for high winter heating duties" type="int" />

                <InfoThing textA="HP cost @ flat rate" preValue="£" value={values.heatPumpCostFlatRate} description="For those using falt rate tariff"/>

                <InfoThing textA="HP cost @ peak rate" preValue="£" value={values.heatPumpCostPeakRate} description="For those with ToU tariff (e.g. EV charging)"/>

            </Grid>
        </div>)
        }
    </FormSpy >
}


export default HeatPumpCostsFields;