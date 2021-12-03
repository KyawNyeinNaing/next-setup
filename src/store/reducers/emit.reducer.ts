type State = {
  isModal?: boolean;
};

const initialState: State = {
  isModal: false,
};

const emit = (state = initialState, { type, payload }): State => {
  switch (type) {
    case 'IS_MODAL':
      return {
        ...state,
        isModal: payload,
      };
    default:
      return state;
  }
};

export default emit;
