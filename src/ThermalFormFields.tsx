import { Divider, Grid, Typography } from "@mui/material";
import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import InfoThing from "./util/infoThing";
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

                <InfoThing textA={`Tank/Store Mass`} textB="kg." value={values.tankMass} />

                <NumberField name="tankMassOverride" label="Tank/Store Mass Override" longText="" helpText="(J/kg/Celsius)" type="int" />

                <NumberField name="tankMaxTemperature" label="Tank max. temperature" longText="" helpText="Celsius" type="int" />

                <NumberField name="tankMinTemperature" label="Tank min. temperature" longText="" helpText="Celsius" type="int" />

                <NumberField name="tankAmbientTemperature" label="Ambient temperature" longText="" helpText="Celsius" type="int" />

                <NumberField name="tankEnergyLossCoeficient" label="Storage Energy Loss Coeficient" longText="" helpText="W/Celsius" type="int" />



                <InfoThing textA="Tank Energy (Ambient)" textB="MJ" value={values.tankEnergyAmbient} />


                <InfoThing textA="Tank Energy (Useful) [Energy required t heat from min. useful to max]" textB="MJ" value={values.tankEnergyJoules} />


                <InfoThing textA="Useful Tank Energy" textB="kWh" value={values.tankEnergy} />

                <InfoThing textA={`Remaining Energy after ${values.timeShiftHoursN} hours cooling`} textB="kWh" value={values.tankAfterNHoursCooling} />


            </Grid>




        </div>)
        }
    </FormSpy >
}


export default ThermalFormFields;