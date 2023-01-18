import { Card, CardContent, Grid } from "@mui/material";
import * as React from 'react';
import { useState } from "react";
import { Form } from "react-final-form";
import HouseMenu from "./simplifiedParameters/HouseMenu";
import HeatingTypeMenu from "./simplifiedParameters/HeatingTypeMenu";
import AtHomeMenu from "./simplifiedParameters/AtHomeMenu";
import HotWaterTimeMenu from "./simplifiedParameters/HotWaterTimeMenu";
import ThermalStoreMenu from "./simplifiedParameters/ThermalStoreMenu";
import HeatPumpRegionMenu from "./simplifiedParameters/HeatPumpRegionMenu";
import SeasonalWeightingMenu from "./simplifiedParameters/SeasonalWeightingMenu";
import Chart from "./Chart";
import ThermalStorageFields from "./ThermalStorageFields";

const BasicForm = () => {

    const [selectHeatingType, setSelectHeatingType] = useState<string>("");

    const prevSelectHeating = selectHeatingType;

    const renderAtHomeMenu = ((prevSelectHeating !== "Hot water only") && prevSelectHeating !== "");
    const renderHotWaterTimeMenu = ((prevSelectHeating !== "Central heating only") && prevSelectHeating !== "")

    return <Card className="cardSimple">
        <CardContent>

            <Form <any>
                onSubmit={values => {
                    console.log("onSubmit", values)
                    //   if (!response.data) return response;
                }}
                render={({
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                        {/* <DebugButton data={values} /> */}
                        <Grid container spacing={2}>
                            <Grid item xs={8} sm={9} md={9} >
                                <HouseMenu />
                                <HeatingTypeMenu 
                                  selectHeatingType={selectHeatingType}
                                  setSelectHeatingType={setSelectHeatingType}  />
                                {renderAtHomeMenu && <AtHomeMenu/>}
                                {renderHotWaterTimeMenu && <HotWaterTimeMenu  />}
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
