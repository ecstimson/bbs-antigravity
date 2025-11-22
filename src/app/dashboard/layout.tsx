"use client"

import React, { useState, useMemo } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { PropertySelector } from '@/components/dashboard/PropertySelector';
import { ChatSupport } from '@/components/dashboard/ChatSupport';
import { MOCK_PROPERTIES } from '@/lib/dashboard/constants';
import { Property } from '@/lib/dashboard/types';
import { PropertyContext } from '@/lib/dashboard/PropertyContext';
import { Bell } from 'lucide-react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // State for global property selector
    const [currentPropertyId, setCurrentPropertyId] = useState<string>('prop_1'); // Default to first prop

    // Memoize context value
    const value = useMemo(() => {
        const selected: Property | 'all' = currentPropertyId === 'all'
            ? 'all'
            : (MOCK_PROPERTIES.find(p => p.id === currentPropertyId) || MOCK_PROPERTIES[0]);

        return {
            currentProperty: selected,
            allProperties: MOCK_PROPERTIES,
            setCurrentPropertyId
        };
    }, [currentPropertyId]);

    return (
        <PropertyContext.Provider value={value}>
            <div className="flex min-h-screen bg-background font-sans text-gray-100">
                {/* Fixed Sidebar */}
                <Sidebar />

                {/* Main Layout */}
                <div className="flex-1 ml-64 flex flex-col">

                    {/* Sticky Header */}
                    <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <PropertySelector
                                properties={MOCK_PROPERTIES}
                                activePropertyId={currentPropertyId}
                                onChange={setCurrentPropertyId}
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="relative p-2 hover:bg-surface rounded-full transition-colors text-muted hover:text-white">
                                <Bell size={20} />
                                <span className="absolute top-1.5 right-2 w-2 h-2 bg-primary rounded-full border border-background"></span>
                            </button>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-xs font-bold text-white border border-white/10">
                                BS
                            </div>
                        </div>
                    </header>

                    {/* Content Area */}
                    <main className="flex-1 bg-background relative">
                        {children}
                    </main>

                    {/* Floating Chat Widget */}
                    <ChatSupport />

                </div>
            </div>
        </PropertyContext.Provider>
    );
}
