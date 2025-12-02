"use client";

import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { Property } from './types';
import { MOCK_PROPERTIES } from './constants';

interface PropertyContextType {
    currentProperty: Property | 'all';
    allProperties: Property[];
    setCurrentPropertyId: (id: string | 'all') => void;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
    showAssistant: boolean;
    setShowAssistant: (show: boolean) => void;
    isDarkMode: boolean;
    setIsDarkMode: (isDark: boolean) => void;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
    const [currentPropertyId, setCurrentPropertyId] = useState<string>('prop_1');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showAssistant, setShowAssistant] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const value = useMemo(() => {
        const selected: Property | 'all' = currentPropertyId === 'all'
            ? 'all'
            : (MOCK_PROPERTIES.find(p => p.id === currentPropertyId) || MOCK_PROPERTIES[0]);

        return {
            currentProperty: selected,
            allProperties: MOCK_PROPERTIES,
            setCurrentPropertyId,
            isSidebarOpen,
            setIsSidebarOpen,
            showAssistant,
            setShowAssistant,
            isDarkMode,
            setIsDarkMode
        };
    }, [currentPropertyId, isSidebarOpen, showAssistant, isDarkMode]);

    return (
        <PropertyContext.Provider value={value}>
            {children}
        </PropertyContext.Provider>
    );
};

export const useDashboard = () => {
    const context = useContext(PropertyContext);
    if (context === undefined) {
        throw new Error('useDashboard must be used within a DashboardProvider');
    }
    return context;
};
