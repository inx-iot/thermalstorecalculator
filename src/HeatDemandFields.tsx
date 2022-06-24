import { Grid, Typography } from "@mui/material";
import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
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
        {({ values, dirtySinceLastSubmit, submitting }) => (<div>
            <Typography variant="h5">Storage Capacity Calculator</Typography>
            <Grid
                container
                spacing={3}
                justifyContent="left"
                style={{ marginTop: "15px" }}
            >
                <NumberField name="heatEnergyDwellingYear" label="Heating Energy /dwelling/year" longText="" helpText="kWh/dw" type="int" />

                <InfoThing textA="Daily heating energy required" textB="kWh" value={values.heatDailyEnergyRequired} />

                <InfoThing textA="Proportion of central heating" textB="kWh" value={values.heatProportionOfCentralHeating} />




            </Grid>
        </div>)
        }
    </FormSpy >

}


export default HeatDemandFields;