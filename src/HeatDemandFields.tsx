import { Divider, Grid, TextField, Typography } from "@mui/material";
import { Field, FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import { formParseInt } from "./util/formParse";


const HeatDemandFields = () => {

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
                        Heat Demand Profile
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
                    <Field name="heatEnergyDwellingYear"
                        parse={formParseInt}
                        format={formParseInt}>

                        {({ input, meta }) => (
                            <TextField
                                {...input}
                                type="number"
                                label="Heating Energy /dwelling/year"
                                fullWidth
                                required
                                InputProps={{ inputProps: { min: 0 } }}
                                variant="outlined"
                                error={meta.error && meta.touched}
                                helperText={meta.error && meta.touched ? meta.error : "kWh/dw"}
                            >
                            </TextField>
                        )}
                    </Field>
                </Grid>





                <Grid item xs={12} sm={6} md={6}>
                    <Field name="timeShiftHoursN"
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
                                helperText={meta.error && meta.touched ? meta.error : "Hours"}
                            >
                            </TextField>
                        )}
                    </Field>
                </Grid>





                <Grid item xs={12} sm={12} md={12}>


                    Daily heating energy required


                    {values.heatDailyEnergyRequired}



                    kWh
                </Grid>

                <Grid item xs={12} sm={12} md={12}>


                    Proportion of central heating


                    {values.heatProportionOfCentralHeating}



                    kWh
                </Grid>



            </Grid>
        </div>)
        }
    </FormSpy >

}


export default HeatDemandFields;