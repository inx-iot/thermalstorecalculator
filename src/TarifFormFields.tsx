import { Grid, Typography } from "@mui/material";
import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import NumberField from "./util/numberField";





const TariffFormFields = () => {
    return <FormSpy <IThermalForm>
        subscription={{
            values: true,
            dirtySinceLastSubmit: true,
            submitting: true,
        }}
    >
        {({ values, dirtySinceLastSubmit, submitting }) => (<div>
            <Typography>Tariff Costs
            </Typography>
            <Grid
                container
                spacing={3}
                justifyContent="left"
                style={{ marginTop: "15px" }}
            >
                <NumberField name="standardRateEnergyCost" label="Standard rate unit cost" longText="" helpText='"(pence/hWh)"' type="int" />

                <NumberField name="lowRateEnergyCost" label="ToU low rate unit cost" longText="" helpText='"(pence/hWh)"' type="int" />

                <NumberField name="highRateEnergyCost" label="ToU High rate unit cost" longText="" helpText='"(pence/hWh)"' type="int" />

            </Grid>
        </div>)
        }
    </FormSpy >
}


export default TariffFormFields;