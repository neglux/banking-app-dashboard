const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACT_IX":
      return { ...state, activeModuleIx: action.payload.id };
    case "SET_ACT_USER":
      return { ...state, activeUser: action.payload.user };
    case "SET_MOVS":
      return { ...state, userMovements: action.payload.userMovements };
    case "LOG_OUT":
      return { ...state, activeUser: null };
    case "CALC_BAL":
      return { ...state, balance: action.payload.balance };
    default:
      throw new Error(`Unhandled action type '${action.type}'`);
  }
};

export default reducer;
