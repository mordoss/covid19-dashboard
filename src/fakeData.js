import { accumulateData } from './helpers';

export const regions = [
  'Beograd',
  'SevernoBački',
  'SrednjeBanatski',
  'SevernoBanatski',
  'JužnoBanatski',
  'ZapadnoBački',
  'JužnoBački',
  'Sremski',
  'Mačvanski',
  'Kolubarski',
  'Podunavski',
  'Braničevski',
  'Šumadijski',
  'Pomoravski',
  'Borski',
  'Zaječarski',
  'Zlatiborski',
  'Moravički',
  'Raški',
  'Rasinski',
  'Nišavski',
  'Toplički',
  'Pirotski',
  'Jablanički',
  'Pčinjski',
  'Kosovski',
  'Pećki',
  'Prizrenski',
  'KosovskoMitrovački',
  'KosovskoPomoravski',
];

const fake1 = {
  age: { young: 501, middle: 299, old: 200 },
  sex: { males: 305, females: 300, unkown: 395 },
  temperature: { normal: 145, high: 200, fever: 305, unkown: 350 },
  symptoms1: { dryCough: 74, lossSmell: 15, soreThroat: 15, weakness: 90, changeAppetite: 12 },
  symptoms2: {
    severeCough: 12,
    breathless: 72,
    difficultBreathing: 154,
    drowsiness: 15,
    painChest: 12,
    severeWeakness: 14,
  },
  travel: { no: 602, yes: 357, contact: 41 },
  diseases: {
    diabetes: 12,
    bloodPressure: 18,
    heartDisease: 64,
    kidneyDisease: 17,
    lungDisease: 13,
    stroke: 74,
    reducedImunity: 45,
  },
  last48h: { better: 201, same: 504, worse: 205, critical: 95 },
};

const fake2 = {
  age: { young: 521, middle: 219, old: 220 },
  sex: { males: 325, females: 320, unkown: 415 },
  temperature: { normal: 165, high: 220, fever: 325, unkown: 370 },
  symptoms1: { dryCough: 24, lossSmell: 105, soreThroat: 45, weakness: 90, changeAppetite: 22 },
  symptoms2: {
    severeCough: 42,
    breathless: 78,
    difficultBreathing: 114,
    drowsiness: 15,
    painChest: 1,
    severeWeakness: 74,
  },
  travel: { no: 622, yes: 377, contact: 61 },
  diseases: {
    diabetes: 42,
    bloodPressure: 16,
    heartDisease: 74,
    kidneyDisease: 7,
    lungDisease: 17,
    stroke: 4,
    reducedImunity: 85,
  },
  last48h: { better: 221, same: 524, worse: 225, critical: 115 },
};

const fake3 = {
  age: { young: 531, middle: 229, old: 230 },
  sex: { males: 335, females: 330, unkown: 425 },
  temperature: { normal: 175, high: 230, fever: 335, unkown: 380 },
  symptoms1: { dryCough: 24, lossSmell: 15, soreThroat: 145, weakness: 9, changeAppetite: 12 },
  symptoms2: {
    severeCough: 42,
    breathless: 78,
    difficultBreathing: 114,
    drowsiness: 15,
    painChest: 1,
    severeWeakness: 74,
  },
  travel: { no: 632, yes: 387, contact: 71 },
  diseases: {
    diabetes: 4,
    bloodPressure: 6,
    heartDisease: 7,
    kidneyDisease: 4,
    lungDisease: 7,
    stroke: 42,
    reducedImunity: 5,
  },
  last48h: { better: 231, same: 534, worse: 235, critical: 125 },
};

const fake4 = {
  age: { young: 631, middle: 329, old: 330 },
  sex: { males: 435, females: 430, unkown: 525 },
  temperature: { normal: 275, high: 330, fever: 435, unkown: 480 },
  symptoms1: { dryCough: 4, lossSmell: 1, soreThroat: 15, weakness: 9, changeAppetite: 2 },
  symptoms2: {
    severeCough: 2,
    breathless: 7,
    difficultBreathing: 214,
    drowsiness: 115,
    painChest: 16,
    severeWeakness: 14,
  },
  travel: { no: 732, yes: 487, contact: 171 },
  diseases: {
    diabetes: 46,
    bloodPressure: 16,
    heartDisease: 75,
    kidneyDisease: 41,
    lungDisease: 47,
    stroke: 4,
    reducedImunity: 15,
  },
  last48h: { better: 331, same: 634, worse: 335, critical: 225 },
};

const fakes = [fake1, fake2, fake3, fake4];
const timeIntervals = ['mar1', 'mar2', 'mar3', 'mar4', 'apr1'];

const generateRandomData = () => fakes[Math.floor(Math.random() * fakes.length)];

const generateRegionsWithData = () =>
  regions.reduce((acc, cur) => {
    acc[cur] = generateRandomData();
    return acc;
  }, {});

const intervalsWithRegions = timeIntervals.reduce((acc, cur) => {
  const regionsWithData = generateRegionsWithData();
  acc[cur] = regionsWithData;
  acc[cur].Svi = accumulateData(Object.values(regionsWithData));
  return acc;
}, {});

export default intervalsWithRegions;
