"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/dashboard/ui/Card';
import { Badge } from '@/components/dashboard/ui/Badge';
import { ServiceType } from '@/components/dashboard/types';
import { SERVICE_ICONS, SERVICE_NAMES, MOCK_CTAS } from '@/components/dashboard/constants';
import { Check, AlertCircle, ExternalLink, RefreshCw, Plus, Mail, Sparkles, Zap, MessageSquare, MousePointerClick, Clock } from 'lucide-react';

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
                        <h3 className="font-medium text-gray-900 dark:text-white">{SERVICE_NAMES[type]}</h3>
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
                                Connected to: <span className="text-gray-700 dark:text-gray-300">{accountName}</span>
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
                        <button className="p-2 text-muted hover:text-gray-900 dark:hover:text-white hover:bg-border rounded-lg transition-colors" title="Refresh Token">
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

const AutomationCard: React.FC<{ cta: typeof MOCK_CTAS[0] }> = ({ cta }) => {
    return (
        <Card className="bg-surface border border-border hover:border-primary/30 transition-colors group">
            <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${cta.active ? 'bg-primary/10 text-primary' : 'bg-border/50 text-muted'}`}>
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">{cta.name}</h3>
                            <p className="text-xs text-muted">{cta.type}</p>
                        </div>
                    </div>
                    <Badge variant={cta.active ? 'success' : 'outline'}>{cta.active ? 'Active' : 'Paused'}</Badge>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div className="bg-background p-2 rounded border border-border">
                        <div className="text-xs text-muted flex items-center justify-center gap-1 mb-1"><MousePointerClick size={12} /> Views</div>
                        <span className="font-bold text-gray-900 dark:text-white">{cta.views}</span>
                    </div>
                    <div className="bg-background p-2 rounded border border-border">
                        <div className="text-xs text-muted flex items-center justify-center gap-1 mb-1"><Zap size={12} /> Leads</div>
                        <span className="font-bold text-primary">{cta.leads}</span>
                    </div>
                    <div className="bg-background p-2 rounded border border-border">
                        <div className="text-xs text-muted flex items-center justify-center gap-1 mb-1"><Clock size={12} /> Rate</div>
                        <span className="font-bold text-gray-900 dark:text-white">{((cta.leads / cta.views) * 100).toFixed(1)}%</span>
                    </div>
                </div>

                <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted mb-2">
                        <Mail size={12} />
                        <span>Email Sequence: {cta.sequenceName}</span>
                    </div>
                    <div className="flex items-center gap-1 ml-1">
                        <div className="h-6 w-0.5 bg-border"></div>
                        <div className="flex items-center gap-2 text-xs text-muted bg-background px-2 py-1 rounded border border-border w-full">
                            <Clock size={12} />
                            <span>Immediate: Send "{cta.assets[0]}"</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 ml-1">
                        <div className="h-6 w-0.5 bg-border"></div>
                        <div className="flex items-center gap-2 text-xs text-muted bg-background px-2 py-1 rounded border border-border w-full">
                            <Clock size={12} />
                            <span>Delay 2d: "Checking in..."</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border flex gap-2">
                    <button className="flex-1 py-2 text-xs font-medium bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors">Edit Widget</button>
                    <button className="flex-1 py-2 text-xs font-medium bg-surface border border-border text-gray-900 dark:text-white rounded hover:bg-border transition-colors">Edit Sequence</button>
                </div>
            </CardContent>
        </Card>
    )
}

export default function SettingsServices() {
    const [connections, setConnections] = useState({
        [ServiceType.GOOGLE_ANALYTICS]: { connected: true, account: 'analytics@beachbird.com', synced: '5 mins ago' },
        [ServiceType.GOOGLE_BUSINESS]: { connected: true, account: 'locations@beachbird.com', synced: '1 hour ago' },
        [ServiceType.GOOGLE_ADS]: { connected: false, account: '', synced: '' },
        [ServiceType.GOOGLE_SEARCH_CONSOLE]: { connected: true, account: 'webmaster@beachbird.com', synced: '2 hours ago' },
        [ServiceType.META_ADS]: { connected: false, account: '', synced: '' },
        [ServiceType.EMAIL_MARKETING]: { connected: true, account: 'marketing@beachbird.com', synced: 'Daily' },
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
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Configuration</h1>
                <p className="text-muted mt-2">Manage services, automation, and account connections.</p>
            </div>

            <div className="space-y-10">

                <section>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
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
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Media</h2>
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
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Email Settings</h2>
                    <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-6 flex justify-between items-center">
                            <div>
                                <h3 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                    {SERVICE_ICONS[ServiceType.EMAIL_MARKETING]} General Email Configuration
                                    <Badge variant="success">Built-in</Badge>
                                </h3>
                                <p className="text-sm text-muted mt-1">Managed internally via Resend integration.</p>
                            </div>
                            <button className="text-sm text-primary hover:underline">Configure SMTP / Domain</button>
                        </CardContent>
                    </Card>
                </section>

                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            Lead Capture & Automation
                            <Badge variant="default">New</Badge>
                        </h2>
                        <button className="text-sm bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary-hover transition-colors flex items-center gap-2">
                            <Plus size={16} /> Create New Widget
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {MOCK_CTAS.map(cta => (
                            <AutomationCard key={cta.id} cta={cta} />
                        ))}

                        {/* Add New Placeholder */}
                        <div className="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-surface hover:border-primary/40 transition-colors cursor-pointer min-h-[300px] group">
                            <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Plus size={24} className="text-muted group-hover:text-primary" />
                            </div>
                            <h3 className="font-medium text-gray-900 dark:text-white">Create New Lead Magnet</h3>
                            <p className="text-sm text-muted mt-1 max-w-xs">Set up a new popup, form, or landing page to collect emails and deliver assets.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};
