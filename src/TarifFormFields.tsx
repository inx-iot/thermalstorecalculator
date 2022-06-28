import { Divider, Grid, Typography } from "@mui/material";
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
            <Typography variant="h5"> <Divider component="hr" />Tariff Costs

            </Typography>
            <Grid
                container
                spacing={3}
                justifyContent="left"
                style={{ marginTop: "0px" }}
            >
                <NumberField xs={4} sm={4} md={4} name="standardRateEnergyCost" label="Standard rate unit cost" longText="" unitChar='(p/kWh)' type="int" />

                <NumberField xs={4} sm={4} md={4} name="lowRateEnergyCost" label="ToU low rate unit cost" longText="" unitChar='(p/kWh)' type="int" />

                <NumberField xs={4} sm={4} md={4} name="highRateEnergyCost" label="ToU High rate unit cost" longText="" unitChar='(p/kWh)' type="int" />

            </Grid>
        </div>)
        }
    </FormSpy >
}


export default TariffFormFields;