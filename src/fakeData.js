import { accumulateAllRegionsTotal } from './helpers';

export const regions = [
  'Svi',
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
  temperature: { normal: 145, high: 200, fever: 35, unkown: 350 },
  symptoms1: { dryCough: 724, lossSmell: 145, soreThroat: 155, weakness: 9, changeAppetite: 12 },
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
  sex: { males: 625, females: 120, unkown: 115 },
  temperature: { normal: 365, high: 20, fever: 35, unkown: 370 },
  symptoms1: { dryCough: 24, lossSmell: 105, soreThroat: 45, weakness: 90, changeAppetite: 22 },
  symptoms2: {
    severeCough: 42,
    breathless: 78,
    difficultBreathing: 114,
    drowsiness: 15,
    painChest: 1,
    severeWeakness: 74,
  },
  travel: { no: 22, yes: 377, contact: 61 },
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
  temperature: { normal: 25, high: 930, fever: 35, unkown: 480 },
  symptoms1: { dryCough: 4, lossSmell: 111, soreThroat: 545, weakness: 555, changeAppetite: 2 },
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
const timeIntervals = [
  'mar1',
  'mar2',
  'mar3',
  'mar4',
  'mar5',
  'mar6',
  'mar7',
  'mar8',
  'mar9',
  'mar10',
];

const generateRandomData = () => fakes[Math.floor(Math.random() * fakes.length)];

const generateRegionsWithData = () =>
  regions.reduce((acc, cur) => {
    acc[cur] = generateRandomData();
    return acc;
  }, {});

export const intervalsWithRegions = timeIntervals.reduce((acc, cur) => {
  const regionsWithData = generateRegionsWithData();
  acc[cur] = regionsWithData;
  acc[cur].Svi = accumulateAllRegionsTotal(Object.values(regionsWithData));
  return acc;
}, {});

const intervalsWithRegionsArray = Object.values(intervalsWithRegions);

const accumulateSingleProperty = (region, property, subproperty) =>
  intervalsWithRegionsArray.reduce((acc, cur) => {
    let newValue = acc;
    newValue += cur[region][property][subproperty];
    return newValue;
  }, 0);

export const regionsAccumulated = regions
  .filter((e) => e !== 'Svi')
  .map((region) => {
    return {
      region,
      age: {
        young: accumulateSingleProperty(region, 'age', 'young'),
        middle: accumulateSingleProperty(region, 'age', 'middle'),
        old: accumulateSingleProperty(region, 'age', 'old'),
      },
      sex: {
        males: accumulateSingleProperty(region, 'sex', 'males'),
        females: accumulateSingleProperty(region, 'sex', 'females'),
        unkown: accumulateSingleProperty(region, 'sex', 'unkown'),
      },
      temperature: {
        normal: accumulateSingleProperty(region, 'temperature', 'normal'),
        high: accumulateSingleProperty(region, 'temperature', 'high'),
        fever: accumulateSingleProperty(region, 'temperature', 'fever'),
        unkown: accumulateSingleProperty(region, 'temperature', 'unkown'),
      },
      symptoms1: {
        dryCough: accumulateSingleProperty(region, 'symptoms1', 'dryCough'),
        lossSmell: accumulateSingleProperty(region, 'symptoms1', 'lossSmell'),
        soreThroat: accumulateSingleProperty(region, 'symptoms1', 'soreThroat'),
        weakness: accumulateSingleProperty(region, 'symptoms1', 'weakness'),
        changeAppetite: accumulateSingleProperty(region, 'symptoms1', 'changeAppetite'),
      },
      symptoms2: {
        severeCough: accumulateSingleProperty(region, 'symptoms2', 'severeCough'),
        breathless: accumulateSingleProperty(region, 'symptoms2', 'breathless'),
        difficultBreathing: accumulateSingleProperty(region, 'symptoms2', 'difficultBreathing'),
        drowsiness: accumulateSingleProperty(region, 'symptoms2', 'drowsiness'),
        painChest: accumulateSingleProperty(region, 'symptoms2', 'painChest'),
        severeWeakness: accumulateSingleProperty(region, 'symptoms2', 'severeWeakness'),
      },
      travel: {
        no: accumulateSingleProperty(region, 'travel', 'no'),
        yes: accumulateSingleProperty(region, 'travel', 'yes'),
        contact: accumulateSingleProperty(region, 'travel', 'contact'),
      },
      diseases: {
        diabetes: accumulateSingleProperty(region, 'diseases', 'diabetes'),
        bloodPressure: accumulateSingleProperty(region, 'diseases', 'bloodPressure'),
        heartDisease: accumulateSingleProperty(region, 'diseases', 'heartDisease'),
        kidneyDisease: accumulateSingleProperty(region, 'diseases', 'kidneyDisease'),
        lungDisease: accumulateSingleProperty(region, 'diseases', 'lungDisease'),
        stroke: accumulateSingleProperty(region, 'diseases', 'stroke'),
        reducedImunity: accumulateSingleProperty(region, 'diseases', 'reducedImunity'),
      },
      last48h: {
        better: accumulateSingleProperty(region, 'last48h', 'better'),
        same: accumulateSingleProperty(region, 'last48h', 'same'),
        worse: accumulateSingleProperty(region, 'last48h', 'worse'),
        critical: accumulateSingleProperty(region, 'last48h', 'critical'),
      },
    };
  });
