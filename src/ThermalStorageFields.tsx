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
                        Daily time shifted heating vs on-demand
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

                <InfoThing textA="Time shifted cost [@ low rate (inc. loss)]" textB="£/EU/$" value={values.thermalStorageDailyCost} />

                <InfoThing textA="vs direct heating [instantaneous @flat rate]" textB="%" value={values.thermalStorageVsGridPercent} />

                <InfoThing textA="vs Heat Pump [instantaneous @flat rate]" textB="%" value={values.thermalStorageVsHeatPumpFlatRate} />

                <InfoThing textA="vs. Heat Pump @ peak rate" textB="%" value={values.thermalStorageVsHeatPumpPeakRate} />

                <InfoThing textA="vs Cost of lost time shifted heat " textB="%" value={values.thermalStoragePotentialWastedExpense} />

                <InfoThing textA="High temp HP vs Low temp HP [may not include this. High-temp @ ToU low rate, Low temp @ flat rate]" textB="%" value={values.thermalStorageVsHeatPumpFlatRate}/>
            </Grid>
        </div>)
        }
    </FormSpy >
}


export default ThermalStorageFields;