
export const StorageSetInsurance = async (getCover, getAddr) => {
  await localStorage.setItem('@getCover', JSON.stringify(getCover));
  await localStorage.setItem('@getAddr', JSON.stringify(getAddr));
}

export const StorageGetInsurance = () => {
  const defaultGetCover = {};
  const defaultGetAddr = {};

  try {
    const getCover = localStorage.getItem('@getCover');
    const getAddr = localStorage.getItem('@getAddr');
    return {
      getCover: getCover ? JSON.parse(getCover) : '',
      getAddr: getAddr ? JSON.parse(getAddr) : '',
    }
  } catch (e) {
    return {
      getCover: defaultGetCover,
      getAddr: defaultGetAddr,
    };
  }
}

export const StorageClearInsurance = async () => {
  await localStorage.removeItem('@getCover');
  await localStorage.removeItem('@getAddr');
};
