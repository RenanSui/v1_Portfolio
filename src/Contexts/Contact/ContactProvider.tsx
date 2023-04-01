'use client'
import { FC, useReducer } from 'react';
import { ContactContext } from './ContactContext';
import { reducer } from './ContactReducer';
import { IContactState } from './types';

interface ContactContextProps {
  children: string | JSX.Element | JSX.Element[];
}

const initialContactState: IContactState = { name: '', email: '', message: '' };

const ContactProvider: FC<ContactContextProps> = ({ children }) => {
  const [contactState, dispatch] = useReducer(reducer, initialContactState);

  return (
    <>
      <ContactContext.Provider value={{ contactState, dispatch }}>
        {children}
      </ContactContext.Provider>
    </>
  );
};

export default ContactProvider;
