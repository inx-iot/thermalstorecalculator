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

            <InfoThing xs={4} sm={4} md={4} textA={`Store Mass`} textB="kg" value={(values.tankMassOverride ? values.tankMassOverride : values.tankMass)} valueDecimalPlace={0} resetFunction={e => {
                form.change('tankMassOverride', undefined)
            }}>
                <NumberField name="tankMassOverride" xs={12} sm={12} md={12} label="Store Mass Override" longText="" helpText="(J/kg/Celsius)" type="int" />

            </InfoThing>
            <NumberField name="tankMaxTemperature" xs={4} sm={4} md={4} label="Max. usefule temp." longText="" helpText="Celsius" type="int" />
            <NumberField name="tankMinUsefulTemperature" xs={4} sm={4} md={4} label="Min. useful temp." longText="" helpText="Celsius" type="int" />
            <NumberField name="tankAmbientTemperature" xs={4} sm={4} md={4} label="Ambient temperature" longText="" helpText="Celsius" type="int" />
            <NumberField name="tankEnergyLossCoeficient" xs={4} sm={4} md={4} label="Storage Energy Loss Coeficient" longText="" helpText="W/Celsius" type="int" />
            <InfoThing textA="Useful Energy" textB="kWh" xs={4} sm={4} md={4} valueDecimalPlace={1} value={values.tankEnergy} description="Energy available at max temperature before the minimum useful temperature is reached" />
            <InfoThing textA="Energy Stored" textB="kWh" xs={4} sm={4} md={4} valueDecimalPlace={1} value={values.tankEnergyAfterNHoursCooling} description={`Energy remaining after ${values.timeShiftHoursN} hours cooling`} />
            <InfoThing textA="Insulation loss" xs={4} sm={4} md={4} textB="Watts" valueDecimalPlace={0} value={values.tankEnergyLossWatts} description="Power loss at maximum store temperture" />
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