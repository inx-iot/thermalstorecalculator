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
import DebugButton from "./util/DebugButton";



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
        tankMinTemperature: 35,
        tankAmbientTemperature: 20,
        tankEnergyLossCoeficient: 3,
        tankEnergyJoules: 103.20,
        tankEnergy: 28.67,
        tankAfterNHoursCooling: 26.06,
        tankEnergyAmbient: 137.61,

        heatEnergyDwellingYear: 6000,
        heatUsedDaysPerYear: 230,
        heatDailyEnergyRequired: 26.09,
        heatDailyEnergyRequiredOverride: null,
        heatProportionOfCentralHeating: 100,

        timeShiftHoursN: 12,
        timeShiftEnergyLost: 2.61,
        timeEnergyLossMaxTemp: 2.7,
        timeEnergyLossNoHeatAndDraw: 75.91,
        timeTempDropOverHours: 4.09,
        timeEnergyLostFinalfterN: 9.1,
        timeEnergyLostInNMaxTemp: 9.4,


        instantaneousHeatingCostFlatRate: 3.91,
        instantaneousHeatingCostPeakRate: 9.13,

        heatPumpHeatEfficiency: 200,
        heatPumpCostFlatRate: 1.96,
        heatPumpCostPeakRate: 4.57,

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
                            field: ['heatPumpHeatEfficiency', 'heatEnergyDwellingYear', 'highRateEnergyCost', 'tankAmbientTemperature', 'standardRateEnergyCost', 'lowRateEnergyCost', 'tankMassOverride', 'heatDailyEnergyRequiredOverride', 'timeShiftHoursN', 'tankMass', 'tankSpecificHeatCapacity', 'tankMaxTemperature', 'tankMinTemperature', 'tankEnergyLossCoeficient'], // when the value of foo changes...

                            updates: (value, name, allValues: any) => {
                                console.log("update")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    const tankMass = (values.tankMassOverride ? values.tankMassOverride : values.tankMass)
                                    const heatDailyEnergyRequired = (values.heatDailyEnergyRequiredOverride ? values.heatDailyEnergyRequiredOverride : values.heatDailyEnergyRequired)

                                    values.tankEnergyJoules = tankMass * values.tankSpecificHeatCapacity * (values.tankMaxTemperature - values.tankMinTemperature) / 1000000
                                    values.tankEnergyAmbient = tankMass * values.tankSpecificHeatCapacity * (values.tankMaxTemperature - values.tankEnergyLossCoeficient) / 1000000
                                    values.tankEnergy = values.tankEnergyJoules * 1000 / 3600
                                    values.tankAfterNHoursCooling = values.tankEnergyJoules * 1000 / 3600 - values.timeShiftHoursN
                                    values.timeEnergyLossNoHeatAndDraw = values.tankEnergyLossCoeficient + (values.tankMaxTemperature - values.tankEnergyLossCoeficient) * Math.exp(-1 * values.tankEnergyLossCoeficient / (values.tankSpecificHeatCapacity * tankMass) * 3600 * values.timeShiftHoursN)
                                    values.heatProportionOfCentralHeating = values.timeEnergyLossNoHeatAndDraw / (heatDailyEnergyRequired + 0.0001)
                                    values.timeTempDropOverHours = values.tankMaxTemperature - values.timeEnergyLossNoHeatAndDraw
                                    values.timeShiftEnergyLost = (values.timeEnergyLossNoHeatAndDraw * values.tankSpecificHeatCapacity * tankMass / 1000) / 3600
                                    values.timeEnergyLostFinalfterN = (values.timeEnergyLossNoHeatAndDraw * values.tankSpecificHeatCapacity * tankMass / 1000) / 3600
                                    values.timeEnergyLossMaxTemp = values.tankEnergyLossCoeficient * (values.tankMaxTemperature - values.tankAmbientTemperature) * values.timeShiftHoursN / 1000
                                    values.timeEnergyLostInNMaxTemp = values.timeEnergyLossMaxTemp / values.tankEnergy
                                    values.instantaneousHeatingCostFlatRate = heatDailyEnergyRequired * values.standardRateEnergyCost / 100
                                    values.instantaneousHeatingCostPeakRate = heatDailyEnergyRequired * values.highRateEnergyCost / 100
                                    values.heatPumpCostFlatRate = values.instantaneousHeatingCostFlatRate * values.heatPumpHeatEfficiency;
                                    values.heatPumpCostPeakRate = values.instantaneousHeatingCostPeakRate * values.heatPumpHeatEfficiency;
                                    values.thermalStorageDailyCost = values.tankEnergy * values.standardRateEnergyCost / 100;
                                    values.thermalStorageVsGridPercent = values.thermalStorageDailyCost * values.instantaneousHeatingCostFlatRate;
                                    values.thermalStorageVsHeatPumpFlatRate = values.thermalStorageDailyCost * values.heatPumpCostFlatRate;
                                    values.thermalStorageVsHeatPumpPeakRate = values.thermalStorageDailyCost * values.heatPumpCostPeakRate;
                                    values.thermalStoragePotentialWastedExpense = values.timeShiftEnergyLost * values.lowRateEnergyCost / 100;
                                    values.thermalStorageHighTempRateCost = (values.lowRateEnergyCost * values.tankAfterNHoursCooling / 100 + values.thermalStoragePotentialWastedExpense) / values.heatPumpHeatEfficiency

                                    return {
                                        "tankEnergyJoules": values.tankEnergyJoules,
                                        "tankEnergyAmbient": values.tankEnergyAmbient,
                                        "tankEnergy": values.tankEnergy,
                                        "tankAfterNHoursCooling": values.tankAfterNHoursCooling,
                                        "timeEnergyLossNoHeatAndDraw": values.timeEnergyLossNoHeatAndDraw,
                                        "heatProportionOfCentralHeating": values.heatProportionOfCentralHeating,
                                        "timeTempDropOverHours": values.timeTempDropOverHours,
                                        "timeShiftEnergyLost": values.timeShiftEnergyLost,
                                        "timeEnergyLostFinalfterN": values.timeEnergyLostFinalfterN,
                                        "timeEnergyLossMaxTemp": values.timeEnergyLossMaxTemp,
                                        "timeEnergyLostInNMaxTemp": values.timeEnergyLostInNMaxTemp,
                                        "instantaneousHeatingCostFlatRate": values.instantaneousHeatingCostFlatRate,
                                        "instantaneousHeatingCostPeakRate": values.instantaneousHeatingCostPeakRate,
                                        "heatPumpCostFlatRate": values.heatPumpCostFlatRate,
                                        "heatPumpCostPeakRate": values.heatPumpCostPeakRate,
                                        "thermalStorageDailyCost": values.thermalStorageDailyCost,
                                        "thermalStorageVsGridPercent": values.thermalStorageVsGridPercent,
                                        "thermalStorageVsHeatPumpFlatRate": values.thermalStorageVsHeatPumpFlatRate,
                                        "thermalStorageVsHeatPumpPeakRate": values.thermalStorageVsHeatPumpPeakRate,
                                        "thermalStoragePotentialWastedExpense": values.thermalStoragePotentialWastedExpense,
                                        "thermalStorageHighTempRateCost": values.thermalStorageHighTempRateCost,

                                    };
                                } else {
                                    return {}
                                }



                            }

                            // updates: {


                            //     //=B5*B4*(B6-B7)/1000000
                            //     tankEnergyJoules: (fooValue, allValues: any) => {
                            //         console.log("tankEnergyJoules")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //            

                            //             const cal = tankMass * values.tankSpecificHeatCapacity * (values.tankMaxTemperature - values.tankMinTemperature) / 1000000
                            //             console.log("?", cal)
                            //             return cal;
                            //         }
                            //     },

                            //     // .=B5*B4*(B6-B8)/1000000
                            //     tankEnergyAmbient: (fooValue, allValues: any) => {
                            //         console.log("tankEnergyAmbient")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             const tankMass = (values.tankMassOverride ? values.tankMassOverride : values.tankMass)
                            //             return tankMass * values.tankSpecificHeatCapacity * (values.tankMaxTemperature - values.tankEnergyLossCoeficient) / 1000000
                            //         }
                            //     },

                            //     // =B11*1000/3600
                            //     tankEnergy: (fooValue, allValues: any) => {
                            //         console.log("tankEnergy")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             if (values.tankEnergyJoules)
                            //                 return values.tankEnergyJoules * 1000 / 3600
                            //         }
                            //     },

                            //     // =B11*1000/3600-B19
                            //     tankAfterNHoursCooling: (fooValue, allValues: any) => {
                            //         console.log("tankAfterNHoursCooling")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             if (values.tankEnergyJoules)
                            //                 return values.tankEnergyJoules * 1000 / 3600 - values.timeShiftHoursN
                            //         }
                            //     },


                            //     // This one will cause recursion - can leave it out for now.
                            //     // I exxpect we need a function that is triggered by changes to the Daily heat required that does the following:
                            //     // (1) if an tank override value is set it warns the user it will be over-written.
                            //     // (2) runs a for loop 50 times that sets all the variables using the functions here.
                            //     // (3) All done! 
                            //     // =if(D16>0,D16,E16)
                            //     // heatDailyEnergyRequired: (fooValue, allValues: any) => {
                            //     //     console.log("heatDailyEnergyRequired")
                            //     //     if (allValues) {
                            //     //         const values: IThermalForm = allValues;
                            //     //         return values.tankEnergyJoules * 1000 / 3600 - values.timeShiftHoursN
                            //     //     }
                            //     // },

                            //     // =B13/(B16+0.0001)
                            //     heatProportionOfCentralHeating: (fooValue, allValues: any) => {
                            //         console.log("heatProportionOfCentralHeating")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;


                            //             const heatDailyEnergyRequired = (values.heatDailyEnergyRequiredOverride ? values.heatDailyEnergyRequiredOverride : values.heatDailyEnergyRequired)

                            //             if (values.timeEnergyLossNoHeatAndDraw)
                            //                 return values.timeEnergyLossNoHeatAndDraw / (heatDailyEnergyRequired + 0.0001)
                            //         }
                            //     },

                            //     // =B8+(B6-B8)*EXP(-1*B9/(B4*B5)*3600*B18)
                            //     timeEnergyLossNoHeatAndDraw: (fooValue, allValues: any) => {
                            //         console.log("timeEnergyLossNoHeatAndDraw")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             const tankMass = (values.tankMassOverride ? values.tankMassOverride : values.tankMass)
                            //             const ddd = values.tankEnergyLossCoeficient + (values.tankMaxTemperature - values.tankEnergyLossCoeficient) * Math.exp(-1 * values.tankEnergyLossCoeficient / (values.tankSpecificHeatCapacity * tankMass) * 3600 * values.timeShiftHoursN)
                            //             return ddd;
                            //         }
                            //     },




                            //     //=B6-B21
                            //     timeTempDropOverHours: (fooValue, allValues: any) => {
                            //         console.log("timeTempDropOverHours")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             if (values.timeEnergyLossNoHeatAndDraw) {
                            //                 const ddd = values.tankMaxTemperature - values.timeEnergyLossNoHeatAndDraw
                            //                 return ddd;
                            //             }
                            //         }
                            //     },


                            //     //=(B22*B4*B5/1000)/3600
                            //     timeShiftEnergyLost: (fooValue, allValues: any) => {
                            //         console.log("timeShiftEnergyLost")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             const tankMass = (values.tankMassOverride ? values.tankMassOverride : values.tankMass)
                            //             if (values.timeEnergyLossNoHeatAndDraw)

                            //                 return (values.timeEnergyLossNoHeatAndDraw * values.tankSpecificHeatCapacity * tankMass / 1000) / 3600
                            //         }
                            //     },


                            //     //=B19/B12
                            //     timeEnergyLostFinalfterN: (fooValue, allValues: any) => {
                            //         console.log("timeEnergyLostFinalfterN")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             if (values.timeShiftEnergyLost && values.tankEnergy)
                            //                 return values.timeShiftEnergyLost / values.tankEnergy
                            //         }
                            //     },
                            //     //=B9*(B6-B8)*B18/1000
                            //     timeEnergyLossMaxTemp: (fooValue, allValues: any) => {
                            //         console.log("timeEnergyLossMaxTemp")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             return values.tankEnergyLossCoeficient * (values.tankMaxTemperature - values.tankAmbientTemperature) * values.timeShiftHoursN / 1000
                            //         }
                            //     },
                            //     //=B20/B12
                            //     timeEnergyLostInNMaxTemp: (fooValue, allValues: any) => {
                            //         console.log("timeEnergyLostInNMaxTemp")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             if (values.timeEnergyLossMaxTemp && values.tankEnergy)
                            //                 return values.timeEnergyLossMaxTemp / values.tankEnergy
                            //         }
                            //     },

                            //     //=B16*B1/100
                            //     instantaneousHeatingCostFlatRate: (fooValue, allValues: any) => {
                            //         console.log("instantaneousHeatingCostFlatRate")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             const heatDailyEnergyRequired = (values.heatDailyEnergyRequiredOverride ? values.heatDailyEnergyRequiredOverride : values.heatDailyEnergyRequired)

                            //             return heatDailyEnergyRequired * values.standardRateEnergyCost / 100
                            //         }
                            //     },


                            //     //=B16*B3/100
                            //     instantaneousHeatingCostPeakRate: (fooValue, allValues: any) => {
                            //         console.log("instantaneousHeatingCostPeakRate")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             const heatDailyEnergyRequired = (values.heatDailyEnergyRequiredOverride ? values.heatDailyEnergyRequiredOverride : values.heatDailyEnergyRequired)

                            //             return heatDailyEnergyRequired * values.highRateEnergyCost / 100
                            //         }
                            //     },
                            //     //=B23/B25
                            //     heatPumpCostFlatRate: (fooValue, allValues: any) => {
                            //         console.log("heatPumpCostFlatRate")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             if (values.instantaneousHeatingCostFlatRate)
                            //                 return values.instantaneousHeatingCostFlatRate * values.heatPumpHeatEfficiency;
                            //         }
                            //     },
                            //     // =B24/B25
                            //     heatPumpCostPeakRate: (fooValue, allValues: any) => {
                            //         console.log("heatPumpCostPeakRate")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             if (values.instantaneousHeatingCostPeakRate)
                            //                 return values.instantaneousHeatingCostPeakRate * values.heatPumpHeatEfficiency;
                            //         }
                            //     },



                            //     //=B12*B2/100
                            //     thermalStorageDailyCost: (fooValue, allValues: any) => {
                            //         console.log("thermalStorageDailyCost")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             if (values.tankEnergy)
                            //                 return values.tankEnergy * values.standardRateEnergyCost / 100;
                            //         }
                            //     },

                            //     //=B29/B23
                            //     thermalStorageVsGridPercent: (fooValue, allValues: any) => {
                            //         console.log("thermalStorageVsGridPercent")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             if (values.thermalStorageDailyCost && values.instantaneousHeatingCostFlatRate)
                            //                 return values.thermalStorageDailyCost * values.instantaneousHeatingCostFlatRate
                            //         }
                            //     },

                            //     //=B29/B26
                            //     thermalStorageVsHeatPumpFlatRate: (fooValue, allValues: any) => {
                            //         console.log("thermalStorageVsHeatPumpFlatRate")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             if (values.thermalStorageDailyCost && values.heatPumpCostFlatRate)
                            //                 return values.thermalStorageDailyCost * values.heatPumpCostFlatRate
                            //         }
                            //     },
                            //     //=B29/B27
                            //     thermalStorageVsHeatPumpPeakRate: (fooValue, allValues: any) => {
                            //         console.log("thermalStorageVsHeatPumpPeakRate")
                            //         if (allValues) {

                            //             const values: IThermalForm = allValues;
                            //             if (values.thermalStorageDailyCost && values.heatPumpCostPeakRate)
                            //                 return values.thermalStorageDailyCost * values.heatPumpCostPeakRate
                            //         }
                            //     },


                            //     //=B19*B2/100 
                            //     thermalStoragePotentialWastedExpense: (fooValue, allValues: any) => {
                            //         console.log("thermalStoragePotentialWastedExpense")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             if (values.timeShiftEnergyLost)
                            //                 return values.timeShiftEnergyLost * values.lowRateEnergyCost / 100
                            //         }
                            //     },




                            //     //=(B2*B13/100+B33)/B25
                            //     thermalStorageHighTempRateCost: (fooValue, allValues: any) => {
                            //         console.log("thermalStorageHighTempRateCost")
                            //         if (allValues) {
                            //             const values: IThermalForm = allValues;
                            //             if (values.tankAfterNHoursCooling && values.tankAfterNHoursCooling && values.thermalStoragePotentialWastedExpense)
                            //                 return (values.lowRateEnergyCost * values.tankAfterNHoursCooling / 100 + values.thermalStoragePotentialWastedExpense) / values.heatPumpHeatEfficiency
                            //         }
                            //     },


                            // }
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
                        <DebugButton data={values} />

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={8} md={8}>

                                <TimeFormFields />
                                <HeatDemandFields />

                                <TariffFormFields />


                                <ThermalFormFields />
                                <InstantaneousCostsFields />
                                <HeatPumpCostsFields />

                                <ThermalStorageFields />

                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                {values.timeEnergyLostFinalfterN !== undefined && <Chart labels={[`Useful Tank Energy after ${values.timeShiftHoursN}  hours cooling`, `Energy lost over  ${values.timeShiftHoursN}  hours cooling during time-shift`]} data={[values.timeEnergyLostFinalfterN, (100 - values.timeEnergyLostFinalfterN)]} />}

                                {values.thermalStorageVsHeatPumpFlatRate !== undefined && values.heatPumpCostFlatRate && <Chart labels={['Heat Pump cost/day @ flat rate)', 'Daily cost @ ToU Low Rate (inc. loss)']} data={[values.heatPumpCostFlatRate, values.thermalStorageVsHeatPumpFlatRate]} />}
                            </Grid>
                        </Grid>

                    </form>
                )}
            />
        </CardContent>
    </Card>
}


export default ThermalForm;