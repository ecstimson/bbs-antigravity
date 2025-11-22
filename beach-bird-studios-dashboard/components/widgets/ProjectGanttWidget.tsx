import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Calendar, MoreHorizontal } from 'lucide-react';

const TASKS = [
  { id: 1, name: 'Discovery & Strategy', start: 0, duration: 15, status: 'completed', owner: 'Sarah' },
  { id: 2, name: 'Wireframing', start: 15, duration: 15, status: 'completed', owner: 'Design Team' },
  { id: 3, name: 'Visual Design', start: 30, duration: 20, status: 'completed', owner: 'Design Team' },
  { id: 4, name: 'Development Phase 1', start: 45, duration: 25, status: 'in-progress', owner: 'Dev Team' },
  { id: 5, name: 'Content Integration', start: 60, duration: 20, status: 'in-progress', owner: 'Content' },
  { id: 6, name: 'QA & Launch', start: 85, duration: 15, status: 'pending', owner: 'QA' },
];

export const ProjectGanttWidget = () => {
  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between border-b border-border/50 pb-4">
        <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Calendar size={20} />
            </div>
            <div>
                <CardTitle>Project Timeline</CardTitle>
                <p className="text-xs text-muted mt-1">Website Redesign & Rebranding Campaign</p>
            </div>
        </div>
        <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-6 mr-4 text-xs text-muted">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span>Completed</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span>In Progress</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-border"></div>
                    <span>Pending</span>
                </div>
            </div>
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-muted hover:text-white">
                <MoreHorizontal size={18} />
            </button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="relative">
           {/* Grid Background */}
           <div className="absolute inset-0 flex justify-between pointer-events-none">
              {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-full w-px bg-border/30 border-dashed border-l border-border/30 first:bg-transparent last:bg-transparent"></div>
              ))}
           </div>
           
           {/* Timeline Labels */}
           <div className="flex justify-between text-xs font-medium text-muted mb-6 px-1">
             <span>Jan 1</span>
             <span>Jan 15</span>
             <span>Feb 1</span>
             <span>Feb 15</span>
             <span>Mar 1</span>
             <span>Mar 15</span>
           </div>

           {/* Tasks */}
           <div className="space-y-4 relative z-10">
              {/* Current Date Marker */}
              <div className="absolute top-[-24px] bottom-0 left-[55%] w-px bg-primary/50 z-20 hidden md:block">
                  <div className="absolute -top-1 -left-[3.5px] w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>
                  <div className="absolute -top-6 -left-6 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded">Today</div>
              </div>

              {TASKS.map(task => (
                <div key={task.id} className="flex items-center gap-4 group">
                   <div className="w-32 md:w-40 text-sm font-medium text-gray-400 shrink-0 truncate">{task.name}</div>
                   <div className="flex-1 h-7 bg-surface rounded-full relative overflow-hidden">
                      {/* Bar */}
                      <div
                        className={`absolute h-full rounded-full text-[10px] flex items-center pl-3 font-medium transition-all duration-500 hover:brightness-110 cursor-pointer
                            ${task.status === 'completed' ? 'bg-success/20 border border-success/20 text-success/80' : ''}
                            ${task.status === 'in-progress' ? 'bg-primary/20 border border-primary/20 text-primary shadow-[0_0_15px_rgba(14,165,233,0.1)]' : ''}
                            ${task.status === 'pending' ? 'bg-border/40 text-muted border border-white/5' : ''}
                        `}
                        style={{
                            left: `${task.start}%`,
                            width: `${task.duration}%`
                        }}
                      >
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </CardContent>
    </Card>
  );
};