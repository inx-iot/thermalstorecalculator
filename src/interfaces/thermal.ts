
export interface IThermalForm {
    standardRateEnergyCost: number;
    lowRateEnergyCost: number;
    highRateEnergyCost: number;

    tankSpecificHeatCapacity: number;
    tankMass: number;
    tankMassOverride?: number | null;
    tankMaxTemperature: number;
    tankMinTemperature: number;
    tankAmbientTemperature: number;
    tankEnergyLossCoeficient: number;
    tankEnergyAmbient?: number;
    tankEnergyJoules?: number;
    tankEnergy?: number;
    tankAfterNHoursCooling?: number;


    heatEnergyDwellingYear: number;
    heatUsedDaysPerYear: number;
    heatDailyEnergyRequired: number;
    heatDailyEnergyRequiredOverride?: number | null;
    heatProportionOfCentralHeating?: number;

    timeShiftHoursN: number;
    timeShiftEnergyLost?: number;
    timeEnergyLossMaxTemp?: number;
    timeTemperatureAfterNCoolingNoHeatAndDraw?: number;
    timeTempDropOverHours?: number;
    timeEnergyLostFinalfterN?: number;
    timeEnergyLostInNMaxTemp?: number;



    instantaneousHeatingCostFlatRate?: number;
    instantaneousHeatingCostPeakRate?: number;

    heatPumpHeatEfficiency: number;
    heatPumpCostFlatRate?: number;
    heatPumpCostPeakRate?: number;

    thermalStorageDailyCost?: number;
    thermalStorageVsGridPercent?: number;
    thermalStorageVsHeatPumpFlatRate?: number;
    thermalStorageVsHeatPumpPeakRate?: number;
    thermalStoragePotentialWastedExpense?: number;
    thermalStorageHighTempRateCost?: number;
}

