const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACT_IX":
      return { ...state, activeModuleIx: action.payload.id };
    default:
      throw new Error(`Unhandled action type '${action.type}'`);
  }
};

export default reducer;
