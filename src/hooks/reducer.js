const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACT_IX":
      return { ...state, activeModuleIx: action.payload.id };
    case "HIDE_COOKIE_DLOG":
      return { ...state, isCookieDialogVisible: false };
    case "SET_ACT_USER":
      return { ...state, activeUser: action.payload.user };
    case "SET_MOVS":
      return { ...state, userMovements: action.payload.userMovements };
    case "CALC_BAL":
      return { ...state, balance: action.payload.balance };
    case "SET_DLOG":
      return { ...state, dialog: action.payload.dialog };
    case "LOG_OUT":
      return { ...state, activeUser: null };
    default:
      throw new Error(`Unhandled action type '${action.type}'`);
  }
};

export default reducer;
