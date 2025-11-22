"use client"

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/dashboard/ui/Card';
import { Badge } from '@/components/dashboard/ui/Badge';
import { ServiceType } from '@/lib/dashboard/types';
import { SERVICE_ICONS, SERVICE_NAMES } from '@/lib/dashboard/constants';
import { Check, AlertCircle, ExternalLink, RefreshCw, Plus } from 'lucide-react';

const ServiceCard = ({
    type,
    connected,
    accountName,
    lastSynced,
    onToggle
}: {
    type: ServiceType,
    connected: boolean,
    accountName?: string,
    lastSynced?: string,
    onToggle: () => void
}) => {
    const [loading, setLoading] = useState(false);

    const handleConnect = () => {
        setLoading(true);
        // Simulate OAuth popup delay
        setTimeout(() => {
            setLoading(false);
            onToggle();
        }, 1500);
    };

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-surface border border-border rounded-xl gap-4">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center text-2xl shrink-0">
                    {SERVICE_ICONS[type]}
                </div>
                <div>
                    <div className="flex items-center gap-3">
                        <h3 className="font-medium text-white">{SERVICE_NAMES[type]}</h3>
                        {connected ? (
                            <Badge variant="success">Active</Badge>
                        ) : (
                            <Badge variant="outline">Not Connected</Badge>
                        )}
                    </div>

                    {connected ? (
                        <div className="mt-2 space-y-1">
                            <p className="text-sm text-muted flex items-center gap-1.5">
                                <Check size={14} className="text-success" />
                                Connected to: <span className="text-gray-300">{accountName}</span>
                            </p>
                            <p className="text-xs text-muted">Last synced: {lastSynced}</p>
                        </div>
                    ) : (
                        <p className="text-sm text-muted mt-1 max-w-md">
                            Connect your account to sync data automatically. Access allows us to generate reports and insights.
                        </p>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
                {connected ? (
                    <>
                        <button className="p-2 text-muted hover:text-white hover:bg-border rounded-lg transition-colors" title="Refresh Token">
                            <RefreshCw size={18} />
                        </button>
                        <button
                            onClick={onToggle}
                            className="px-4 py-2 text-sm font-medium text-error hover:bg-error/10 border border-error/20 rounded-lg transition-colors"
                        >
                            Disconnect
                        </button>
                    </>
                ) : (
                    <button
                        onClick={handleConnect}
                        disabled={loading}
                        className="px-4 py-2 text-sm font-medium text-black bg-white hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                        {loading ? <RefreshCw size={16} className="animate-spin" /> : <Plus size={16} />}
                        Connect Account
                    </button>
                )}
            </div>
        </div>
    );
};

export default function SettingsServices() {
    // Mock local state for the demo. In real app, this updates the backend.
    const [connections, setConnections] = useState({
        [ServiceType.GOOGLE_ANALYTICS]: { connected: true, account: 'analytics@beachbird.com', synced: '5 mins ago' },
        [ServiceType.GOOGLE_BUSINESS]: { connected: true, account: 'locations@beachbird.com', synced: '1 hour ago' },
        [ServiceType.GOOGLE_ADS]: { connected: false, account: '', synced: '' },
        [ServiceType.GOOGLE_SEARCH_CONSOLE]: { connected: true, account: 'webmaster@beachbird.com', synced: '2 hours ago' },
        [ServiceType.META_ADS]: { connected: false, account: '', synced: '' },
        [ServiceType.EMAIL_MARKETING]: { connected: true, account: 'marketing@beachbird.com', synced: '10 mins ago' },
        [ServiceType.CALL_TRACKING]: { connected: false, account: '', synced: '' },
    });

    const toggleConnection = (type: ServiceType) => {
        setConnections(prev => ({
            ...prev,
            [type]: {
                ...prev[type],
                connected: !prev[type].connected,
                account: !prev[type].connected ? 'demo@user.com' : '',
                synced: !prev[type].connected ? 'Just now' : ''
            }
        }));
    };

    return (
        <div className="p-8 max-w-5xl mx-auto pb-20">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white">Connected Services</h1>
                <p className="text-muted mt-2">Manage your OAuth connections for third-party platforms.</p>
            </div>

            <div className="space-y-8">

                <section>
                    <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        Google Integrations
                        <span className="text-xs font-normal text-muted px-2 py-0.5 bg-border rounded">Official Partner</span>
                    </h2>
                    <div className="space-y-4">
                        <ServiceCard
                            type={ServiceType.GOOGLE_ANALYTICS}
                            connected={connections[ServiceType.GOOGLE_ANALYTICS].connected}
                            accountName={connections[ServiceType.GOOGLE_ANALYTICS].account}
                            lastSynced={connections[ServiceType.GOOGLE_ANALYTICS].synced}
                            onToggle={() => toggleConnection(ServiceType.GOOGLE_ANALYTICS)}
                        />
                        <ServiceCard
                            type={ServiceType.GOOGLE_ADS}
                            connected={connections[ServiceType.GOOGLE_ADS].connected}
                            accountName={connections[ServiceType.GOOGLE_ADS].account}
                            lastSynced={connections[ServiceType.GOOGLE_ADS].synced}
                            onToggle={() => toggleConnection(ServiceType.GOOGLE_ADS)}
                        />
                        <ServiceCard
                            type={ServiceType.GOOGLE_SEARCH_CONSOLE}
                            connected={connections[ServiceType.GOOGLE_SEARCH_CONSOLE].connected}
                            accountName={connections[ServiceType.GOOGLE_SEARCH_CONSOLE].account}
                            lastSynced={connections[ServiceType.GOOGLE_SEARCH_CONSOLE].synced}
                            onToggle={() => toggleConnection(ServiceType.GOOGLE_SEARCH_CONSOLE)}
                        />
                        <ServiceCard
                            type={ServiceType.GOOGLE_BUSINESS}
                            connected={connections[ServiceType.GOOGLE_BUSINESS].connected}
                            accountName={connections[ServiceType.GOOGLE_BUSINESS].account}
                            lastSynced={connections[ServiceType.GOOGLE_BUSINESS].synced}
                            onToggle={() => toggleConnection(ServiceType.GOOGLE_BUSINESS)}
                        />
                    </div>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-white mb-4">Social Media</h2>
                    <div className="space-y-4">
                        <ServiceCard
                            type={ServiceType.META_ADS}
                            connected={connections[ServiceType.META_ADS].connected}
                            accountName={connections[ServiceType.META_ADS].account}
                            lastSynced={connections[ServiceType.META_ADS].synced}
                            onToggle={() => toggleConnection(ServiceType.META_ADS)}
                        />
                    </div>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-white mb-4">Native Services</h2>
                    <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-6 flex justify-between items-center">
                            <div>
                                <h3 className="font-medium text-white flex items-center gap-2">
                                    {SERVICE_ICONS[ServiceType.EMAIL_MARKETING]} Email Campaigns
                                    <Badge variant="success">Built-in</Badge>
                                </h3>
                                <p className="text-sm text-muted mt-1">Managed internally via Resend integration.</p>
                            </div>
                            <button className="text-sm text-primary hover:underline">Configure Settings</button>
                        </CardContent>
                    </Card>
                </section>

            </div>
        </div>
    );
};