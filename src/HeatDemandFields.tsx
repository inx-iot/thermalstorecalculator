import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import ContainerThing from './util/container';
import InfoThing from "./util/infoThing";
import NumberField from "./util/numberField";

const HeatDemandFields = () => {

    return <FormSpy <IThermalForm>
        subscription={{
            values: true,
            dirtySinceLastSubmit: true,
            submitting: true,
        }}
    >
        {({ values, form }) => (<ContainerThing title="Storage Capacity Calculator">
            <NumberField md={3} xs={4} sm={4} name="heatEnergyDwellingYear" label="Annual Energy" unitChar="kWh/dw" type="int" longText="The heating energy requirement per dwelling per year. (UK average is 12000kwh/dw/year)" />
            <NumberField md={3} xs={4} sm={4} name="heatUsedDaysPerYear" label="Days/year" longText="The total number of days per year that the heating is needed (e.g. just winter heating months for costing CH)." type="int" />

            <InfoThing md={3} xs={4} sm={4} textA="Daily need" textB="kWh" description="Calculated from the annual requirement. If you know the daily requirement override this with the tool icon." value={values.heatDailyEnergyRequired} valueDecimalPlace={0} resetFunction={e => {
                form.change('heatDailyEnergyRequiredOverride', undefined)
            }}>
                <NumberField sm={12} md={12} name="heatDailyEnergyRequiredOverride" label="Set Daily Energy" longText="If you know the daily rather than annual energy requirement enter this here to overrides the annual calculation." unitChar="kWh" type="int" />

            </InfoThing>

            <InfoThing md={3} xs={4} sm={4} textA="Need met" textB="%" description="Identifies the proportion of heating requirement that the thermal store can provide after accounting for size, temperature and energy losses." value={values.heatProportionOfCentralHeating} valueDecimalPlace={0} />



        </ContainerThing>)
        }
    </FormSpy >

}


export default HeatDemandFields;