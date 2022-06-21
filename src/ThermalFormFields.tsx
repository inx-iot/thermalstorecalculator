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
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                        <span>Tank/Store Mass</span>
                        <span>{values.tankMass}</span>


                        <span>  kg</span>

                    </div>







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
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                            <span> Useful Tank Energy (Joules)
                            </span>
                            <span>{values.tankEnergyAmbient}</span>
                            <span>MJ</span>

                        </div>






                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                            <span>Useful Tank Energy (Joules)</span>
                            <span>{values.tankEnergyJoules}</span>
                            <span>MJ  - Energy required t heat from min. useful to max</span>

                        </div>









                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>

                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                            <span>Useful Tank Energy</span>
                            <span> {values.tankEnergy}</span>
                            <span>kWh</span>

                        </div>





                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                            <span>Useful Tank Energy after N hours cooling</span>
                            <span>  {values.tankAfterNHoursCooling}</span>
                            <span>kWh

                                - Maximum energy available at max. temp.</span>

                        </div>




                    </Grid>
                </Grid>





            </Grid>
        </div>)
        }
    </FormSpy >
}


export default ThermalFormFields;