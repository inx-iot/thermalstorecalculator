import { Divider, Grid, TextField, Typography } from "@mui/material";
import { Field, FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import { formParseInt } from "./util/formParse";



const TimeFormFields = () => {
    return <FormSpy <IThermalForm>
        subscription={{
            values: true,
            dirtySinceLastSubmit: true,
            submitting: true,
        }}
    >
        {({ values, dirtySinceLastSubmit, submitting }) => (<div>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12}>
                    <Typography component="h2" variant="h5">
                        Storage Parameters
                    </Typography>
                    <Divider />
                </Grid>
            </Grid>

            <Grid
                container
                spacing={3}
                justifyContent="left"
                style={{ marginTop: "15px" }}
            >

                <Grid item xs={12} sm={6} md={6}>
                    <Field name="standardRateEnergyCost"
                        parse={formParseInt}
                        format={formParseInt}>

                        {({ input, meta }) => (
                            <TextField
                                {...input}
                                type="number"
                                label="Time Shift Hours (N)"
                                fullWidth
                                required
                                InputProps={{ inputProps: { min: 0 } }}
                                variant="outlined"
                                error={meta.error && meta.touched}
                                helperText={meta.error && meta.touched ? meta.error : "(penc/hWh)"}
                            >
                            </TextField>
                        )}
                    </Field>
                </Grid>


                <Grid item xs={12} sm={12} md={12}>


                    Energy lost over N hours cooling during time-shift


                    {values.timeShiftEnergyLost}



                    kWh
                </Grid>


                <Grid item xs={12} sm={12} md={12}>


                    Loss over N hours @ max temperature


                    {values.timeEnergyLossMaxTemp}



                    kWh
                </Grid>
                <Grid item xs={12} sm={12} md={12}>


                    Temperature after N hours of no heat and no draw


                    {values.timeEnergyLossNoHeatAndDraw}



                    Celcius - temperature expected after cooling for N hours
                </Grid>

                <Grid item xs={12} sm={12} md={12}>


                    Temperature Drop after N hours


                    {values.timeTempDropOverHours}



                    Celcius - temperature below maximum tank temperature
                </Grid>
            </Grid>
        </div>)
        }
    </FormSpy >
}


export default TimeFormFields;