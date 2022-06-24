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

            <Typography variant="h5">Costs Comparisons
                <Divider component="hr" />
            </Typography>
            <Grid
                container
                spacing={3}
                justifyContent="left"
                style={{ marginTop: "15px" }}
            >

                <InfoThing sm={12} md={12} xs={12} textA="Time shifted cost" textB="£/EU/$" value={values.thermalStorageDailyCost} description={`@ low rate (inc. loss)`} />

                <InfoThing sm={12} md={12} xs={12} textA="vs direct heating" textB="%" value={values.thermalStorageVsGridPercent} description={`instantaneous @flat rate`} />

                <InfoThing sm={12} md={12} xs={12} textA="vs Heat Pump" textB="%" value={values.thermalStorageVsHeatPumpFlatRate} description={`instantaneous @flat rate`} />

                <InfoThing sm={12} md={12} xs={12} textA="vs. Heat Pump @ peak rate" textB="%" value={values.thermalStorageVsHeatPumpPeakRate} />

                <InfoThing sm={12} md={12} xs={12} textA="vs Cost of lost time shifted heat" textB="%" value={values.thermalStoragePotentialWastedExpense} />

                <InfoThing sm={12} md={12} xs={12} textA="High temp HP vs Low temp HP" textB="%" value={values.thermalStorageVsHeatPumpFlatRate} description={`may not include this. High-temp @ ToU low rate, Low temp @ flat rate`} />
            </Grid>
        </div>)
        }
    </FormSpy >
}


export default ThermalStorageFields;