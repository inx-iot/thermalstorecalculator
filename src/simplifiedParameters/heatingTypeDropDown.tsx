import React, { useEffect, useState } from 'react';

type HeatingTypeDropDownProps = {
  heatingType: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  heatingTypeSelection: Function;
};

const HeatingTypeDropDown: React.FC<HeatingTypeDropDownProps> = ({
    heatingType,
  heatingTypeSelection,
}: HeatingTypeDropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (heatingType: string): void => {
    heatingTypeSelection(heatingType);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {heatingType.map(
          (heatingType: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(heatingType);
                }}
              >
                {heatingType}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default HeatingTypeDropDown;
