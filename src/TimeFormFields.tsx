import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import ContainerThing from "./util/container";
import InfoThing from "./util/infoThing";
import NumberField from "./util/numberField";



const TimeFormFields = () => {
    return <FormSpy <IThermalForm>
        subscription={{
            values: true,
            dirtySinceLastSubmit: true,
            submitting: true,
        }}
    >
        {({ values, dirtySinceLastSubmit, submitting }) => (<ContainerThing title="Energy Time Shifting Requirements">

            <NumberField md={5} xs={6} sm={6} name="timeShiftHoursN" label={`Time Shift`} unitChar="hours" type="int" max={10000} min={0}
                longText="This is the duration of the time shifted energy needed. It is usually the interval between peak tariff start and the time heat energy is required" />

            <InfoThing md={7} xs={6} sm={6} textA={`Energy lost (accurate)`} textB="kWh" value={values.timeShiftEnergyLost} description={`over ${values.timeShiftHoursN} hours cooling during time-shift`} />

            <InfoThing md={6} xs={6} sm={6} textA={`Final temperature`} textB="&#8451;" value={values.timeTemperatureAfterNCoolingNoHeatAndDraw} description={`temperature expected after cooling for ${values.timeShiftHoursN} hours of no heat and no draw`} />

            <InfoThing md={6} xs={6} sm={6} textA={`Temperature drop`} textB="&#8451;" value={values.timeTempDropOverHours} description={`after ${values.timeShiftHoursN}  hours temperature expected after cooling for ${values.timeShiftHoursN} hours`} />
        </ContainerThing>)
        }
    </FormSpy >
}

//<InfoThing textA={`Energy loss (max)`} textB="kWh" value={values.timeEnergyLossMaxTemp} description={`Loss not including temperature droop from maximum temperature`} />

export default TimeFormFields;