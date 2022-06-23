import { Divider, Grid, Typography } from "@mui/material";
import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import NumberField from "./util/numberField";



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
                <NumberField name="tankSpecificHeatCapacity" label="Store specific heat capacity" longText="" helpText="(J/kg/Celsius)" type="int" />

                <Grid item xs={12} sm={12} md={12}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                        <span>Tank/Store Mass</span>
                        <span>{values.tankMass}</span>


                        <span>  kg</span>

                    </div>
                </Grid>

                <NumberField name="tankMassOverride" label="Tank/Store Mass Override" longText="" helpText="(J/kg/Celsius)" type="int" />

                <NumberField name="tankMaxTemperature" label="Tank max. temperature" longText="" helpText="Celsius" type="int" />

                <NumberField name="tankMinTemperature" label="Tank min. temperature" longText="" helpText="Celsius" type="int" />

                <NumberField name="tankAmbientTemperature" label="Ambient temperature" longText="" helpText="Celsius" type="int" />

                <NumberField name="tankEnergyLossCoeficient" label="Storage Energy Loss Coeficient" longText="" helpText="W/Celsius" type="int" />

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




        </div>)
        }
    </FormSpy >
}


export default ThermalFormFields;