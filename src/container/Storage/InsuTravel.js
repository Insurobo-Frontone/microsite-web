export const setTravelMenu = (getLocation) => {
  localStorage.setItem('@travellocation', JSON.stringify(getLocation));

}

export const getTravelMenu = () => {
  const defaultGetLocation = {};
  try {
    const getLocation = localStorage.getItem('@travellocation');
    return {
      getLocation: getLocation ? JSON.parse(getLocation) : '',
    }
  } catch (e) {
    return {
      getLocation: defaultGetLocation,
    }
  }
}

export const clearGetTravelMenu = () => {
  localStorage.removeItem('@travellocation');
};



