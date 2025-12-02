import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/dashboard/ui/Card';
import { GENERATE_ANALYTICS_DATA } from '@/components/dashboard/constants';
import { Badge } from '@/components/dashboard/ui/Badge';

const data = GENERATE_ANALYTICS_DATA(7);

export const AdsWidget = () => {
  return (
    <Card className="col-span-1 lg:col-span-3 h-[400px]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Ads Performance</CardTitle>
        <Badge variant="success">ROAS: 4.2x</Badge>
      </CardHeader>
      <CardContent className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
            <XAxis
              dataKey="date"
              stroke="#71717a"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke="#71717a"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dx={-10}
              tickFormatter={(val) => `$${val}`}
            />
            <Tooltip
              cursor={{ fill: '#27272a' }}
              contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px', color: '#fff' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar dataKey="spend" name="Cost" fill="#ef4444" radius={[4, 4, 0, 0]} />
            <Bar dataKey="conversions" name="Conversions" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};