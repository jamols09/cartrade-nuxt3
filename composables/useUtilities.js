export const useUtilities = () => {
  function capitalizeTitle(e) {
    return e.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return {
    capitalizeTitle,
  };
};
