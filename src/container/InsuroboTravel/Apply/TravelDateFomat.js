
function leftPad(value) {
  if (value >= 10) {
      return value;
  }
  return `0${value}`;
}

export const toStringByFormatting = (date, delimiter = '-') => {
  const year = date?.getFullYear();
  const month = leftPad(date?.getMonth() + 1);
  const day = leftPad(date?.getDate());
  return [year, month, day].join(delimiter);
}

export const travelPeriod = (endDate, startDate) => {
  const gap = endDate - startDate
  return Math.ceil(gap / (1000 * 60 * 60 * 24) + 1);
}

export const insuAge = (date, regFront) => {
  const year = date?.getFullYear();
  const month = leftPad(date?.getMonth() + 1);
  const day = leftPad(date?.getDate());
  const birth = regFront?.substring(0, 2);
  const birthMonth = regFront?.substring(2, 4);
  const birthDay = regFront?.substring(4, 6);
  const birthYear = birth > 23 ? 19 + birth : 20 + birth;
  const korAge =  month < Number(birthMonth) + 6 ? 0 : day < Number(birthDay) ? 0 : 1;
  return (year - birthYear) + korAge;
}

