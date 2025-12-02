import React from 'react';
import { DashboardProvider } from '@/components/dashboard/DashboardContext';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardProvider>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </DashboardProvider>
    );
}
