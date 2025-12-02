"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Sun, Moon, Sparkles, Bell, ChevronDown, User, LogOut } from 'lucide-react';
import { useDashboard } from './DashboardContext';
import { PropertySelector } from './PropertySelector';

export const Header = () => {
    const {
        currentProperty,
        allProperties,
        setCurrentPropertyId,
        setIsSidebarOpen,
        isDarkMode,
        setIsDarkMode,
        setShowAssistant
    } = useDashboard();

    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);

    // Toggle dark mode
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Close user menu on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSignOut = () => {
        // Mock sign out
        setIsUserMenuOpen(false);
        window.location.reload();
    }

    return (
        <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
                <button
                    className="md:hidden p-2 -ml-2 text-muted hover:text-primary"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <Menu size={24} />
                </button>

                <PropertySelector
                    properties={allProperties}
                    activePropertyId={currentProperty === 'all' ? 'all' : currentProperty.id}
                    onChange={setCurrentPropertyId}
                />
            </div>

            <div className="flex items-center gap-3 md:gap-4 relative" ref={userMenuRef}>

                {/* Desktop Actions (Hidden on Mobile) */}
                <div className="hidden md:flex items-center gap-3 md:gap-4">
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2 text-muted hover:text-primary hover:bg-surface rounded-full transition-colors"
                        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={() => setShowAssistant(true)}
                        className="p-2 text-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-full transition-colors relative group"
                        title="Ask Gemini AI"
                    >
                        <Sparkles size={20} className="group-hover:animate-pulse" />
                        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                        </span>
                    </button>

                    <div className="h-6 w-px bg-border mx-1"></div>

                    <button className="relative p-2 hover:bg-surface rounded-full transition-colors text-muted hover:text-primary">
                        <Bell size={20} />
                        <span className="absolute top-1.5 right-2 w-2 h-2 bg-primary rounded-full border border-background"></span>
                    </button>
                </div>

                {/* Avatar / Dropdown Trigger */}
                <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 focus:outline-none group"
                >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-xs font-bold text-white border border-white/10 shadow-sm">
                        BS
                    </div>
                    <ChevronDown size={16} className={`text-muted transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''} group-hover:text-primary`} />
                </button>

                {/* User Menu Dropdown */}
                {isUserMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-surface border border-border rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">

                        {/* Mobile Only Items - Shown on screens where desktop actions are hidden */}
                        <div className="md:hidden border-b border-border p-2 space-y-1">
                            <div className="px-3 py-1 text-xs font-semibold text-muted uppercase tracking-wider mb-1">Shortcuts</div>
                            <button
                                onClick={() => { setIsDarkMode(!isDarkMode); }}
                                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-border transition-colors text-gray-700 dark:text-gray-200"
                            >
                                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                                <span>{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
                            </button>
                            <button
                                onClick={() => { setShowAssistant(true); setIsUserMenuOpen(false); }}
                                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-border transition-colors text-gray-700 dark:text-gray-200"
                            >
                                <Sparkles size={18} className="text-indigo-500" />
                                <span>Gemini Assistant</span>
                            </button>
                            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-border transition-colors text-gray-700 dark:text-gray-200">
                                <Bell size={18} />
                                <span>Notifications</span>
                                <span className="ml-auto w-2 h-2 bg-primary rounded-full"></span>
                            </button>
                        </div>

                        <div className="p-2 space-y-1">
                            <div className="px-3 py-1 text-xs font-semibold text-muted uppercase tracking-wider mb-1">Account</div>
                            <Link
                                href="/dashboard/profile"
                                onClick={() => setIsUserMenuOpen(false)}
                                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-border transition-colors text-gray-700 dark:text-gray-200"
                            >
                                <User size={18} />
                                <span>Profile</span>
                            </Link>
                            <button onClick={handleSignOut} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-error/10 text-error transition-colors">
                                <LogOut size={18} />
                                <span>Sign Out</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
