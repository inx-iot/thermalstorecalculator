import React, { useEffect, useState } from 'react';

type ThermalStoreDropDownProps = {
  thermalStore: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  thermalStoreSelection: Function;
};

const ThermalStoreDropDown: React.FC<ThermalStoreDropDownProps> = ({
    thermalStore,
  thermalStoreSelection,
}: ThermalStoreDropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (house: string): void => {
    thermalStoreSelection(house);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {thermalStore.map(
          (house: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(house);
                }}
              >
                {house}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default ThermalStoreDropDown;
