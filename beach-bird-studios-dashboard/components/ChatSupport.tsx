
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Paperclip, MoreVertical, ExternalLink, User, Smile } from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'agent' | 'system';
  name?: string;
  text: string;
  time: string;
  avatar?: string;
}

const INITIAL_MESSAGES: Message[] = [
  { 
    id: 1, 
    sender: 'system', 
    text: 'This chat is linked to Google Chat Space: "Beach Bird / Client Project A"', 
    time: 'Today' 
  },
  { 
    id: 2, 
    sender: 'agent', 
    name: 'Sarah (Account Mgr)', 
    text: 'Hi! Welcome to your new dashboard. Let us know if you have any questions about the multi-property setup.', 
    time: '09:30 AM',
    avatar: 'S'
  },
  { 
    id: 3, 
    sender: 'agent', 
    name: 'Mike (Dev)', 
    text: 'I just pushed the updates for the Wilmington location analytics. You should see them live now.', 
    time: '10:15 AM',
    avatar: 'M'
  }
];

export const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;
    
    const newMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate reply
    setTimeout(() => {
       setMessages(prev => [...prev, {
         id: Date.now() + 1,
         sender: 'agent',
         name: 'Sarah (Account Mgr)',
         text: 'Thanks for the message! We received it in our Google Chat space. I\'ll get back to you shortly.',
         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
         avatar: 'S'
       }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[380px] h-[500px] bg-surface border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-surface border-b border-border p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold shadow-inner">
                  BB
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-surface"></div>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Beach Bird Team</h3>
                <div className="flex items-center gap-1 text-xs text-muted">
                   <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
                   Online
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
               <button className="p-2 text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors" title="Open in Google Chat">
                 <ExternalLink size={16} />
               </button>
               <button 
                 onClick={() => setIsOpen(false)}
                 className="p-2 text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
               >
                 <X size={18} />
               </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                
                {msg.sender === 'system' ? (
                   <div className="w-full flex justify-center my-2">
                      <span className="text-[10px] text-muted bg-border/30 px-3 py-1 rounded-full uppercase tracking-wide">{msg.text}</span>
                   </div>
                ) : (
                    <div className={`flex gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {msg.sender === 'agent' && (
                        <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-xs font-bold text-muted shrink-0 mt-1">
                            {msg.avatar}
                        </div>
                    )}
                    
                    <div>
                        {msg.sender === 'agent' && <span className="text-[10px] text-muted ml-1 block mb-1">{msg.name}</span>}
                        <div 
                            className={`px-4 py-2.5 rounded-2xl text-sm shadow-sm ${
                            msg.sender === 'user' 
                                ? 'bg-primary text-white rounded-br-none' 
                                : 'bg-surface border border-border text-gray-200 rounded-bl-none'
                            }`}
                        >
                            {msg.text}
                        </div>
                        <span className={`text-[10px] text-muted mt-1 block ${msg.sender === 'user' ? 'text-right mr-1' : 'ml-1'}`}>
                            {msg.time}
                        </span>
                    </div>
                    </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-surface border-t border-border shrink-0">
            <form onSubmit={handleSend} className="flex items-end gap-2 bg-background border border-border rounded-xl p-2 focus-within:border-primary/50 transition-colors">
              <button type="button" className="p-2 text-muted hover:text-white transition-colors">
                <Paperclip size={18} />
              </button>
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                    }
                }}
                placeholder="Message the team..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-white placeholder-muted resize-none py-2 max-h-24 focus:outline-none"
                rows={1}
              />
              <button 
                type="submit" 
                disabled={!inputValue.trim()}
                className="p-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:hover:bg-primary"
              >
                <Send size={16} />
              </button>
            </form>
            <div className="text-[10px] text-center text-muted mt-2">
                Powered by Google Chat Integration
            </div>
          </div>

        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 w-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${
          isOpen 
            ? 'bg-surface border border-border text-white' 
            : 'bg-primary text-white hover:bg-primary-hover'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} className="fill-current" />}
        {!isOpen && (
            <span className="absolute top-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-error border-2 border-background"></span>
            </span>
        )}
      </button>
    </div>
  );
};
