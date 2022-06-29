import { Card, CardContent, Grid } from "@mui/material";
import createDecorator from 'final-form-calculate';
import * as React from 'react';
import { Form } from "react-final-form";
import Chart from "./Chart";
import HeatDemandFields from "./HeatDemandFields";
import HeatPumpCostsFields from "./HeatPumpCostsFields";
import InstantaneousCostsFields from "./InstantaneousCostsFields";
import { IThermalForm } from "./interfaces/thermal";
import TariffFormFields from "./TarifFormFields";
import ThermalFormFields from "./ThermalFormFields";
import ThermalStorageFields from "./ThermalStorageFields";
import TimeFormFields from "./TimeFormFields";



// const Accordion = styled((props: AccordionProps) => (
//     <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//     border: `1px solid ${theme.palette.divider}`,
//     '&:not(:last-child)': {
//         borderBottom: 0,
//     },
//     '&:before': {
//         display: 'none',
//     },
// }));

// const AccordionSummary = styled((props: AccordionSummaryProps) => (
//     <MuiAccordionSummary
//         expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//         {...props}
//     />
// ))(({ theme }) => ({
//     backgroundColor:
//         theme.palette.mode === 'dark'
//             ? 'rgba(255, 255, 255, .05)'
//             : 'rgba(0, 0, 0, .03)',
//     flexDirection: 'row-reverse',
//     '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//         transform: 'rotate(90deg)',
//     },
//     '& .MuiAccordionSummary-content': {
//         marginLeft: theme.spacing(1),
//     },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//     padding: theme.spacing(2),
//     borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));



