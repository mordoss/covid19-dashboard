export const accumulateAllRegionsTotal = (arr) => {
  return arr.reduce(
    (acc, cur) => {
      acc.age.old += cur.age.old;
      acc.age.young += cur.age.young;
      acc.age.middle += cur.age.middle;
      acc.sex.males += cur.sex.males;
      acc.sex.females += cur.sex.females;
      acc.sex.unknown += cur.sex.unknown;
      acc.temperature.normal += cur.temperature.normal;
      acc.temperature.high += cur.temperature.high;
      acc.temperature.fever += cur.temperature.fever;
      acc.temperature.unknown += cur.temperature.unknown;
      acc.symptoms1.dryCough += cur.symptoms1.dryCough;
      acc.symptoms1.lossSmell += cur.symptoms1.lossSmell;
      acc.symptoms1.soreThroat += cur.symptoms1.soreThroat;
      acc.symptoms1.weakness += cur.symptoms1.weakness;
      acc.symptoms1.changeAppetite += cur.symptoms1.changeAppetite;
      acc.symptoms2.severeCough += cur.symptoms2.severeCough;
      acc.symptoms2.breathless += cur.symptoms2.breathless;
      acc.symptoms2.difficultBreathing += cur.symptoms2.difficultBreathing;
      acc.symptoms2.drowsiness += cur.symptoms2.drowsiness;
      acc.symptoms2.painChest += cur.symptoms2.painChest;
      acc.symptoms2.severeWeakness += cur.symptoms2.severeWeakness;
      acc.travel.no += cur.travel.no;
      acc.travel.yes += cur.travel.yes;
      acc.travel.contact += cur.travel.contact;
      acc.diseases.diabetes += cur.diseases.diabetes;
      acc.diseases.bloodPressure += cur.diseases.bloodPressure;
      acc.diseases.heartDisease += cur.diseases.heartDisease;
      acc.diseases.kidneyDisease += cur.diseases.kidneyDisease;
      acc.diseases.lungDisease += cur.diseases.lungDisease;
      acc.diseases.stroke += cur.diseases.stroke;
      acc.diseases.reducedImunity += cur.diseases.reducedImunity;

      return acc;
    },
    {
      age: { young: 0, middle: 0, old: 0 },
      sex: { males: 0, females: 0, unknown: 0 },
      temperature: { normal: 0, high: 0, fever: 0, unknown: 0 },
      symptoms1: { dryCough: 0, lossSmell: 0, soreThroat: 0, weakness: 0, changeAppetite: 0 },
      symptoms2: {
        severeCough: 0,
        breathless: 0,
        difficultBreathing: 0,
        drowsiness: 0,
        painChest: 0,
        severeWeakness: 0,
      },
      travel: { no: 0, yes: 0, contact: 0 },
      diseases: {
        diabetes: 0,
        bloodPressure: 0,
        heartDisease: 0,
        kidneyDisease: 0,
        lungDisease: 0,
        stroke: 0,
        reducedImunity: 0,
      },
      last48h: { better: 0, same: 0, worse: 0, critical: 0 },
    }
  );
};

export const convertPropertyToNative = (property) => {
  switch (property) {
    case 'normal':
      return 'Normalna';
    case 'fever':
      return '>38.9°C';
    case 'high':
      return '37°C-38.9°C';
    case 'unknown':
      return 'Nepoznato';
    case 'males':
      return 'Muški';
    case 'females':
      return 'Ženski';
    case 'no':
      return 'Bez putovanja ili kontakta sa simptomima';
    case 'yes':
      return 'Putovanje ili kontakt sa simptomima';
    case 'contact':
      return 'Kontakt sa zaraženim';
    case 'young':
      return 'Mladi';
    case 'old':
      return 'Stari';
    case 'middle':
      return '40-65 godina';
    case 'better':
      return 'Bolje';
    case 'same':
      return 'Nepromenjeno';
    case 'worse':
      return 'Pogoršano';
    case 'critical':
      return 'Kritično';

    default:
      return 'lola';
  }
};
