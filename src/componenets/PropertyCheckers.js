import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const PropertyCheckers = ({ checkersArray, setCheck }) => {
  const selectableProperties = [
    ['temperature', 'high', ' 37°C-38.9°C'],
    ['temperature', 'fever', '>38.9°C'],
    ['symptoms1', 'dryCough', 'Suv kašalj'],
    ['symptoms2', 'severeCough', 'Jak kašalj'],
    ['symptoms1', 'lossSmell', 'Smanjeno čulo mirisa'],
    ['symptoms1', 'soreThroat', 'Suvo grlo'],
    ['symptoms1', 'weakness', 'Slabost'],
    ['symptoms2', 'painChest', 'Bol u grudima'],
    ['symptoms2', 'severeWeakness', 'Iznemoglost'],
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

export default PropertyCheckers;
