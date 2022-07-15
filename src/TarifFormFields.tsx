import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import ContainerThing from "./util/container";
import NumberField from "./util/numberField";





const TariffFormFields = () => {
    return <FormSpy <IThermalForm>
        subscription={{
            values: true,
            dirtySinceLastSubmit: true,
            submitting: true,
        }}
    >
        {({ values, dirtySinceLastSubmit, submitting }) => (<ContainerThing title="Tariff Costs">
            <NumberField xs={4} sm={4} md={4} name="standardRateEnergyCost" label="Standard rate unit cost" longText="This is used to compare costs of on-demand direct or heat pump heating" unitChar='(p/kWh)' type="float" />

            <NumberField xs={4} sm={4} md={4} name="lowRateEnergyCost" label="ToU low rate unit cost" longText="Low rate energy cost. You can use any currency here, including carbon intensity - just ignore the the Uk currency symbols!" unitChar='(p/kWh)' type="float" />

            <NumberField xs={4} sm={4} md={4} name="highRateEnergyCost" label="ToU High rate unit cost" longText="High rate energy costs for the ToU tariff. These are usually capped" unitChar='(p/kWh)' type="float" />

        </ContainerThing>)
        }
    </FormSpy >
}


export default TariffFormFields;