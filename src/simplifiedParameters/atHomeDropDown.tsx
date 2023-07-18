import React, { useEffect, useState } from 'react';

type AtHomeDropDownProps = {
  atHome: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  atHomeSelection: Function;
};

const AtHomeDropDown: React.FC<AtHomeDropDownProps> = ({
  atHome,
  atHomeSelection,
}: AtHomeDropDownProps): JSX.Element => {
  
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (atHome: string): void => {
    atHomeSelection(atHome);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {atHome.map(
          (atHome: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(atHome);
                }}
              >
                {atHome}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default AtHomeDropDown;
