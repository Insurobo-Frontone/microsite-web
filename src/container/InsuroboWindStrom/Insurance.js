
export const StorageSetInsurance = async (insurance, initUserInfo) => {
  console.log(insurance, initUserInfo);
  await localStorage.setItem('@insurance', JSON.stringify(insurance));
  await localStorage.setItem('@inituser', JSON.stringify(initUserInfo));
}

export const StorageGetInsruance = async () => {
  const defaultInsurance = {};
  const defaultInitUser = {};

  try {
    const insurance = await localStorage.getItem('@insurance');
    const initUser = await localStorage.getItem('@inituser');
    return {
      insurance: insurance ? JSON.parse(insurance) : '',
      inituser: initUser ? JSON.parse(initUser) : '',
    }
  } catch (e) {
    return {
      insurance: defaultInsurance,
      inituser: defaultInitUser,
    };
  }
}

export const StorageClearInsurance = async () => {
  await localStorage.removeItem('@insurance');
  await localStorage.removeItem('@inituser');
};