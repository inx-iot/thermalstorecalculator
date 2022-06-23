import { Grid } from "@mui/material";
import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import InfoThing from "./util/infoThing";
import NumberField from "./util/numberField";



const TimeFormFields = () => {
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
                <NumberField name="standardRateEnergyCost" label={`Time Shift Hours (N)`} longText="" helpText="(penc/hWh)" type="int" />

                <InfoThing textA={`Energy lost [over N hours cooling during time-shift]`} textB="kWh" value={values.timeShiftEnergyLost} />
                <InfoThing textA={`Loss @ max temperature [will probably remove or move this]`} textB="kWh" value={values.timeEnergyLossMaxTemp} />

                <InfoThing textA={`Temperature drop [after N hours of no heat and no draw]`} textB="Celcius - temperature expected after cooling for N hours" value={values.timeEnergyLossNoHeatAndDraw} />

                <InfoThing textA={` Temperature Drop [after N hours temperature expected after cooling for N hours]`} textB="Celcius" value={values.timeTempDropOverHours} />



            </Grid>
        </div>)
        }
    </FormSpy >
}


export default TimeFormFields;