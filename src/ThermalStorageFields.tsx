import { Box, Divider, Grid, Typography } from "@mui/material";
import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";



const ThermalStorageFields = () => {
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
                        Thermal Storage Costs Comparisons ( Directly heated Thermal storage)
                    </Typography>
                    <Divider />
                </Grid>
            </Grid>

            <Grid
                container
                spacing={3}
                justifyContent="left"
                style={{ marginTop: "15px" }}
            >

                <Grid item xs={12} sm={12} md={12}>
                    <Box sx={{ justifyContent: 'space-between' }}>
                        <div>Daily cost @ ToU Low Rate (inc. loss)</div>

                        <div>{values.thermalStorageDailyCost}</div>

                        <div>Ample output</div>
                    </Box>
                </Grid>



                <Grid item xs={12} sm={12} md={12}>

                    Cost vs.instantaneous Grid consumption


                    {values.thermalStorageVsGridPercent}


                    Compared to flat rate
                </Grid>


                <Grid item xs={12} sm={12} md={12}>

                    Cost vs. Heat Pump (flat rate)


                    {values.thermalStorageVsHeatPumpFlatRate}


                    Compared to flat rate
                </Grid>


                <Grid item xs={12} sm={12} md={12}>

                    Cost vs. Heat Pump (peak rate)


                    {values.thermalStorageVsHeatPumpPeakRate}


                    Compared to peak rate
                </Grid>




                <Grid item xs={12} sm={12} md={12}>

                    Potential wasted expense over N hours storage

                    {values.thermalStoragePotentialWastedExpense}

                    of energy cost @ cheap rate that is wasted   Compared to peak rate
                </Grid>


                <Grid item xs={12} sm={12} md={12}>

                    Stored high temp. Heat Pump @ ToU Low Rate Cost
                    {values.thermalStorageVsHeatPumpFlatRate}
                    of cost of non-shiftet (@peak) Heat Pump consumption
                </Grid>

            </Grid>
        </div>)
        }
    </FormSpy >
}


export default ThermalStorageFields;