"use client";

import React from 'react';
import Link from 'next/link';
import { useDashboard } from '@/components/dashboard/DashboardContext';
import { Card, CardContent } from '@/components/dashboard/ui/Card';
import { Badge } from '@/components/dashboard/ui/Badge';
import { AnalyticsWidget } from '@/components/dashboard/widgets/AnalyticsWidget';
import { AdsWidget } from '@/components/dashboard/widgets/AdsWidget';
import { ProjectGanttWidget } from '@/components/dashboard/widgets/ProjectGanttWidget';
import { Users, TrendingUp, Star, DollarSign } from 'lucide-react';
import { MOCK_ACTIVITY, MOCK_LEADS, SERVICE_ICONS, SERVICE_NAMES } from '@/components/dashboard/constants';
import { ServiceType } from '@/components/dashboard/types';

const StatCard = ({ title, value, subtext, icon: Icon, trend }: any) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-muted text-sm font-medium">{title}</span>
        <div className="p-2 bg-surface rounded-lg border border-border text-primary">
          <Icon size={20} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">{value}</span>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-success flex items-center gap-0.5">
            <TrendingUp size={12} /> {trend}
          </span>
          <span className="text-muted">{subtext}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Overview() {
  const { currentProperty, allProperties } = useDashboard();

  // Determine what to show based on connected services or if "All" is selected
  const showAnalytics = currentProperty === 'all' || currentProperty.connectedServices.includes(ServiceType.GOOGLE_ANALYTICS);
  const showAds = currentProperty === 'all' || currentProperty.connectedServices.includes(ServiceType.GOOGLE_ADS);
  const showReviews = currentProperty === 'all' || currentProperty.connectedServices.includes(ServiceType.GOOGLE_BUSINESS);

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto pb-20">

      {/* Welcome / Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {currentProperty === 'all' ? 'All Properties Overview' : currentProperty.name}
          </h1>
          <p className="text-muted mt-2">
            {currentProperty === 'all'
              ? `Aggregated metrics across ${allProperties.length} properties.`
              : 'Real-time performance metrics and insights.'}
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white dark:bg-white text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors border border-gray-200 dark:border-transparent">
            Download Report
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {showAnalytics ? (
          <StatCard title="Total Visitors" value="12,450" trend="+12.5%" subtext="vs last 30 days" icon={Users} />
        ) : (
          <Card className="border-dashed border-border bg-transparent flex items-center justify-center text-muted">Connect Analytics</Card>
        )}

        {showAds ? (
          <StatCard title="Ad Spend" value="$3,240" trend="+4.2%" subtext="vs last 30 days" icon={DollarSign} />
        ) : (
          <Card className="border-dashed border-border bg-transparent flex items-center justify-center text-muted">Connect Ads</Card>
        )}

        {showReviews ? (
          <StatCard title="Avg Rating" value="4.8" trend="+0.2" subtext="12 new reviews" icon={Star} />
        ) : (
          <Card className="border-dashed border-border bg-transparent flex items-center justify-center text-muted">Connect GMB</Card>
        )}

        <StatCard title="New Leads" value="48" trend="+24%" subtext="8 High Priority" icon={Users} />
      </div>

      {/* Service Status Strip */}
      <div className="bg-surface border border-border rounded-xl p-4 flex flex-wrap gap-4 items-center">
        <span className="text-sm font-medium text-muted px-2">Connected Services:</span>
        {currentProperty !== 'all' && currentProperty.connectedServices.map(service => (
          <Badge key={service} variant="success">
            {SERVICE_ICONS[service]} {SERVICE_NAMES[service]}
          </Badge>
        ))}
        {currentProperty !== 'all' && currentProperty.connectedServices.length < 5 && (
          <Badge variant="outline">
            + Connect More
          </Badge>
        )}
        {currentProperty === 'all' && (
          <span className="text-sm text-muted italic">Select a specific property to manage connections.</span>
        )}
      </div>

      {/* Project Timeline / Gantt Chart */}
      <ProjectGanttWidget />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">

        {/* Left Column: Charts */}
        <div className="lg:col-span-4 space-y-6">
          {showAnalytics && <AnalyticsWidget />}
          {showAds && <AdsWidget />}
        </div>

        {/* Right Column: Feeds */}
        <div className="lg:col-span-3 space-y-6">

          {/* Leads Widget (Native) */}
          <Card className="h-[400px] flex flex-col">
            <CardContent className="p-0 flex-1 flex flex-col">
              <div className="p-6 pb-4 border-b border-border flex justify-between items-center">
                <h3 className="font-medium text-gray-900 dark:text-white">Recent Leads</h3>
                <Link href="/dashboard/leads" className="text-xs text-primary hover:text-primary-hover hover:underline">View All</Link>
              </div>
              <div className="overflow-y-auto flex-1">
                {MOCK_LEADS.map(lead => (
                  <div key={lead.id} className="p-4 border-b border-border/50 hover:bg-border/20 transition-colors group cursor-pointer">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-sm text-gray-900 dark:text-white group-hover:text-primary transition-colors">{lead.name}</span>
                      <span className="text-xs text-muted">{lead.date}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-muted">{lead.source} • {lead.company || 'Individual'}</div>
                      <Badge variant={lead.priority === 'High' ? 'error' : 'default'}>{lead.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Activity Feed */}
          <Card className="flex-1">
            <CardContent className="p-6">
              <h3 className="font-medium mb-4 text-gray-900 dark:text-white">Live Activity</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:w-0.5 before:-translate-x-1/2 before:bg-border before:h-full">
                {MOCK_ACTIVITY.map(act => (
                  <div key={act.id} className="relative flex items-start gap-4">
                    <div className="absolute left-0 ml-2.5 -translate-x-1/2 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
                    <div className="pl-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{act.title}</p>
                      <p className="text-xs text-muted mt-0.5">{act.description}</p>
                      <p className="text-[10px] text-muted mt-1 uppercase tracking-wide">{act.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};