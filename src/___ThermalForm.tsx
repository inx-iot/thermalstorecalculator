import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Card, CardContent, Grid } from "@mui/material";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
    AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
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



const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



const ThermalForm = () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            if (panel === 'panel1') {
                setPanel1(!panel1)
            } else if (panel === 'panel3') {
                setPanel3(!panel3)
            } else if (panel === 'panel4') {
                setPanel4(!panel4)
            } else {
                setExpanded(newExpanded ? panel : false);
            }

        };

    const [panel4, setPanel4] = React.useState(true);
    const [panel3, setPanel3] = React.useState(true);
    const [panel1, setPanel1] = React.useState(true);

    return <Card>
        <CardContent>

            <Form <any>
                onSubmit={values => {
                    console.log("onSubmit", values)
                    //   if (!response.data) return response;
                }}

                initialValues={{
                    standardRateEnergyCost: 15,
                    lowRateEnergyCost: 8,
                    highRateEnergyCost: 20,

                    tankSpecificHeatCapacity: 4200, // asssume water 
                    tankMass: 400, // this is one of the larger tanks
                    tankMassOverride: undefined,
                    tankMaxTemperature: 90,
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

                    timeShiftHoursN: 12,
                    timeShiftEnergyLost: undefined,
                    timeEnergyLossMaxTemp: undefined,
                    timeEnergyLossNoHeatAndDraw: undefined,
                    timeTempDropOverHours: undefined,

                    instantaneousHeatingCostFlatRate: undefined,
                    instantaneousHeatingCostPeakRate: undefined,

                    heatPumpHeatEfficiency: 250,
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


                            // This one will cause recursion - can leave it out for now.
                            // I exxpect we need a function that is triggered by changes to the Daily heat required that does the following:
                            // (1) if an tank override value is set it warns the user it will be over-written.
                            // (2) runs a for loop 50 times that sets all the variables using the functions here.
                            // (3) All done! 
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


                            //=B19/B12
                            timeEnergyLostFinalfterN: (fooValue, allValues: any) => {
                                console.log("timeEnergyLostFinalfterN")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.timeShiftEnergyLost / values.tankEnergy
                                }
                            },

                            //=B20/B12
                            timeEnergyLostInNMaxTemp: (fooValue, allValues: any) => {
                                console.log("timeEnergyLostInNMaxTemp")
                                if (allValues) {
                                    const values: IThermalForm = allValues;
                                    return values.timeEnergyLossMaxTemp / values.tankEnergy
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

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={8} md={8}>
                                <Accordion expanded={panel4} onChange={handleChange('panel4')}>
                                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                                        <Typography>Energy Time Shifting Requirements</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <TimeFormFields />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={panel3} onChange={handleChange('panel3')}>
                                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                        <Typography>Storage Capacity Calculator</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <HeatDemandFields />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={panel1} onChange={handleChange('panel1')}>
                                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                        <Typography>Tariff Costs
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <TariffFormFields />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                        <Typography>Thermal Store Paramaters</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ThermalFormFields />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                        <Typography>Instantaneous Heating Cost Calculator</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <InstantaneousCostsFields />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                    <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                                        <Typography>Heat Pump Cost Calculator</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <HeatPumpCostsFields />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                    <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                                        <Typography>Costs Comparisons</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>

                                        <ThermalStorageFields />
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                {values.timeEnergyLostFinalfterN !== undefined && <Chart labels={['Useful Tank Energy after N hours cooling', 'Energy lost over N hours cooling during time-shift']} data={[values.timeEnergyLostFinalfterN, (100 - values.timeEnergyLostFinalfterN)]} />}

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