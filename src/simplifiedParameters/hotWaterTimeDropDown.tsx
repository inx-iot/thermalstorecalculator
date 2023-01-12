import React, { useEffect, useState } from 'react';

type hotWaterTimeDropDownProps = {
  hotWaterTime: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  hotWaterTimeSelection: Function;
};

const HotWaterTimeDropDown: React.FC<hotWaterTimeDropDownProps> = ({
    hotWaterTime,
  hotWaterTimeSelection,
}: hotWaterTimeDropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (hotWaterTime: string): void => {
    hotWaterTimeSelection(hotWaterTime);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {hotWaterTime.map(
          (hotWaterTime: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(hotWaterTime);
                }}
              >
                {hotWaterTime}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default HotWaterTimeDropDown;
