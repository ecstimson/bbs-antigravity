"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  PieChart,
  Users,
  FolderOpen,
  MessageSquare,
  Settings,
  LogOut,
  Bird,
  X
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'Analytics', icon: PieChart, path: '/dashboard/analytics' },
  { label: 'Leads', icon: Users, path: '/dashboard/leads' },
  { label: 'Files', icon: FolderOpen, path: '/dashboard/files' },
  { label: 'Reviews', icon: MessageSquare, path: '/dashboard/reviews' },
];

const SETTINGS_ITEMS = [
  { label: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <div className={`
        fixed top-0 left-0 h-screen w-64 bg-zinc-900 border-r border-zinc-800
        flex flex-col z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 shadow-2xl md:shadow-none
      `}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-800 bg-zinc-900">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <Bird className="w-8 h-8" />
            <span>BeachBird</span>
          </div>
          <button
            onClick={onClose}
            className="md:hidden p-1 text-zinc-400 hover:text-white rounded-md"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto custom-scrollbar">
          <div className="px-3 mb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Overview</div>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(item.path)
                ? 'bg-primary/10 text-primary'
                : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
                }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}

          <div className="mt-8 px-3 mb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Configuration</div>
          {SETTINGS_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${pathname.startsWith('/dashboard/settings')
                ? 'bg-primary/10 text-primary'
                : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
                }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-zinc-800 bg-zinc-900">
          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-zinc-400 hover:text-error hover:bg-error/10 transition-colors"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};