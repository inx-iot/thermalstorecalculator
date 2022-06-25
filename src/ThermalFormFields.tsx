import CancelIcon from '@mui/icons-material/Cancel';
import { Button, Divider, Grid, Typography } from "@mui/material";
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
        {({ values, form }) => (<div>
            <Typography variant="h5">Thermal Store Parameters     <Divider component="hr" /></Typography>

            <Grid
                container
                spacing={3}
                justifyContent="left"
                style={{ marginTop: "15px" }}
            >
                <NumberField name="tankSpecificHeatCapacity" label="Store specific heat capacity" longText="" unitChar="J/kg/&#8451;" type="int" />

                <InfoThing textA={`Tank/Store Mass`} textB="kg" value={(values.tankMassOverride ? values.tankMassOverride : values.tankMass)}>
                    <NumberField name="tankMassOverride" sm={12} md={12} label="Store Mass Override" longText="" unitChar="kg" type="int">
                        <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} onClick={() => {
                            form.change('tankMassOverride', null)
                        }}>
                            <CancelIcon />
                        </Button>
                    </NumberField>
                </InfoThing>

                <NumberField name="tankMaxTemperature" label="Tank max. temperature" longText="This is the maximum temperature the controller/thermostat can achieve" unitChar="&#8451;" type="int" />

                <NumberField name="tankMinTemperature" label="Tank min. temperature" longText="The minimum temperature useful to a consumer " unitChar="&#8451;" type="int" />

                <NumberField name="tankAmbientTemperature" label="Ambient temperature" longText="The ambient temperature to which the store will cool to if not heated" unitChar="&#8451;" type="int" />

                <NumberField name="tankEnergyLossCoeficient" label="Storage Energy Loss Coeficient" longText="The insulation of a tank must be entered as Watts per &#8451;. This may need to be calculated from a stores absolute power loss and operating temperature" unitChar="W/&#8451;" type="int" />


                <InfoThing textA="Store Energy (Ambient)" textB="MJ" value={values.tankEnergyAmbient} description="Energy required to heat from ambient temperature to max"/>


                <InfoThing textA="Store Energy (Useful)" textB="MJ" value={values.tankEnergyJoules} description="Energy required to heat from minimum useful temperature to max" />


                <InfoThing textA="Useful Store Energy" textB="kWh" value={values.tankEnergy} description={`kWh of energy available in the store before reacing the Tank Min temperaure ${values.tankMinTemperature}&#8451; `}/>

                <InfoThing textA={`Energy after ${values.timeShiftHoursN} hours`} textB="kWh" value={values.tankAfterNHoursCooling} description={`The amount of enrgy left after ${values.timeShiftHoursN} hours`}/>


            </Grid>




        </div>)
        }
    </FormSpy >
}// <InfoThing textA="Total Store Energy" textB="MJ" value={values.tankEnergyWattsTotal} />

export default ThermalFormFields;