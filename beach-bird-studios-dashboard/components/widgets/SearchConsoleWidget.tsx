import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Line } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { GENERATE_SEARCH_CONSOLE_DATA, MOCK_KEYWORDS } from '../../constants';
import { Search, ArrowUpRight, MousePointer2, Eye } from 'lucide-react';

const data = GENERATE_SEARCH_CONSOLE_DATA(14);

export const SearchConsoleWidget = () => {
  const [activeTab, setActiveTab] = useState<'performance' | 'keywords'>('performance');

  return (
    <Card className="col-span-1 lg:col-span-4 min-h-[450px]">
      <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-border/50">
        <div className="flex items-center gap-3">
           <div className="p-2 bg-surface rounded-lg border border-border text-orange-500">
              <Search size={20} />
           </div>
           <div>
              <CardTitle>Google Search Console</CardTitle>
              <div className="flex items-center gap-2 text-xs text-muted mt-1">
                 <span className="flex items-center gap-1"><MousePointer2 size={12}/> 1.2k Clicks</span>
                 <span>•</span>
                 <span className="flex items-center gap-1"><Eye size={12}/> 45k Impressions</span>
              </div>
           </div>
        </div>
        <div className="flex items-center gap-2">
           <div className="flex bg-surface rounded-lg border border-border p-1">
              <button 
                onClick={() => setActiveTab('performance')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${activeTab === 'performance' ? 'bg-primary text-white' : 'text-muted hover:text-white'}`}
              >
                Performance
              </button>
              <button 
                onClick={() => setActiveTab('keywords')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${activeTab === 'keywords' ? 'bg-primary text-white' : 'text-muted hover:text-white'}`}
              >
                Top Keywords
              </button>
           </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 h-[360px]">
        
        {activeTab === 'performance' ? (
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
                <defs>
                <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
                </defs>
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
                    yAxisId="left"
                    stroke="#71717a" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    dx={-10}
                />
                <YAxis 
                    yAxisId="right" 
                    orientation="right" 
                    stroke="#71717a" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    dx={10}
                />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px', color: '#fff' }}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Area 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="clicks" 
                    name="Clicks"
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorClicks)" 
                />
                <Area 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="impressions" 
                    name="Impressions"
                    stroke="#8b5cf6" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorImpressions)" 
                />
            </AreaChart>
            </ResponsiveContainer>
        ) : (
            <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
                <table className="w-full text-left text-sm">
                    <thead className="bg-surface/50 text-muted font-medium sticky top-0 backdrop-blur-sm">
                        <tr>
                            <th className="px-4 py-3 rounded-l-lg">Query</th>
                            <th className="px-4 py-3 text-right">Clicks</th>
                            <th className="px-4 py-3 text-right">Impr.</th>
                            <th className="px-4 py-3 text-right">CTR</th>
                            <th className="px-4 py-3 text-right rounded-r-lg">Pos</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                        {MOCK_KEYWORDS.map((kw) => (
                            <tr key={kw.id} className="hover:bg-surface/50 transition-colors group">
                                <td className="px-4 py-3 font-medium text-white group-hover:text-primary transition-colors">
                                    {kw.query}
                                </td>
                                <td className="px-4 py-3 text-right text-gray-300">{kw.clicks}</td>
                                <td className="px-4 py-3 text-right text-muted">{kw.impressions.toLocaleString()}</td>
                                <td className="px-4 py-3 text-right">
                                    <Badge variant={kw.ctr > 10 ? 'success' : 'default'}>{kw.ctr}%</Badge>
                                </td>
                                <td className="px-4 py-3 text-right text-muted">{kw.position}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 text-center">
                    <button className="text-xs text-primary hover:underline flex items-center justify-center gap-1 w-full">
                        View all 1,245 keywords <ArrowUpRight size={12} />
                    </button>
                </div>
            </div>
        )}

      </CardContent>
    </Card>
  );
};