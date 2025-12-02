"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/dashboard/ui/Card';
import { AnalyticsWidget } from '@/components/dashboard/widgets/AnalyticsWidget';
import { AdsWidget } from '@/components/dashboard/widgets/AdsWidget';
import { SearchConsoleWidget } from '@/components/dashboard/widgets/SearchConsoleWidget';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';
import { ArrowUp, ArrowDown, Download, Calendar } from 'lucide-react';

const DEVICE_DATA = [
  { name: 'Mobile', value: 65, color: '#0ea5e9' },
  { name: 'Desktop', value: 25, color: '#10b981' },
  { name: 'Tablet', value: 10, color: '#f59e0b' },
];

const SOURCE_DATA = [
  { name: 'Organic', value: 400, fill: '#0ea5e9' },
  { name: 'Direct', value: 300, fill: '#8b5cf6' },
  { name: 'Social', value: 200, fill: '#f59e0b' },
  { name: 'Paid', value: 150, fill: '#ef4444' },
];

const CONVERSION_DATA = [
  { name: 'Mon', calls: 4, forms: 2 },
  { name: 'Tue', calls: 3, forms: 5 },
  { name: 'Wed', calls: 7, forms: 3 },
  { name: 'Thu', calls: 5, forms: 4 },
  { name: 'Fri', calls: 8, forms: 6 },
  { name: 'Sat', calls: 2, forms: 1 },
  { name: 'Sun', calls: 1, forms: 1 },
];

const MetricCard = ({ title, value, change, isPositive }: { title: string, value: string, change: string, isPositive: boolean }) => (
  <Card>
    <CardContent className="p-6">
      <p className="text-sm text-muted mb-2">{title}</p>
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{value}</h3>
        <div className={`flex items-center text-sm font-medium ${isPositive ? 'text-success' : 'text-error'}`}>
          {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          <span>{change}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Analytics() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto pb-20">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
          <p className="text-muted mt-2">Comprehensive performance metrics across all channels.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-sm hover:bg-border transition-colors text-gray-900 dark:text-gray-200">
            <Calendar size={16} />
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-hover transition-colors">
            <Download size={16} />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Sessions" value="24,593" change="12% vs last month" isPositive={true} />
        <MetricCard title="Bounce Rate" value="42.3%" change="2.1% vs last month" isPositive={false} />
        <MetricCard title="Avg. Session Duration" value="2m 45s" change="15s vs last month" isPositive={true} />
        <MetricCard title="Conversion Rate" value="3.8%" change="0.4% vs last month" isPositive={true} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsWidget title="Traffic Trends" />
        <AdsWidget />
      </div>

      {/* Added Search Console Widget */}
      <div className="grid grid-cols-1 gap-6">
        <SearchConsoleWidget />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Device Breakdown */}
        <Card className="col-span-1 h-[350px]">
          <CardHeader>
            <CardTitle>Device Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={DEVICE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {DEVICE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#18181b', borderRadius: '8px', borderColor: '#27272a' }} />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card className="col-span-1 h-[350px]">
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={SOURCE_DATA} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" horizontal={true} vertical={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={60} tick={{ fill: '#a1a1a1', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#18181b', borderRadius: '8px', borderColor: '#27272a' }} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Conversions by Day */}
        <Card className="col-span-1 h-[350px]">
          <CardHeader>
            <CardTitle>Weekly Conversions</CardTitle>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={CONVERSION_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: '#a1a1a1', fontSize: 12 }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tick={{ fill: '#a1a1a1', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#18181b', borderRadius: '8px', borderColor: '#27272a' }} />
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" dataKey="calls" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Phone Calls" />
                <Line type="monotone" dataKey="forms" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Form Fills" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

    </div>
  );
};