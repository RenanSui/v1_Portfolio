import { ACTIONTYPE, IContactState } from './types';

export const reducer = (state: IContactState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'changeName':
      return { ...state, name: action.payload };
    case 'changeEmail':
      return { ...state, email: action.payload };
    case 'changeMessage':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
