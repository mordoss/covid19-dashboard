import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { convertPropertyToNative } from '../../helpers';

const symptoms1 = [
  ['temperature', 'high', ' 37°C-38.9°C'],
  ['symptoms1', 'dryCough', 'Suv kašalj'],
  ['symptoms1', 'lossSmell', 'Smanjeno čulo mirisa'],
  ['symptoms1', 'soreThroat', 'Suvo grlo'],
  ['symptoms1', 'weakness', 'Slabost'],
  ['symptoms1', 'changeAppetite', 'Smanjen apetit'],
  ['last48h', 'worse', 'Stanje se pogoršalo'],
];

const symptoms2 = [
  ['temperature', 'fever', '>38.9°C'],
  ['symptoms2', 'severeCough', 'Jak kašalj'],
  ['symptoms2', 'painChest', 'Bol u grudima'],
  ['symptoms2', 'severeWeakness', 'Iznemoglost'],
  ['symptoms2', 'breathless', 'Gubitak daha'],
  ['symptoms2', 'difficultBreathing', 'Otežano disanje'],
  ['symptoms2', 'drowsiness', 'Ošamućenost'],
  ['last48h', 'critical', 'Stanje postaje kritično'],
];

const diseases = [
  ['diseases', 'diabetes', 'Dijabetes'],
  ['diseases', 'bloodPressure', 'Povišen pritisak'],
  ['diseases', 'heartDisease', 'Bolest srca'],
  ['diseases', 'kidneyDisease', 'Bolest bubrega'],
  ['diseases', 'lungDisease', 'Bolest pluća'],
  ['diseases', 'stroke', 'Šlog'],
  ['diseases', 'reducedImunity', 'Narušen imunitet'],
];

const ageAndSex = [
  ['age', 'young'],
  ['age', 'old'],
  ['age', 'middle'],
  ['sex', 'males'],
  ['sex', 'females'],
  ['sex', 'unknown'],
].map((arr) => [...arr, convertPropertyToNative(arr[1])]);

const PropertyCheckers = ({ checkersArray, setCheck, maxProperties }) => {
  const toggleItem = (prop) =>
    setCheck(
      checkersArray.some((el) => el[1] === prop[1])
        ? (oldArr) => (checkersArray.length > 1 ? oldArr.filter((el) => el[1] !== prop[1]) : oldArr)
        : (oldArr) =>
            checkersArray.length < maxProperties ? [...oldArr, [prop[0], prop[1], prop[2]]] : oldArr
    );

  const error = checkersArray.length === maxProperties || checkersArray.length === 1;

  const renderChecker = (prop) => (
    <FormControlLabel
      key={prop[1]}
      control={
        <Checkbox
          color="primary"
          checked={checkersArray.some((el) => el[1] === prop[1])}
          onChange={() => toggleItem(prop)}
          name={prop[1]}
        />
      }
      label={prop[2]}
    />
  );

  const renderPanel = (property, summary) => (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {summary}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ flexWrap: 'wrap' }}>
        {property.map((prop) => renderChecker(prop))}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );

  return (
    <div style={{ margin: 8 }}>
      <FormControl required error={error}>
        {renderPanel(symptoms1, 'Lakši simptomi')}
        {renderPanel(symptoms2, 'Teži simptomi')}
        {renderPanel(diseases, 'Bolesti')}
        {renderPanel(ageAndSex, 'Pol i starost')}
        <div style={{ margin: 4 }}>
          {checkersArray.map((el) => (
            <Chip
              style={{ margin: 4 }}
              label={el[2]}
              variant="outlined"
              size="small"
              onDelete={() =>
                setCheck(
                  checkersArray.length === 1
                    ? checkersArray
                    : checkersArray.filter((e) => e[1] !== el[1])
                )
              }
            />
          ))}
        </div>
        <FormHelperText>
          Možete izabrati najmanje <span style={{ fontWeight: 800 }}>1</span>, a najviše{' '}
          <span style={{ fontWeight: 600 }}>{maxProperties}</span> polja
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default PropertyCheckers;
