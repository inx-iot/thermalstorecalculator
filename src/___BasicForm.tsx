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
import HouseMenu from "./simplifiedParameters/HouseMenu";
import HeatingTypeMenu from "./simplifiedParameters/HeatingTypeMenu";
import AtHomeMenu from "./simplifiedParameters/AtHomeMenu";
import HotWaterTimeMenu from "./simplifiedParameters/HotWaterTimeMenu";
import ThermalStoreMenu from "./simplifiedParameters/ThermalStoreMenu";
import HeatPumpRegionMenu from "./simplifiedParameters/HeatPumpRegionMenu";
import SeasonalWeightingMenu from "./simplifiedParameters/SeasonalWeightingMenu";





const BasicForm = () => {

    return <Card>
        <CardContent>

            <Form <any>
                onSubmit={values => {
                    console.log("onSubmit", values)
                    //   if (!response.data) return response;
                }}
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
                            <Grid item xs={8} sm={9} md={9}>
                                <HouseMenu />
                                <HeatingTypeMenu />
                                {/* {((heatingType === "Central Heating & Hot water" || "Central Heating Only") && (<AtHomeMenu />))} */}
                                <AtHomeMenu />
                                <HotWaterTimeMenu />
                                <ThermalStoreMenu />
                                <HeatPumpRegionMenu />
                                <SeasonalWeightingMenu />
                            </Grid>
                        </Grid>
                    </form>
                )}
            />
        </CardContent>
    </Card>
}


export default BasicForm;
