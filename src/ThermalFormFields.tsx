import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from "@mui/material";
import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import ContainerThing from './util/container';
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
        {({ values, form }) => (<ContainerThing title="Thermal Store Parameters">

            <NumberField xs={4} sm={4} md={4} name="tankSpecificHeatCapacity" label="Store specific heat capacity" longText="" helpText="(J/kg/Celsius)" type="int" />

            <InfoThing xs={4} sm={4} md={4} textA={`Store Mass`} textB="kg" value={(values.tankMassOverride ? values.tankMassOverride : values.tankMass)}>
                <NumberField name="tankMassOverride" xs={12} sm={12} md={12} label="Store Mass Override" longText="" helpText="(J/kg/Celsius)" type="int">
                    <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} onClick={() => {
                        form.change('tankMassOverride', null)
                    }}>
                        <CancelIcon />
                    </Button>
                </NumberField>
            </InfoThing>
            <NumberField name="tankMaxTemperature" xs={4} sm={4} md={4} label="Max. usefule temp." longText="" helpText="Celsius" type="int" />
            <NumberField name="tankMinUsefulTemperature" xs={4} sm={4} md={4} label="Min. useful temp." longText="" helpText="Celsius" type="int" />
            <NumberField name="tankAmbientTemperature" xs={4} sm={4} md={4} label="Ambient temperature" longText="" helpText="Celsius" type="int" />
            <NumberField name="tankEnergyLossCoeficient" xs={4} sm={4} md={4} label="Storage Energy Loss Coeficient" longText="" helpText="W/Celsius" type="int" />
            <InfoThing textA="Useful Energy" textB="kWh" xs={4} sm={4} md={4} value={values.tankEnergy} description="Energy available at max temperature before the minimum useful temperature is reached" />
            <InfoThing textA="Energy Stored" textB="kWh" xs={4} sm={4} md={4} value={values.tankEnergyAfterNHoursCooling} description={`Energy remaining after ${values.timeShiftHoursN} hours cooling`}/>
            <InfoThing textA="Insulation loss" xs={4} sm={4} md={4} textB="Watts" value={values.tankEnergyLossWatts} description="Power loss at maximum store temperture"/>
        </ContainerThing>)
        }
    </FormSpy >
}
/*
Fields not shown
<InfoThing textA="Tank Energy (Ambient)" xs={4} sm={4} md={4} textB="MJ" value={values.tankEnergyAmbient} />
<InfoThing textA="Tank Energy (Useful)" xs={4} sm={4} md={4} textB="MJ" value={values.tankEnergyJoules} />      
          
*/

export default ThermalFormFields;