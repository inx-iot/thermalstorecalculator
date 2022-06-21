import { Divider, Grid, TextField, Typography } from "@mui/material";
import { Field, FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import { formParseInt } from "./util/formParse";



const ThermalFormFields = () => {
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
                        Thermal Storage
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
                    <Field name="tankSpecificHeatCapacity"
                        parse={formParseInt}
                        format={formParseInt}>

                        {({ input, meta }) => (
                            <TextField
                                {...input}
                                type="number"
                                label="Store specific heat capacity"
                                fullWidth
                                required
                                InputProps={{ inputProps: { min: 0 } }}
                                variant="outlined"
                                error={meta.error && meta.touched}
                                helperText={meta.error && meta.touched ? meta.error : "(J/kg/Celsius)"}
                            >
                            </TextField>
                        )}
                    </Field>
                </Grid>





                <Grid item xs={12} sm={12} md={12}>


                    Tank/Store Mass


                    {values.tankMass}



                    kg


                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <Field name="tankMassOverride"
                        parse={formParseInt}
                        format={formParseInt}>

                        {({ input, meta }) => (
                            <TextField
                                {...input}
                                type="number"
                                label="Tank/Store Mass Override"
                                fullWidth
                                InputProps={{ inputProps: { min: 0 } }}
                                variant="outlined"
                                error={meta.error && meta.touched}
                                helperText={meta.error && meta.touched ? meta.error : "(J/kg/Celsius)"}
                            >
                            </TextField>
                        )}
                    </Field>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <Field name="tankMaxTemperature"
                        parse={formParseInt}
                        format={formParseInt}>

                        {({ input, meta }) => (
                            <TextField
                                {...input}
                                type="number"
                                label="Tank max. temperature"
                                fullWidth
                                required
                                InputProps={{ inputProps: { min: 0 } }}
                                variant="outlined"
                                error={meta.error && meta.touched}
                                helperText={meta.error && meta.touched ? meta.error : "Celsius"}
                            >
                            </TextField>
                        )}
                    </Field>
                </Grid>


                <Grid item xs={12} sm={6} md={6}>
                    <Field name="tankMinTemperature"
                        parse={formParseInt}
                        format={formParseInt}>

                        {({ input, meta }) => (
                            <TextField
                                {...input}
                                type="number"
                                label="Min. useful tank temperature"
                                fullWidth
                                required
                                InputProps={{ inputProps: { min: 0 } }}
                                variant="outlined"
                                error={meta.error && meta.touched}
                                helperText={meta.error && meta.touched ? meta.error : "Celsius"}
                            >
                            </TextField>
                        )}
                    </Field>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Field name="tankAmbientTemperature"
                        parse={formParseInt}
                        format={formParseInt}>

                        {({ input, meta }) => (
                            <TextField
                                {...input}
                                type="number"
                                label="Ambient Temperature"
                                fullWidth
                                required
                                InputProps={{ inputProps: { min: 0 } }}
                                variant="outlined"
                                error={meta.error && meta.touched}
                                helperText={meta.error && meta.touched ? meta.error : "Celsius"}
                            >
                            </TextField>
                        )}
                    </Field>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Field name="tankEnergyLossCoeficient"
                            parse={formParseInt}
                            format={formParseInt}>

                            {({ input, meta }) => (
                                <TextField
                                    {...input}
                                    type="number"
                                    label="Storage Energy Loss Coeficient"
                                    fullWidth
                                    required
                                    color="secondary"
                                    InputProps={{ inputProps: { min: 0 } }}
                                    variant="outlined"
                                    error={meta.error && meta.touched}
                                    helperText={meta.error && meta.touched ? meta.error : "W/Celsius"}
                                >
                                </TextField>
                            )}
                        </Field>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>


                        Useful Tank Energy (Joules)

                        {values.tankEnergyAmbient}

                        MJ

                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>


                        Useful Tank Energy (Joules)

                        {values.tankEnergyJoules}

                        MJ


                        - Energy required t heat from min. useful to max
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>


                        Useful Tank Energy

                        {values.tankEnergy}

                        kWh
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>

                        Useful Tank Energy after N hours cooling
                        {values.tankAfterNHoursCooling}

                        kWh

                        - Maximum energy available at max. temp.
                    </Grid>
                </Grid>





            </Grid>
        </div>)
        }
    </FormSpy >
}


export default ThermalFormFields;