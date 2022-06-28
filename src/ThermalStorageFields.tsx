import { FormSpy } from "react-final-form";
import { IThermalForm } from "./interfaces/thermal";
import ContainerThing from "./util/container";
import InfoThing from "./util/infoThing";



const ThermalStorageFields = () => {
    return <FormSpy <IThermalForm>
        subscription={{
            values: true,
            dirtySinceLastSubmit: true,
            submitting: true,
        }}
    >
        {({ values, dirtySinceLastSubmit, submitting }) => (<ContainerThing title="Costs Comparisons">

            <InfoThing sm={12} md={12} xs={12} textA="Time shifted" value={values.thermalStorageDailyCost} description={`Time shifted direct heated store @ low rate including losses`} preValue="£" />

            <InfoThing sm={12} md={12} xs={12} textA="vs. direct" textB="%" value={values.thermalStorageVsGridPercent} description={`Cost comparison with instantaneous direct heating @flat rate tarif`} />

            <InfoThing sm={12} md={12} xs={12} textA="vs. HP (flat rate)" textB="%" value={values.thermalStorageVsHeatPumpFlatRate} description={`Cost comparison of on-demand heat pump heating @flat rate tarif`} />

            <InfoThing sm={12} md={12} xs={12} textA="vs. HP (peak rate)" textB="%" value={values.thermalStorageVsHeatPumpPeakRate} description={`Cost comparison of on-demand heat pump heating @peak rate tarif`} />

            <InfoThing sm={12} md={12} xs={12} textA="% store loss" textB="%" value={values.thermalStoragePotentialWastedExpense} description={`Percent of enerfy lost by time shifted heating`} />

            <InfoThing sm={12} md={12} xs={12} textA="Stored HP vs HP" textB="%" value={values.thermalStorageVsHeatPumpFlatRate} description={`Comparison of theoretical time shifted high temperature heat pump vs low temperatue heat pump`} />
        </ContainerThing>)
        }
    </FormSpy >
}


export default ThermalStorageFields;