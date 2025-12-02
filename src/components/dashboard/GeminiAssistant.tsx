"use client";

import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { X, Sparkles, Send, Bot, User as UserIcon, Loader2, Lightbulb } from 'lucide-react';
import { useDashboard } from './DashboardContext';

interface Message {
    id: string;
    role: 'user' | 'model';
    text: string;
}

interface GeminiAssistantProps {
    isOpen: boolean;
    onClose: () => void;
}

export const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ isOpen, onClose }) => {
    const { currentProperty } = useDashboard();
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'model',
            text: 'Hello! I am your Beach Bird AI assistant. I can help you analyze your dashboard data, explain metrics, or generate quick reports. How can I help you today?'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chatSession, setChatSession] = useState<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom on new messages
    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    // Initialize Chat Session when property changes or component mounts
    useEffect(() => {
        const initChat = async () => {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || 'mock-key' });

                const propertyName = currentProperty === 'all' ? 'All Properties' : currentProperty.name;
                const contextInfo = currentProperty === 'all'
                    ? "The user is viewing an aggregated overview of all their properties."
                    : `The user is currently viewing the dashboard for property: "${propertyName}" (${currentProperty.type}). Connected services: ${currentProperty.connectedServices.join(', ')}.`;

                const chat = ai.chats.create({
                    model: 'gemini-2.0-flash-exp',
                    config: {
                        systemInstruction: `You are a helpful, professional, and data-savvy AI assistant for the Beach Bird Studios Client Dashboard. 
            
            Your goal is to assist clients in understanding their marketing performance, navigating the interface, and generating insights.
            
            Dashboard Structure:
            - Overview: High-level metrics (Visitors, Ad Spend, Ratings, Leads).
            - Analytics: Detailed charts for traffic, devices, sources.
            - Leads: CRM-like list of potential clients.
            - Files: File manager for assets.
            - Reviews: Reputation management from Google/Yelp/Facebook.
            - Settings: Service connections management.
            
            Current Context: ${contextInfo}
            
            If the user asks for a report, format it nicely with bullet points. Keep answers concise but helpful.
            Assume the user is non-technical but cares about business results (ROI, Leads, Growth).`,
                    },
                });
                setChatSession(chat);
            } catch (error) {
                console.error("Failed to initialize AI chat:", error);
            }
        };

        if (isOpen && !chatSession) {
            initChat();
        }
    }, [isOpen, currentProperty, chatSession]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim() || !chatSession) return;

        const userMsg: Message = { id: Date.now().toString(), role: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await chatSession.sendMessageStream({ message: userMsg.text });

            let fullText = '';
            const modelMsgId = (Date.now() + 1).toString();

            // Add placeholder for streaming response
            setMessages(prev => [...prev, { id: modelMsgId, role: 'model', text: '' }]);

            for await (const chunk of response) {
                const c = chunk as GenerateContentResponse;
                if (c.text) {
                    fullText += c.text;
                    setMessages(prev =>
                        prev.map(msg => msg.id === modelMsgId ? { ...msg, text: fullText } : msg)
                    );
                }
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, {
                id: Date.now().toString(),
                role: 'model',
                text: "I'm sorry, I encountered an error processing your request. Please try again."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={onClose} />

            {/* Slide-over Panel */}
            <div className="fixed inset-y-0 right-0 w-full md:w-[450px] bg-surface border-l border-border shadow-2xl z-[60] flex flex-col animate-in slide-in-from-right duration-300 text-gray-100">

                {/* Header */}
                <div className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/50 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                            <Sparkles size={18} className="text-white" />
                        </div>
                        <div>
                            <h2 className="font-semibold text-white dark:text-white text-gray-900">Gemini Assistant</h2>
                            <p className="text-xs text-indigo-500 dark:text-indigo-400 flex items-center gap-1">
                                Powered by Google Gemini
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-muted hover:text-primary hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-background dark:bg-background">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>

                            {/* Avatar */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 ${msg.role === 'model'
                                    ? 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20'
                                    : 'bg-gray-200 dark:bg-border text-muted'
                                }`}>
                                {msg.role === 'model' ? <Bot size={16} /> : <UserIcon size={16} />}
                            </div>

                            {/* Bubble */}
                            <div className={`flex-1 space-y-2 max-w-[85%]`}>
                                <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                                        ? 'bg-primary text-white rounded-tr-none'
                                        : 'bg-white dark:bg-surface border border-gray-200 dark:border-border text-gray-800 dark:text-gray-200 rounded-tl-none'
                                    }`}>
                                    <p className="whitespace-pre-wrap">{msg.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                                <Bot size={16} />
                            </div>
                            <div className="bg-white dark:bg-surface border border-gray-200 dark:border-border rounded-2xl rounded-tl-none p-4 flex items-center gap-2">
                                <Loader2 size={16} className="animate-spin text-indigo-500 dark:text-indigo-400" />
                                <span className="text-xs text-muted">Thinking...</span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white dark:bg-surface border-t border-gray-200 dark:border-border">
                    {messages.length === 1 && (
                        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 no-scrollbar">
                            <button onClick={() => setInputValue("Summarize my ad performance")} className="whitespace-nowrap px-3 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 text-xs rounded-full border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors flex items-center gap-1.5">
                                <Lightbulb size={12} /> Summarize Ads
                            </button>
                            <button onClick={() => setInputValue("How do I connect Google Analytics?")} className="whitespace-nowrap px-3 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 text-xs rounded-full border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors flex items-center gap-1.5">
                                <Lightbulb size={12} /> Connect Analytics
                            </button>
                            <button onClick={() => setInputValue("Draft a weekly report email")} className="whitespace-nowrap px-3 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 text-xs rounded-full border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors flex items-center gap-1.5">
                                <Lightbulb size={12} /> Draft Report
                            </button>
                        </div>
                    )}

                    <form onSubmit={handleSend} className="relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ask anything about your data..."
                            className="w-full bg-gray-50 dark:bg-background border border-gray-200 dark:border-border rounded-xl py-3 pl-4 pr-12 text-sm text-gray-900 dark:text-white placeholder-muted focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || isLoading}
                            className="absolute right-2 top-2 p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:hover:bg-indigo-600"
                        >
                            <Send size={16} />
                        </button>
                    </form>
                    <div className="text-[10px] text-center text-muted mt-2">
                        AI can make mistakes. Please verify important information.
                    </div>
                </div>

            </div>
        </>
    );
};