const ThermalForm = () => {

    const initValues: IThermalForm = {
        standardRateEnergyCost: 15,
        lowRateEnergyCost: 8,
        highRateEnergyCost: 20,

        tankSpecificHeatCapacity: 4200, // asssume water 
        tankMass: 400, // this is one of the larger tanks
        tankMassOverride: null,
        tankMaxTemperature: 90,
        tankMinUsefulTemperature: 35,
        tankAmbientTemperature: 20,
        tankEnergyLossCoeficient: 3,
        tankEnergyJoules: 0,
        tankEnergy: 0,
        tankAfterNHoursCooling: 0,
        tankEnergyAmbient: 0,

        heatEnergyDwellingYear: 8000,
        heatUsedDaysPerYear: 230,
        heatDailyEnergyRequired: 0,
        heatDailyEnergyRequiredOverride: null,
        heatProportionOfCentralHeating: 0,

        timeShiftHoursN: 12,
        timeShiftEnergyLost: 0,
        timeEnergyLossMaxTemp: 0,
        timeTemperatureAfterNCoolingNoHeatAndDraw: 10,
        timeTempDropOverHours: 0.0,
        timeEnergyLostFinalfterN: 0,
        timeEnergyLostNMaxTempFraction: 0,


        instantaneousHeatingCostFlatRate: 0.0,
        instantaneousHeatingCostPeakRate: 0.0,

        heatPumpHeatEfficiency: 200,
        heatPumpCostFlatRate: 0.0,
        heatPumpCostPeakRate: 0.0,

        thermalStorageDailyCost: undefined,
        thermalStorageVsGridPercent: undefined,
        thermalStorageVsHeatPumpFlatRate: undefined,
        thermalStorageVsHeatPumpPeakRate: undefined,
        thermalStoragePotentialWastedExpense: undefined,
        thermalStorageHighTempRateCost: undefined,
    }

    return <Card>
        <CardContent>

            <Form <any>
                onSubmit={values => {
                    console.log("onSubmit", values)
                    //   if (!response.data) return response;
                }}

                initialValues={initValues}
                decorators={[
                    createDecorator(
                        {
                            field: /(.*?)/, // when the value of foo changes...

                            updates: (value, name, allValues: any) => {




                                if (allValues) {


                                    const unbind = { ...allValues }
                                    //detect not entered fields and replace with 0
                                    unbind.timeShiftHoursN = (unbind.timeShiftHoursN !== '' && unbind.timeShiftHoursN !== undefined ? allValues.timeShiftHoursN : 0)
                                    unbind.heatEnergyDwellingYear = (unbind.heatEnergyDwellingYear !== '' ? unbind.heatEnergyDwellingYear : 0)
                                    unbind.heatUsedDaysPerYear = (unbind.heatUsedDaysPerYear !== '' ? unbind.heatUsedDaysPerYear : 0)
                                    unbind.standardRateEnergyCost = (unbind.standardRateEnergyCost !== '' ? unbind.standardRateEnergyCost : 0)
                                    unbind.lowRateEnergyCost = (unbind.lowRateEnergyCost !== '' ? unbind.lowRateEnergyCost : 0)
                                    unbind.highRateEnergyCost = (unbind.highRateEnergyCost !== '' ? unbind.highRateEnergyCost : 0)
                                    unbind.tankSpecificHeatCapacity = (unbind.tankSpecificHeatCapacity !== '' ? unbind.tankSpecificHeatCapacity : 0)
                                    unbind.tankMaxTemperature = (unbind.tankMaxTemperature !== '' ? unbind.tankMaxTemperature : 0)
                                    unbind.tankMinUsefulTemperature = (unbind.tankMinUsefulTemperature !== '' ? unbind.tankMinUsefulTemperature : 0)
                                    unbind.tankAmbientTemperature = (unbind.tankAmbientTemperature !== '' ? unbind.tankAmbientTemperature : 0)
                                    unbind.tankEnergyLossCoeficient = (unbind.tankEnergyLossCoeficient !== '' ? unbind.tankEnergyLossCoeficient : 0)
                                    unbind.heatPumpHeatEfficiency = (unbind.heatPumpHeatEfficiency !== '' ? unbind.heatPumpHeatEfficiency : 0)





                                    //console.log("update", unbind.heatEnergyDwellingYear)




                                    //     tankMaxTemperature
                                    //     tankMinUsefulTemperature
                                    //    tankAmbientTemperature
                                    //     tankEnergyLossCoeficient
                                    //     heatPumpHeatEfficiency


                                    const values: IThermalForm = unbind;
                                    //for (let index = 0; index < 50; index++) { 
                                    //heatEnergyDwellingYear
                                    if (values.heatDailyEnergyRequired === undefined) values.heatDailyEnergyRequired = values.heatDailyEnergyRequiredOverride
                                    if (values.heatDailyEnergyRequired === undefined || values.heatDailyEnergyRequired === null) values.heatDailyEnergyRequired = 38

                                    values.heatDailyEnergyRequired = values.heatEnergyDwellingYear / values.heatUsedDaysPerYear
                                    var heatDailyEnergyRequired = ((values.heatDailyEnergyRequiredOverride) ? values.heatDailyEnergyRequiredOverride : values.heatDailyEnergyRequired)


                                    //if not number use 0 for inputs








                                    if (Math.sqrt(5) === 1) { // WTF type script!

                                        // final temperature after N hours cooling
                                        values.timeTemperatureAfterNCoolingNoHeatAndDraw = values.tankEnergyLossCoeficient + (values.tankMaxTemperature - values.tankEnergyLossCoeficient) *
                                            Math.exp(-1 * values.tankEnergyLossCoeficient / (values.tankSpecificHeatCapacity * values.tankMass) * 3600 * values.timeShiftHoursN)

                                        var tankMass = (values.tankMassOverride !== null && values.tankMassOverride ? values.tankMassOverride : 300)

                                        values.timeEnergyLostFinalfterN = (values.timeTemperatureAfterNCoolingNoHeatAndDraw * values.tankSpecificHeatCapacity * tankMass / 1000) / 3600
                                        values.heatProportionOfCentralHeating = values.timeEnergyLostFinalfterN / (heatDailyEnergyRequired + 0.0001)
                                        ///=if(D5>0,D5,(B5+0.001)/(B17+0.001))           


                                        values.tankMass = tankMass;
                                        values.tankEnergyJoules = tankMass * values.tankSpecificHeatCapacity * (values.tankMaxTemperature - values.tankMinUsefulTemperature) / 1000000
                                        values.tankEnergyAmbient = tankMass * values.tankSpecificHeatCapacity * (values.tankMaxTemperature - values.tankEnergyLossCoeficient) / 1000000
                                        // tank energy in kwh assuming minimum useful enrgy temperature temperature difference
                                        values.tankEnergy = values.tankEnergyJoules * 1000 / 3600
                                        // Temperature Drop after N hours=B6-B21 =  Tank max. temperature - Temperature after N hours of no heat and no draw
                                        values.timeTempDropOverHours = values.tankMaxTemperature - values.timeTemperatureAfterNCoolingNoHeatAndDraw
                                        // Energy lost over N hours cooling during time-shift =(B22*B4*B5/1000)/3600  = (Temperature_Drop_after_N_hours * Store_specific_heat_capacity * Tank_Store_Mass/1000)/3600
                                        values.timeShiftEnergyLost = (values.timeTempDropOverHours * values.tankSpecificHeatCapacity * tankMass / 1000) / 3600

                                        values.timeEnergyLossMaxTemp = values.tankEnergyLossCoeficient * (values.tankMaxTemperature - values.tankAmbientTemperature) * values.timeShiftHoursN / 1000
                                        values.timeEnergyLostNMaxTempFraction = values.timeEnergyLossMaxTemp / values.tankEnergy

                                        //Energy lost over N hours cooling during time-shift=(B22*B4*B5/1000)/3600
                                        values.tankAfterNHoursCooling = values.tankEnergyJoules * 1000 / 3600 - values.timeTempDropOverHours

                                        values.instantaneousHeatingCostFlatRate = Math.round(heatDailyEnergyRequired * values.standardRateEnergyCost) / 100
                                        values.instantaneousHeatingCostPeakRate = Math.round(heatDailyEnergyRequired * values.highRateEnergyCost) / 100

                                        // these are wrong:
                                        values.heatPumpCostFlatRate = Math.round(values.instantaneousHeatingCostFlatRate * values.heatPumpHeatEfficiency) / 100;
                                        values.heatPumpCostPeakRate = Math.round(values.instantaneousHeatingCostPeakRate * values.heatPumpHeatEfficiency) / 100;

                                        values.thermalStorageDailyCost = Math.round(values.tankEnergy * values.standardRateEnergyCost) / 100; // convert to £
                                        values.thermalStorageVsGridPercent = Math.round(values.thermalStorageDailyCost * values.instantaneousHeatingCostFlatRate) / 100;
                                        values.thermalStorageVsHeatPumpFlatRate = Math.round(values.thermalStorageDailyCost * values.heatPumpCostFlatRate) / 100;
                                        values.thermalStorageVsHeatPumpPeakRate = Math.round(values.thermalStorageDailyCost * values.heatPumpCostPeakRate) / 100;
                                        values.thermalStoragePotentialWastedExpense = Math.round(values.timeShiftEnergyLost * values.lowRateEnergyCost) / 100;
                                        values.thermalStorageHighTempRateCost = Math.round(values.lowRateEnergyCost * values.tankAfterNHoursCooling / 100 + values.thermalStoragePotentialWastedExpense) / values.heatPumpHeatEfficiency
                                        values.tankEnergyLossWatts = values.tankEnergyLossCoeficient * (values.tankMaxTemperature - values.tankMinUsefulTemperature)
                                        //}
                                    }
                                    else {
                                        // This next line is just to show the problem that we can't enter numbers as usual. 
                                        // If we delete all the entries so we can change th firs digit generates a NaN when it is blank. 
                                        // This causes some kinf of unrecoverable error even after it is corrected.
                                        // (A) we don't want this to fall over for ever if it doesn't like the numbers 
                                        // (B) we want to be able to enter numbers without a zero at the beginning after we've delete the current value.
                                        // (C) This happens for all number inputs and needs resolving & testing for all of them too. 
                                        values.timeTemperatureAfterNCoolingNoHeatAndDraw = values.timeShiftHoursN
                                        var tankMass = 999

                                        values.timeEnergyLostFinalfterN = 999
                                        values.heatProportionOfCentralHeating = 999
                                        ///=if(D5>0,D5,(B5+0.001)/(B17+0.001))           


                                        values.tankMass = tankMass;
                                        values.tankEnergyJoules = 999
                                        values.tankEnergyAmbient = 999
                                        // tank energy in kwh assuming minimum useful enrgy temperature temperature difference
                                        values.tankEnergy = 999
                                        // Temperature Drop after N hours=B6-B21 =  Tank max. temperature - Temperature after N hours of no heat and no draw
                                        values.timeTempDropOverHours = 999
                                        // Energy lost over N hours cooling during time-shift =(B22*B4*B5/1000)/3600  = (Temperature_Drop_after_N_hours * Store_specific_heat_capacity * Tank_Store_Mass/1000)/3600
                                        values.timeShiftEnergyLost = 999

                                        values.timeEnergyLossMaxTemp = 999
                                        values.timeEnergyLostNMaxTempFraction = 999

                                        //Energy lost over N hours cooling during time-shift=(B22*B4*B5/1000)/3600
                                        values.tankAfterNHoursCooling = 999

                                        values.instantaneousHeatingCostFlatRate = 999
                                        values.instantaneousHeatingCostPeakRate = 999

                                        // these are wrong:
                                        values.heatPumpCostFlatRate = 999;
                                        values.heatPumpCostPeakRate = 999;

                                        values.thermalStorageDailyCost = 999
                                        values.thermalStorageVsGridPercent = 999
                                        values.thermalStorageVsHeatPumpFlatRate = 999
                                        values.thermalStorageVsHeatPumpPeakRate = 999
                                        values.thermalStoragePotentialWastedExpense = 999;
                                        values.thermalStorageHighTempRateCost = 999
                                        values.tankEnergyLossWatts = 999
                                    }
                                    return {
                                        "tankEnergyJoules": values.tankEnergyJoules,
                                        "tankEnergyAmbient": values.tankEnergyAmbient,
                                        "tankEnergy": values.tankEnergy,
                                        "tankAfterNHoursCooling": values.tankAfterNHoursCooling,
                                        "timeEnergyLossNoHeatAndDraw": values.timeTemperatureAfterNCoolingNoHeatAndDraw,
                                        "heatProportionOfCentralHeating": values.heatProportionOfCentralHeating * 100,
                                        "timeTempDropOverHours": values.timeTempDropOverHours,
                                        "timeShiftEnergyLost": values.timeShiftEnergyLost,
                                        "tankEnergyLossWatts": values.tankEnergyLossWatts,
                                        "timeEnergyLostFinalfterN": values.timeEnergyLostFinalfterN,
                                        "timeEnergyLossMaxTemp": values.timeEnergyLossMaxTemp,
                                        "timeEnergyLostInNMaxTemp": values.timeEnergyLossMaxTemp,
                                        "instantaneousHeatingCostFlatRate": values.instantaneousHeatingCostFlatRate,
                                        "instantaneousHeatingCostPeakRate": values.instantaneousHeatingCostPeakRate,
                                        "heatPumpCostFlatRate": values.heatPumpCostFlatRate,
                                        "heatPumpCostPeakRate": values.heatPumpCostPeakRate,
                                        "heatPumpHeatEfficiency": values.heatPumpHeatEfficiency,
                                        "thermalStorageDailyCost": values.thermalStorageDailyCost,
                                        "thermalStorageVsGridPercent": values.thermalStorageVsGridPercent * 100,
                                        "thermalStorageVsHeatPumpFlatRate": values.thermalStorageVsHeatPumpFlatRate * 100,
                                        "thermalStorageVsHeatPumpPeakRate": values.thermalStorageVsHeatPumpPeakRate * 100,
                                        "thermalStoragePotentialWastedExpense": values.thermalStoragePotentialWastedExpense * 100,
                                        "thermalStorageHighTempRateCost": values.thermalStorageHighTempRateCost * 100,
                                        "tankMass": values.tankMass,
                                    };
                                } else {
                                    return {}
                                }
                            }
                        })
                ]}
                render={({
                    handleSubmit,
                    pristine,
                    invalid,
                    dirtySinceLastSubmit,
                    values,
                }) => (
                    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                        {/* <DebugButton data={values} /> */}

                        <Grid container spacing={2}>
                            <Grid item xs={8} sm={8} md={8}>

                                <TimeFormFields />
                                <HeatDemandFields />

                                <TariffFormFields />


                                <ThermalFormFields />
                                <InstantaneousCostsFields />
                                <HeatPumpCostsFields />



                            </Grid>
                            <Grid item xs={6} sm={3} md={3}>
                                {values.timeEnergyLostFinalfterN !== undefined && <Chart labels={[`Stored Energy Available`, `Energy lost over ${values.timeShiftHoursN} hours cooling`]} data={[values.timeEnergyLostFinalfterN, (100 - values.timeEnergyLostFinalfterN)]} />}

                                {values.thermalStorageVsHeatPumpFlatRate !== undefined && values.heatPumpCostFlatRate && <Chart labels={['Heat Pump cost/day @ flat rate)', 'Time-shifted direct @ Low Rate']} data={[values.heatPumpCostFlatRate, values.thermalStorageVsHeatPumpFlatRate]} />}
                                <ThermalStorageFields />
                            </Grid>
                        </Grid>

                    </form>
                )}
            />
        </CardContent>
    </Card>
}


export default ThermalForm;