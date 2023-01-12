import React, { useEffect, useState } from 'react';

type heatPumpRegionDropDownProps = {
  heatPumpRegion: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  heatPumpRegionSelection: Function;
};

const HeatPumpRegionDropDown: React.FC<heatPumpRegionDropDownProps> = ({
    heatPumpRegion,
  heatPumpRegionSelection,
}: heatPumpRegionDropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (heatPumpRegion: string): void => {
    heatPumpRegionSelection(heatPumpRegion);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {heatPumpRegion.map(
          (heatPumpRegion: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(heatPumpRegion);
                }}
              >
                {heatPumpRegion}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default HeatPumpRegionDropDown;
