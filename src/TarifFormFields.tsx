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
            <NumberField xs={4} sm={4} md={4} name="standardRateEnergyCost" label="Standard rate unit cost" longText="" unitChar='(p/kWh)' type="int" />

            <NumberField xs={4} sm={4} md={4} name="lowRateEnergyCost" label="ToU low rate unit cost" longText="" unitChar='(p/kWh)' type="int" />

            <NumberField xs={4} sm={4} md={4} name="highRateEnergyCost" label="ToU High rate unit cost" longText="" unitChar='(p/kWh)' type="int" />

        </ContainerThing>)
        }
    </FormSpy >
}


export default TariffFormFields;