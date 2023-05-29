const reducer = (state, action) => {
  switch (action.type) {
    case "HIDE_COOKIE_DLOG":
      return { ...state, isCookieDialogVisible: false };
    case "SET_MOVS":
      return { ...state, userMovements: action.payload.userMovements };
    case "CALC_BAL":
      return { ...state, balance: action.payload.balance };
    case "SET_DLOG":
      return { ...state, dialog: action.payload.dialog };
    default:
      throw new Error(`Unhandled action type '${action.type}'`);
  }
};

export default reducer;
