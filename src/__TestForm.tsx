import { Card, CardContent, Grid } from "@mui/material";
import { Form } from "react-final-form";
import Chart from "./Chart";
import initValues from "./util/initValues";
import TestHouseMenu from "../src/Test/TestHouseMenu";
import TestAtHomeMenu from "./Test/TestAtHomeMenu";
import TestRegionMenu from "./Test/TestRegionMenu";
import TestSeasonalWeightings from "./Test/TestSeasonalWeightings";
import ThermalStorageFields from "./ThermalStorageFields";
import TestThermalStorageMenu from "./Test/TestThermalStorageMenu";
import createDecorator from 'final-form-calculate';
import { ISharedState } from "./App";

export interface ITestFormProps {
    visible:boolean,
    setSomeSharedState(some:number):void
    sharedState:ISharedState
}

const TestForm:React.FC<ITestFormProps> = (props) => {

    return <Card style={{ backgroundColor: "#d3d3d3",display:props.visible ? 'block':'none' }}>
        <CardContent>
            <Form <any>
                onSubmit={(values: any) => {
                    console.log("onSubmit", values)
                    //   if (!response.data) return response;
                }}
                initialValues={initValues}

                render={({
                    handleSubmit,
                    values
                }) => {
                    if(values.houseType!=props.sharedState.someState){
                        props.setSomeSharedState(values.houseType)
                    }
                    return <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={8} sm={9} md={9} >
                                <TestHouseMenu />
                                <TestThermalStorageMenu />
                                <TestAtHomeMenu />
                                <TestRegionMenu />
                                <TestSeasonalWeightings />

                            </Grid>
                            <Grid item xs={6} sm={3} md={3}>
                                {values.houseType !== undefined && <Chart labels={[`Thermal storage`, `Heat energy needed per year`]} data={[values.radioBtn, values.houseType]} />}
                                {values.seasonalWeighting !== undefined && <Chart labels={[`Region`, `Seasonal weightings`]} data={[values.regionMenu, values.seasonalWeighting]} />}
                                <ThermalStorageFields />
                            </Grid>
                        </Grid>
                    </form>
                }}
            />
        </CardContent>
    </Card>
}


export default TestForm;


