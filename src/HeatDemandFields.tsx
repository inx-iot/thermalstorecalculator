import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from "@mui/material";
import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import ContainerThing from './util/container';
import InfoThing from "./util/infoThing";
import NumberField from "./util/numberField";
const HeatDemandFields = () => {

    return <FormSpy <IThermalForm>
        subscription={{
            values: true,
            dirtySinceLastSubmit: true,
            submitting: true,
        }}
    >
        {({ values, form }) => (<ContainerThing title="Storage Capacity Calculator">
            <NumberField md={4} xs={4} sm={4} name="heatEnergyDwellingYear" label="Heating Energy /dwelling/year" longText="" unitChar="kWh/dw" type="int" />
            {/* <NumberField name="heatUsedDaysPerYear" label="Heating Energy Days used Per year" longText="" helpText="days" type="int" /> */}

            <InfoThing md={4} xs={4} sm={4} textA="Daily energy required" textB="kWh" value={(values.heatDailyEnergyRequiredOverride ? values.heatDailyEnergyRequiredOverride : values.heatDailyEnergyRequired)}>
                <NumberField sm={12} md={12} name="heatDailyEnergyRequiredOverride" label="Daily Energy Required Override" longText="" unitChar="kWh" type="int">
                    <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} onClick={() => {
                        form.change('heatDailyEnergyRequiredOverride', null)
                    }}>
                        <CancelIcon />
                    </Button>
                </NumberField>

            </InfoThing>

            <InfoThing md={4} xs={4} sm={4} textA="Heating requirement met:" textB="%" value={values.heatProportionOfCentralHeating} />



        </ContainerThing>)
        }
    </FormSpy >

}


export default HeatDemandFields;