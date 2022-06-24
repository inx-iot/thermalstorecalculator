import { IThermalForm } from "../interfaces/thermal";

export const thermalStorageHighTempRateCos = (values: IThermalForm) => {
    console.log("thermalStorageHighTempRateCos")

    if (values.tankAfterNHoursCooling && values.tankAfterNHoursCooling && values.thermalStoragePotentialWastedExpense)
        return (values.lowRateEnergyCost * values.tankAfterNHoursCooling / 100 + values.thermalStoragePotentialWastedExpense) / values.heatPumpHeatEfficiency

}



export const thermalStoragePotentialWastedExpense = (values: IThermalForm) => {
    console.log("thermalStoragePotentialWastedExpense")

    if (values.timeShiftEnergyLost)
        return values.timeShiftEnergyLost * values.lowRateEnergyCost / 100
}