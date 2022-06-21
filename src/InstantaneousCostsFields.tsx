import { Divider, Grid, Typography } from "@mui/material";
import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";


const InstantaneousCostsFields = () => {

    return <FormSpy <IThermalForm>
        subscription={{
            values: true,
            dirtySinceLastSubmit: true,
            submitting: true,
        }}
    >
        {({ values, dirtySinceLastSubmit, submitting }) => (<div>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12}>
                    <Typography component="h2" variant="h5">
                        Instantaneous Costs
                    </Typography>
                    <Divider />
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>


                Daily heating cost / day (Direct heating @ flat rate)


                £ {values.instantaneousHeatingCostFlatRate}



                (Theoretical reference only)
            </Grid>

            <Grid item xs={12} sm={12} md={12}>


                Daily heating cost / day (Direct heating @ peak rate)


                £ {values.instantaneousHeatingCostPeakRate}



                (Direct heating is usually at peak times if ToU Tariffs are used)
            </Grid>


        </div>)
        }
    </FormSpy >

}


export default InstantaneousCostsFields;