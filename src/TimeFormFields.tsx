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
                <NumberField name="timeShiftHoursN" label={`Time Shift`} unitChar="hours" type="int" max={10000} min={0} 
             longText="This is the duration of the time shifted energy needed. It is usually the inerval between peak tarif start and the time heat energy is required" />

                <InfoThing textA={`Energy lost`} textB="kWh" value={values.timeShiftEnergyLost} description={`over ${values.timeShiftHoursN} hours cooling during time-shift`} />
                
                <InfoThing textA={`Final temperature`} textB="&#8451;" value={values.timeTemperatureAfterNCoolingNoHeatAndDraw} description={`temperature expected after cooling for ${values.timeShiftHoursN} hours of no heat and no draw`} />

                <InfoThing textA={`Temperature drop`} textB="&#8451;" value={values.timeTempDropOverHours} description={`after ${values.timeShiftHoursN}  hours temperature expected after cooling for ${values.timeShiftHoursN} hours`} />

                

            </Grid>
        </div>)
        }
    </FormSpy >
}

//<InfoThing textA={`Energy loss (max)`} textB="kWh" value={values.timeEnergyLossMaxTemp} description={`Loss not including temperature droop from maximum temperature`} />

export default TimeFormFields;