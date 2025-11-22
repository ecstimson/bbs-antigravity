import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { MOCK_REVIEWS } from '../constants';
import { Star, MessageSquare, ThumbsUp, MoreHorizontal, ExternalLink } from 'lucide-react';

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

export const Reviews = () => {
  return (
    <div className="p-8 space-y-6 max-w-[1600px] mx-auto pb-20">
      
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Reputation Management</h1>
          <p className="text-muted mt-2">Monitor and respond to customer reviews.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="bg-surface px-4 py-2 rounded-lg border border-border flex items-center gap-3">
              <div className="flex flex-col">
                  <span className="text-[10px] text-muted uppercase tracking-wide">Avg Rating</span>
                  <span className="font-bold text-lg leading-none">4.6</span>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div className="flex flex-col">
                  <span className="text-[10px] text-muted uppercase tracking-wide">Total Reviews</span>
                  <span className="font-bold text-lg leading-none">1,248</span>
              </div>
           </div>
        </div>
      </div>

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
                              <h3 className="font-medium text-white">{review.author}</h3>
                              <div className="flex items-center gap-2 text-xs text-muted">
                                 <span>{review.source}</span>
                                 <span>•</span>
                                 <span>{review.date}</span>
                              </div>
                           </div>
                        </div>
                        
                        <StarRating rating={review.rating} />
                        
                        <p className="text-gray-300 text-sm leading-relaxed">
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
                           <button className="p-2 text-muted hover:text-white bg-surface border border-border rounded-md hover:bg-border transition-colors">
                              <ExternalLink size={14} />
                           </button>
                        </div>
                     </div>

                  </div>
               </CardContent>
            </Card>
         ))}
      </div>

    </div>
  );
};