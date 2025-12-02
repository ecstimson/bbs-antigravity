"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/dashboard/ui/Card';
import { Badge } from '@/components/dashboard/ui/Badge';
import { MOCK_REVIEWS } from '@/components/dashboard/constants';
import { Star, MessageSquare, ThumbsUp, MoreHorizontal, ExternalLink, Grid, List, Reply } from 'lucide-react';

const StarRating = ({ rating }: { rating: number }) => (
   <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
         <Star
            key={i}
            size={14}
            className={i < rating ? "fill-warning text-warning" : "text-muted"}
         />
      ))}
   </div>
);

export default function Reviews() {
   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

   return (
      <div className="p-8 space-y-6 max-w-[1600px] mx-auto pb-20">

         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
               <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Reputation Management</h1>
               <p className="text-muted mt-2">Monitor and respond to customer reviews.</p>
            </div>
            <div className="flex items-center gap-3">
               <div className="bg-surface px-4 py-2 rounded-lg border border-border flex items-center gap-3 mr-2">
                  <div className="flex flex-col">
                     <span className="text-[10px] text-muted uppercase tracking-wide">Avg Rating</span>
                     <span className="font-bold text-lg leading-none text-gray-900 dark:text-white">4.6</span>
                  </div>
                  <div className="h-8 w-px bg-border"></div>
                  <div className="flex flex-col">
                     <span className="text-[10px] text-muted uppercase tracking-wide">Total Reviews</span>
                     <span className="font-bold text-lg leading-none text-gray-900 dark:text-white">1,248</span>
                  </div>
               </div>
               <div className="flex items-center gap-2 border border-border rounded-lg p-1 bg-background">
                  <button
                     onClick={() => setViewMode('grid')}
                     className={`p-1.5 rounded transition-colors ${viewMode === 'grid' ? 'bg-surface text-gray-900 dark:text-white shadow-sm' : 'text-muted hover:text-gray-900 dark:hover:text-white'}`}
                  >
                     <Grid size={16} />
                  </button>
                  <button
                     onClick={() => setViewMode('list')}
                     className={`p-1.5 rounded transition-colors ${viewMode === 'list' ? 'bg-surface text-gray-900 dark:text-white shadow-sm' : 'text-muted hover:text-gray-900 dark:hover:text-white'}`}
                  >
                     <List size={16} />
                  </button>
               </div>
            </div>
         </div>

         {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 gap-4">
               {MOCK_REVIEWS.map(review => (
                  <Card key={review.id} className="hover:border-primary/30 transition-colors">
                     <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4 justify-between">

                           {/* Left: Content */}
                           <div className="flex-1 space-y-3">
                              <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white">
                                    {review.author.charAt(0)}
                                 </div>
                                 <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">{review.author}</h3>
                                    <div className="flex items-center gap-2 text-xs text-muted">
                                       <span>{review.source}</span>
                                       <span>•</span>
                                       <span>{review.date}</span>
                                    </div>
                                 </div>
                              </div>

                              <StarRating rating={review.rating} />

                              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                 "{review.content}"
                              </p>

                              {review.reply && (
                                 <div className="ml-4 pl-4 border-l-2 border-primary/30 py-2">
                                    <p className="text-xs text-primary font-semibold mb-1">Your Reply:</p>
                                    <p className="text-sm text-muted italic">{review.reply}</p>
                                 </div>
                              )}
                           </div>

                           {/* Right: Actions & Status */}
                           <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-2 min-w-[140px]">
                              <Badge variant={review.status === 'Replied' ? 'success' : 'warning'}>
                                 {review.status}
                              </Badge>

                              <div className="flex items-center gap-2 mt-2">
                                 {review.status === 'Pending' && (
                                    <button className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-md text-xs font-medium hover:bg-primary-hover transition-colors">
                                       <MessageSquare size={14} />
                                       Reply
                                    </button>
                                 )}
                                 <button className="p-2 text-muted hover:text-gray-900 dark:hover:text-white bg-surface border border-border rounded-md hover:bg-border transition-colors">
                                    <ExternalLink size={14} />
                                 </button>
                              </div>
                           </div>

                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>
         ) : (
            <Card>
               <CardContent className="p-0 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                     <thead className="bg-surface/50 border-b border-border text-muted font-medium">
                        <tr>
                           <th className="px-6 py-4">Author</th>
                           <th className="px-6 py-4">Rating</th>
                           <th className="px-6 py-4 w-1/3">Review</th>
                           <th className="px-6 py-4">Source</th>
                           <th className="px-6 py-4">Date</th>
                           <th className="px-6 py-4">Status</th>
                           <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-border">
                        {MOCK_REVIEWS.map(review => (
                           <tr key={review.id} className="hover:bg-surface/30 transition-colors group">
                              <td className="px-6 py-4">
                                 <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                                       {review.author.charAt(0)}
                                    </div>
                                    <span className="font-medium text-gray-900 dark:text-white">{review.author}</span>
                                 </div>
                              </td>
                              <td className="px-6 py-4">
                                 <StarRating rating={review.rating} />
                              </td>
                              <td className="px-6 py-4">
                                 <div className="max-w-md">
                                    <p className="truncate text-gray-700 dark:text-gray-300" title={review.content}>"{review.content}"</p>
                                    {review.reply && <p className="text-xs text-muted mt-1 flex items-center gap-1"><Reply size={10} /> You Replied</p>}
                                 </div>
                              </td>
                              <td className="px-6 py-4 text-muted">{review.source}</td>
                              <td className="px-6 py-4 text-muted">{review.date}</td>
                              <td className="px-6 py-4">
                                 <Badge variant={review.status === 'Replied' ? 'success' : 'warning'}>{review.status}</Badge>
                              </td>
                              <td className="px-6 py-4 text-right">
                                 <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {review.status === 'Pending' && (
                                       <button className="p-1.5 text-muted hover:text-primary hover:bg-surface rounded" title="Reply">
                                          <MessageSquare size={16} />
                                       </button>
                                    )}
                                    <button className="p-1.5 text-muted hover:text-primary hover:bg-surface rounded" title="View On Platform">
                                       <ExternalLink size={16} />
                                    </button>
                                    <button className="p-1.5 text-muted hover:text-gray-900 dark:hover:text-white hover:bg-surface rounded">
                                       <MoreHorizontal size={16} />
                                    </button>
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </CardContent>
            </Card>
         )}

      </div>
   );
};