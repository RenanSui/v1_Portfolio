import { Dispatch } from 'react';

export interface IContactState { name: string, email: string, message: string };

export interface IContactPropsInfo {
  id: number | string;
  type: 'name' | 'email' | 'message';
  actionType: 'changeName' | 'changeEmail' | 'changeMessage';
  labelPlaceholder: string;
}

export type ACTIONTYPE =
  | { type: 'changeName'; payload: string }
  | { type: 'changeEmail'; payload: string }
  | { type: 'changeMessage'; payload: string }
;

export type ContactContextProps = {
  contactState: IContactState;
  dispatch: Dispatch<ACTIONTYPE>;
};
