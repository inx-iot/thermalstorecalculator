import { Divider, Grid, Typography } from "@mui/material";
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
            <Typography variant="h5">Energy Time Shifting Requirements
                <Divider component="hr" />
            </Typography>

            <Grid
                container
                spacing={3}
                justifyContent="left"
                style={{ marginTop: "15px" }}
            >
                <NumberField name="timeShiftHoursN" label={`Time Shift Hours (N)`} longText="" helpText="(penc/hWh)" type="int" max={24} />

                <InfoThing textA={`Energy lost`} textB="kWh" value={values.timeShiftEnergyLost} description={`over ${values.timeShiftHoursN} hours cooling during time-shift`} />
                <InfoThing textA={`Loss @ max temperature`} textB="kWh" value={values.timeEnergyLossMaxTemp} description={`will probably remove or move this`} />

                <InfoThing textA={`Temperature drop`} textB={`Celcius`} value={values.timeEnergyLossNoHeatAndDraw} description={`temperature expected after cooling for ${values.timeShiftHoursN} hours of no heat and no draw`} />

                <InfoThing textA={`Temperature Drop`} textB="Celcius" value={values.timeTempDropOverHours} description={`after ${values.timeShiftHoursN}  hours temperature expected after cooling for ${values.timeShiftHoursN} hours`} />



            </Grid>
        </div>)
        }
    </FormSpy >
}


export default TimeFormFields;