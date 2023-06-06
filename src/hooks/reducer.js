const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVS":
      return { ...state, userMovements: action.payload.userMovements };
    case "CALC_BAL":
      return { ...state, balance: action.payload.balance };
    default:
      throw new Error(`Unhandled action type '${action.type}'`);
  }
};

export default reducer;
