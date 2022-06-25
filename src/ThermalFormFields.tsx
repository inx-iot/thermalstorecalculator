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
                <NumberField  xs={4} sm={4} md={4}  name="tankSpecificHeatCapacity" label="Store specific heat capacity" longText="" unitChar="J/kg/&#8451;" type="int" />

                <InfoThing textA={`Store Mass`} textB="kg" value={(values.tankMassOverride ? values.tankMassOverride : values.tankMass)} description="A required store mass is calculated for the rquired energy (above), or it can be set to a fixed size">
                    <NumberField name="tankMassOverride" sm={12} md={12} label="Store Mass Override" longText="" unitChar="kg" type="int">
                        <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} onClick={() => {
                            form.change('tankMassOverride', null)
                        }}>
                            <CancelIcon />
                        </Button>
                    </NumberField>
                </InfoThing>

                <NumberField  xs={4} sm={4} md={4} name="tankMaxTemperature" label="Tank max. temperature" longText="This is the maximum temperature the controller/thermostat can achieve" unitChar="&#8451;" type="int" />

                <NumberField  xs={4} sm={4} md={4} name="tankMinTemperature" label="Tank min. temperature" longText="The minimum temperature useful to a consumer " unitChar="&#8451;" type="int" />

                <NumberField  xs={4} sm={4} md={4} name="tankAmbientTemperature" label="Ambient temperature" longText="The ambient temperature to which the store will cool to if not heated" unitChar="&#8451;" type="int" />

                <NumberField  xs={4} sm={4} md={4} name="tankEnergyLossCoeficient" label="Storage Energy Loss Coeficient" longText="The insulation of a tank must be entered as Watts per &#8451;. This may need to be calculated from a stores absolute power loss and operating temperature" unitChar="W/&#8451;" type="int" />


                <InfoThing  xs={4} sm={4} md={4} textA="Store Energy (Ambient)" textB="MJ" value={values.tankEnergyAmbient} description="Energy required to heat from ambient temperature to max"/>


                <InfoThing  xs={4} sm={4} md={4} textA="Store Energy (Useful)" textB="MJ" value={values.tankEnergyJoules} description="Energy required to heat from minimum useful temperature to max" />


                <InfoThing  xs={4} sm={4} md={4} textA="Useful Store Energy" textB="kWh" value={values.tankEnergy} description={`kWh of energy available in the store before reacing the Tank Min temperaure ${values.tankMinTemperature}&#8451; `}/>

                <InfoThing  xs={4} sm={4} md={4} textA={`Energy after ${values.timeShiftHoursN} hours`} textB="kWh" value={values.tankAfterNHoursCooling} description={`The amount of enrgy left after ${values.timeShiftHoursN} hours`}/>


            </Grid>




        </div>)
        }
    </FormSpy >
}// <InfoThing textA="Total Store Energy" textB="MJ" value={values.tankEnergyWattsTotal} />

export default ThermalFormFields;