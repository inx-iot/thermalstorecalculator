import { Divider, Grid, Typography } from "@mui/material";
import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import InfoThing from "./util/infoThing";



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

                <InfoThing textA="Daily cost @ ToU Low Rate (inc. loss)" textB="Ample output" value={values.thermalStorageDailyCost} />



                <InfoThing textA="Cost vs.instantaneous Grid consumption" textB="Compared to flat rate" value={values.thermalStorageVsGridPercent} />

                <InfoThing textA="Cost vs. Heat Pump (flat rate)" textB="Compared to flat rate" value={values.thermalStorageVsHeatPumpFlatRate} />

                <InfoThing textA="Cost vs. Heat Pump (peak rate)" textB="Compared to peak rate" value={values.thermalStorageVsHeatPumpPeakRate} />

                <InfoThing textA="Potential wasted expense over N hours storage" textB="of energy cost @ cheap rate that is wasted Compared to peak rate" value={values.thermalStoragePotentialWastedExpense} />

                <InfoThing textA="Stored high temp. Heat Pump @ ToU Low Rate Cost" textB="of cost of non-shiftet (@peak) Heat Pump consumption" value={values.thermalStorageVsHeatPumpFlatRate} />

            </Grid>
        </div>)
        }
    </FormSpy >
}


export default ThermalStorageFields;