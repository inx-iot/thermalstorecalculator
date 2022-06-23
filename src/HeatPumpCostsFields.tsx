import { Grid } from "@mui/material";
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
            <Grid
                container
                spacing={3}
                justifyContent="left"
                style={{ marginTop: "15px" }}
            >
                <NumberField name="heatPumpHeatEfficiency" label="Direct Heat or Heat Pump efficiency (COP)" longText="" helpText="Winter efficiency" type="int" />

                <InfoThing textA="Heat Pump cost/day @ flat rate" textB="e.g. no night EV charging savings" value={values.heatPumpCostFlatRate} />

                <InfoThing textA="Heat Pump cost/day @ peak rate" textB="e.g. no night EV charging savings" value={values.heatPumpCostPeakRate} />


            </Grid>
        </div>)
        }
    </FormSpy >
}


export default HeatPumpCostsFields;