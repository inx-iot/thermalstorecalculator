import React, { useEffect, useState } from 'react';

type HouseTypeDropDownProps = {
  houses: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  houseSelection: Function;
};

const HouseTypeDropDown: React.FC<HouseTypeDropDownProps> = ({
    houses,
  houseSelection,
}: HouseTypeDropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (house: string): void => {
    houseSelection(house);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {houses.map(
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

export default HouseTypeDropDown;
