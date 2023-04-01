'use client';
import { createContext } from 'react';
import { ContactContextProps } from './types';

export const ContactContext = createContext<ContactContextProps>(
  {} as ContactContextProps
);
