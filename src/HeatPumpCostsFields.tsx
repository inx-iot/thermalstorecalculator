import { Grid, Typography } from "@mui/material";
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
            <Typography>Heat Pump Cost Calculator</Typography>
            <Grid
                container
                spacing={3}
                justifyContent="left"
                style={{ marginTop: "15px" }}
            >
                <NumberField name="heatPumpHeatEfficiency" label="Heat Pump efficiency (COP)" longText="" helpText="SCOP or winter efficiency can be used for high winter heating duties" type="int" />

                <InfoThing textA="Heat Pump cost/day @ flat rate [for those without ToU]" textB="£/EU/$" value={values.heatPumpCostFlatRate} />

                <InfoThing textA="Heat Pump cost/day @ peak rate [for those with YoU (e.g. EV charging)" textB="£/EU/$" value={values.heatPumpCostPeakRate} />

            </Grid>
        </div>)
        }
    </FormSpy >
}


export default HeatPumpCostsFields;