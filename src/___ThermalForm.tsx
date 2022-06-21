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
                    heatDailyEnergyRequired: undefined,
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
                        field: ['timeShiftHoursN', 'tankMass', 'tankSpecificHeatCapacity', 'tankMaxTemperature', 'tankMinTemperature', 'tankEnergyLossCoeficient'], // when the value of foo changes...
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






                            // =B8+(B6-B8)*EXP(-1*B9/(B4*B5)*3600*B18)
                            timeEnergyLossNoHeatAndDraw: (fooValue, allValues: any) => {
                                console.log("timeEnergyLossNoHeatAndDraw")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.tankEnergyLossCoeficient + (values.tankMaxTemperature - values.tankEnergyLossCoeficient) * Math.exp(-1 * values.tankEnergyLossCoeficient / (values.tankSpecificHeatCapacity * values.tankMass) * 3600 * values.timeShiftHoursN)
                                }
                            },




                            //=B6-B21
                            // timeTempDropOverHours: (fooValue, allValues: any) => {
                            //     console.log("timeTempDropOverHours")
                            //     if (allValues) {
                            //         const values: IThermalForm = allValues;
                            //         return values.tankMaxTemperature-values.timeEnergyLossNoHeatAndDraw
                            //     }
                            // },
                        }
                    }, {
                        field: ['tankEnergyJoules'], // when the value of foo changes...
                        updates: {
                            // =B11*1000/3600
                            tankEnergy: (fooValue, allValues: any) => {
                                //    console.log("tankEnergyJoules")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.tankEnergyJoules * 1000 / 3600
                                }
                            },


                            //=B5*B4*(B6-B7)/1000000
                            tankEnergyJoules: (fooValue, allValues: any) => {
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.tankMass * values.tankSpecificHeatCapacity * (values.tankMaxTemperature - values.tankMinTemperature) / 1000000
                                }
                            }
                        }
                    }),
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