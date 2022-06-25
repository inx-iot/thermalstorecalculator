import { Divider, Grid, Typography } from "@mui/material";
import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import InfoThing from "./util/infoThing";


const InstantaneousCostsFields = () => {

    return <FormSpy <IThermalForm>
        subscription={{
            values: true,
            dirtySinceLastSubmit: true,
            submitting: true,
        }}
    >
        {({ values, dirtySinceLastSubmit, submitting }) => (<div>

            <Typography variant="h5">Instantaneous Heating Cost Calculator     <Divider component="hr" /></Typography>
            <Grid
                container
                spacing={3}
                justifyContent="left"
                style={{ marginTop: "0px" }}
            >
                <InfoThing textA="Direct heating @ flat rate" description="Daily cost of instantaneous direct heating @ flat rate)" value={values.instantaneousHeatingCostFlatRate} preValue="£" />
                <InfoThing textA="Direct heating @ peak rate" description="Daily cost of instantaneous direct heating @ peak rate" value={values.instantaneousHeatingCostPeakRate} preValue="£" />
            </Grid>
        </div>)
        }
    </FormSpy >

}


export default InstantaneousCostsFields;