import { Divider, Grid, TextField, Typography } from "@mui/material";
import { Field, FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import { formParseInt } from "./util/formParse";



const HeatPumpCostsFields = () => {
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
                        Heat Pump Costs
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
                    <Field name="heatPumpHeatEfficiency"
                        parse={formParseInt}
                        format={formParseInt}>

                        {({ input, meta }) => (
                            <TextField
                                {...input}
                                type="number"
                                label="Direct Heat or Heat Pump efficiency (COP)"
                                fullWidth
                                required
                                InputProps={{ inputProps: { min: 0 } }}
                                variant="outlined"
                                error={meta.error && meta.touched}
                                helperText={meta.error && meta.touched ? meta.error : "Winter efficiency"}
                            >
                            </TextField>
                        )}
                    </Field>
                </Grid>





                <Grid item xs={12} sm={12} md={12}>


                    Heat Pump cost/day @ flat rate)


                    {values.heatPumpCostFlatRate}



                    e.g. no night EV charging savings
                </Grid>


                <Grid item xs={12} sm={12} md={12}>

                    Heat Pump cost/day @ peak rate)


                    {values.heatPumpCostPeakRate}



                    e.g. with night EV charging savings
                </Grid>



            </Grid>
        </div>)
        }
    </FormSpy >
}


export default HeatPumpCostsFields;