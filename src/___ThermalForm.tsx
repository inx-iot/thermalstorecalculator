import { Card, CardContent } from "@mui/material";
import createDecorator from 'final-form-calculate';
import { Form } from "react-final-form";
import HeatDemandFields from "./HeatDemandFields";
import HeatPumpCostsFields from "./HeatPumpCostsFields";
import InstantaneousCostsFields from "./InstantaneousCostsFields";
import { IThermalForm } from "./interfaces/thermal";
import TariffFormFields from "./TarifFormFields";
import ThermalFormFields from "./ThermalFormFields";
import ThermalStorageFields from "./ThermalStorageFields";
import TimeFormFields from "./TimeFormFields";
import DebugButton from "./util/DebugButton";


const ThermalForm = () => {


    return <Card>
        <CardContent>

            <Form
                onSubmit={values => {
                    console.log("onSubmit", values)
                    //   if (!response.data) return response;
                }}

                initialValues={{
                    standardRateEnergyCost: 15,
                    lowRateEnergyCost: 8,
                    highRateEnergyCost: 20,

                    tankSpecificHeatCapacity: 4200,
                    tankMass: 546.06,
                    tankMassOverride: undefined,
                    tankMaxTemperature: 80,
                    tankMinTemperature: 35,
                    tankAmbientTemperature: 20,
                    tankEnergyLossCoeficient: 3,
                    tankEnergyJoules: undefined,
                    tankEnergy: undefined,
                    tankAfterNHoursCooling: undefined,


                    heatEnergyDwellingYear: 6000,
                    heatUsedDaysPerYear: 230,
                    heatDailyEnergyRequired: 26.09,
                    heatDailyEnergyRequiredOverride: undefined,
                    heatProportionOfCentralHeating: undefined,

                    timeShiftHoursN: 15,
                    timeShiftEnergyLost: undefined,
                    timeEnergyLossMaxTemp: undefined,
                    timeEnergyLossNoHeatAndDraw: undefined,
                    timeTempDropOverHours: undefined,

                    instantaneousHeatingCostFlatRate: undefined,
                    instantaneousHeatingCostPeakRate: undefined,

                    heatPumpHeatEfficiency: 200,
                    heatPumpCostFlatRate: undefined,
                    heatPumpCostPeakRate: undefined,

                    thermalStorageDailyCost: undefined,
                    thermalStorageVsGridPercent: undefined,
                    thermalStorageVsHeatPumpFlatRate: undefined,
                    thermalStorageVsHeatPumpPeakRate: undefined,
                    thermalStoragePotentialWastedExpense: undefined,
                    thermalStorageHighTempRateCost: undefined,
                }}
                decorators={[
                    createDecorator({
                        field: ['heatPumpHeatEfficiency', 'standardRateEnergyCost', 'lowRateEnergyCost', '', 'timeShiftHoursN', 'tankMass', 'tankSpecificHeatCapacity', 'tankMaxTemperature', 'tankMinTemperature', 'tankEnergyLossCoeficient'], // when the value of foo changes...
                        updates: {
                            // .=B5*B4*(B6-B8)/1000000
                            tankEnergyAmbient: (fooValue, allValues: any) => {
                                console.log("tankEnergyAmbient")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.tankMass * values.tankSpecificHeatCapacity * (values.tankMaxTemperature - values.tankEnergyLossCoeficient) / 1000000
                                }
                            },


                            //=B5*B4*(B6-B7)/1000000
                            tankEnergyJoules: (fooValue, allValues: any) => {
                                console.log("tankEnergyJoules")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.tankMass * values.tankSpecificHeatCapacity * (values.tankMaxTemperature - values.tankMinTemperature) / 1000000
                                }
                            },


                            // =B11*1000/3600
                            tankEnergy: (fooValue, allValues: any) => {
                                console.log("tankEnergy")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.tankEnergyJoules * 1000 / 3600
                                }
                            },

                            // =B11*1000/3600-B19
                            tankAfterNHoursCooling: (fooValue, allValues: any) => {
                                console.log("tankAfterNHoursCooling")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.tankEnergyJoules * 1000 / 3600 - values.timeShiftHoursN
                                }
                            },


                            // =if(D16>0,D16,E16)
                            // heatDailyEnergyRequired: (fooValue, allValues: any) => {
                            //     console.log("heatDailyEnergyRequired")
                            //     if (allValues) {
                            //         const values: IThermalForm = allValues;
                            //         return values.tankEnergyJoules * 1000 / 3600 - values.timeShiftHoursN
                            //     }
                            // },

                            // =B13/(B16+0.0001)
                            heatProportionOfCentralHeating: (fooValue, allValues: any) => {
                                console.log("heatProportionOfCentralHeating")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.timeEnergyLossNoHeatAndDraw / (values.heatDailyEnergyRequired + 0.0001)
                                }
                            },

                            // =B8+(B6-B8)*EXP(-1*B9/(B4*B5)*3600*B18)
                            timeEnergyLossNoHeatAndDraw: (fooValue, allValues: any) => {
                                console.log("timeEnergyLossNoHeatAndDraw")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    const ddd = values.tankEnergyLossCoeficient + (values.tankMaxTemperature - values.tankEnergyLossCoeficient) * Math.exp(-1 * values.tankEnergyLossCoeficient / (values.tankSpecificHeatCapacity * values.tankMass) * 3600 * values.timeShiftHoursN)
                                    return ddd;
                                }
                            },




                            //=B6-B21
                            timeTempDropOverHours: (fooValue, allValues: any) => {
                                console.log("timeTempDropOverHours")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    const ddd = values.tankMaxTemperature - values.timeEnergyLossNoHeatAndDraw
                                    return ddd;
                                }
                            },


                            //=(B22*B4*B5/1000)/3600
                            timeShiftEnergyLost: (fooValue, allValues: any) => {
                                console.log("timeShiftEnergyLost")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return (values.timeEnergyLossNoHeatAndDraw * values.tankSpecificHeatCapacity * values.tankMass / 1000) / 3600
                                }
                            },

                            //=B16*B1/100
                            instantaneousHeatingCostFlatRate: (fooValue, allValues: any) => {
                                console.log("instantaneousHeatingCostFlatRate")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.heatDailyEnergyRequired * values.standardRateEnergyCost / 100
                                }
                            },


                            //=B16*B3/100
                            instantaneousHeatingCostPeakRate: (fooValue, allValues: any) => {
                                console.log("instantaneousHeatingCostPeakRate")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.heatDailyEnergyRequired * values.highRateEnergyCost / 100
                                }
                            },
                            //=B23/B25
                            heatPumpCostFlatRate: (fooValue, allValues: any) => {
                                console.log("heatPumpCostFlatRate")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.instantaneousHeatingCostFlatRate * values.heatPumpHeatEfficiency;
                                }
                            },
                            // =B24/B25
                            heatPumpCostPeakRate: (fooValue, allValues: any) => {
                                console.log("heatPumpCostPeakRate")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.instantaneousHeatingCostPeakRate * values.heatPumpHeatEfficiency;
                                }
                            },



                            //=B12*B2/100
                            thermalStorageDailyCost: (fooValue, allValues: any) => {
                                console.log("thermalStorageDailyCost")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.tankEnergy * values.standardRateEnergyCost / 100;
                                }
                            },

                            //=B29/B23
                            thermalStorageVsGridPercent: (fooValue, allValues: any) => {
                                console.log("thermalStorageVsGridPercent")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.thermalStorageDailyCost * values.instantaneousHeatingCostFlatRate
                                }
                            },

                            //=B29/B26
                            thermalStorageVsHeatPumpFlatRate: (fooValue, allValues: any) => {
                                console.log("thermalStorageVsHeatPumpFlatRate")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.thermalStorageDailyCost * values.heatPumpCostFlatRate
                                }
                            },
                            //=B29/B27
                            thermalStorageVsHeatPumpPeakRate: (fooValue, allValues: any) => {
                                console.log("thermalStorageVsHeatPumpPeakRate")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.thermalStorageDailyCost * values.heatPumpCostPeakRate
                                }
                            },


                            //=B19*B2/100 
                            thermalStoragePotentialWastedExpense: (fooValue, allValues: any) => {
                                console.log("thermalStoragePotentialWastedExpense")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.timeShiftEnergyLost * values.lowRateEnergyCost / 100
                                }
                            },




                            //=(B2*B13/100+B33)/B25
                            thermalStorageHighTempRateCost: (fooValue, allValues: any) => {
                                console.log("thermalStoragePotentialWastedExpense")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return (values.lowRateEnergyCost * values.tankAfterNHoursCooling / 100 + values.thermalStoragePotentialWastedExpense) / values.heatPumpHeatEfficiency
                                }
                            },


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
                        <DebugButton data={values} />

                        <TariffFormFields />
                        <ThermalFormFields />
                        <HeatDemandFields />
                        <TimeFormFields />
                        <InstantaneousCostsFields />
                        <HeatPumpCostsFields />
                        <ThermalStorageFields />
                        {/* <Grid container spacing={3} justifyContent="center">
                            <Grid item xs={12}>
                            </Grid>
                        </Grid> */}
                        {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                    </form>
                )}
            />
        </CardContent>
    </Card>
}


export default ThermalForm;