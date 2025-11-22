"use client"

import { createContext } from 'react';
import { Property } from './types';

interface PropertyContextType {
    currentProperty: Property | 'all';
    allProperties: Property[];
    setCurrentPropertyId: (id: string | 'all') => void;
}

export const PropertyContext = createContext<PropertyContextType>({
    currentProperty: 'all',
    allProperties: [],
    setCurrentPropertyId: () => { },
});
