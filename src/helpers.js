// eslint-disable-next-line import/prefer-default-export
export const accumulateData = (arr) => {
  return arr.reduce(
    (acc, cur) => {
      const newObj = acc;

      newObj.age.old += cur.age.old;
      newObj.age.young += cur.age.young;
      newObj.age.middle += cur.age.middle;
      newObj.sex.males += cur.sex.males;
      newObj.sex.females += cur.sex.females;
      newObj.sex.unkown += cur.sex.unkown;
      newObj.temperature.normal += cur.temperature.normal;
      newObj.temperature.high += cur.temperature.high;
      newObj.temperature.fever += cur.temperature.fever;
      newObj.temperature.unkown += cur.temperature.unkown;
      newObj.symptoms1.dryCough += cur.symptoms1.dryCough;
      newObj.symptoms1.lossSmell += cur.symptoms1.lossSmell;
      newObj.symptoms1.soreThroat += cur.symptoms1.soreThroat;
      newObj.symptoms1.weakness += cur.symptoms1.weakness;
      newObj.symptoms1.changeAppetite += cur.symptoms1.changeAppetite;
      newObj.symptoms2.severeCough += cur.symptoms2.severeCough;
      newObj.symptoms2.breathless += cur.symptoms2.breathless;
      newObj.symptoms2.difficultBreathing += cur.symptoms2.difficultBreathing;
      newObj.symptoms2.drowsiness += cur.symptoms2.drowsiness;
      newObj.symptoms2.painChest += cur.symptoms2.painChest;
      newObj.symptoms2.severeWeakness += cur.symptoms2.severeWeakness;
      newObj.travel.no += cur.travel.no;
      newObj.travel.yes += cur.travel.yes;
      newObj.travel.contact += cur.travel.contact;
      newObj.diseases.diabetes += cur.diseases.diabetes;
      newObj.diseases.bloodPressure += cur.diseases.bloodPressure;
      newObj.diseases.heartDisease += cur.diseases.heartDisease;
      newObj.diseases.kidneyDisease += cur.diseases.kidneyDisease;
      newObj.diseases.lungDisease += cur.diseases.lungDisease;
      newObj.diseases.stroke += cur.diseases.stroke;
      newObj.diseases.reducedImunity += cur.diseases.reducedImunity;

      return newObj;
    },
    {
      age: { young: 0, middle: 0, old: 0 },
      sex: { males: 0, females: 0, unkown: 0 },
      temperature: { normal: 0, high: 0, fever: 0, unkown: 0 },
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
