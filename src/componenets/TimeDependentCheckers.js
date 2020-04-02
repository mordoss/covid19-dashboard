import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const TimeDependentCheckers = ({ checkersArray, setCheck }) => {
  const selectableProperties = [
    ['temperature', 'high', 'Visoka temperatura'],
    ['sex', 'males', 'Muskarci'],
    ['diseases', 'stroke', 'Šlog'],
  ];
  const toggleItem = (prop) =>
    setCheck(
      checkersArray.some((el) => el[1] === prop[1])
        ? (oldArr) => (checkersArray.length > 1 ? oldArr.filter((el) => el[1] !== prop[1]) : oldArr)
        : (oldArr) => [...oldArr, [prop[0], prop[1], prop[2]]]
    );
  return (
    <div>
      {selectableProperties.map((prop) => (
        <FormControlLabel
          key={prop[1]}
          control={
            <Checkbox
              checked={checkersArray.some((el) => el[1] === prop[1])}
              onChange={() => toggleItem(prop)}
              name={prop[1]}
            />
          }
          label={prop[2]}
        />
      ))}
    </div>
  );
};

export default TimeDependentCheckers;
