"use client";

import React from 'react';
import { useDashboard } from './DashboardContext';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { ChatSupport } from './ChatSupport';
import { GeminiAssistant } from './GeminiAssistant';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { isSidebarOpen, setIsSidebarOpen, showAssistant, setShowAssistant } = useDashboard();

    return (
        <div className="flex min-h-screen bg-background font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
            {/* Responsive Sidebar */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Main Layout */}
            <div className="flex-1 md:ml-64 flex flex-col transition-all duration-300">

                {/* Sticky Header */}
                <Header />

                {/* Content Area */}
                <main className="flex-1 bg-background relative w-full">
                    {children}
                </main>

                {/* Floating Chat Widget */}
                <ChatSupport />

                {/* Gemini Assistant Panel */}
                <GeminiAssistant isOpen={showAssistant} onClose={() => setShowAssistant(false)} />

            </div>
        </div>
    );
};
