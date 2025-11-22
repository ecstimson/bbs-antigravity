import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  LayoutDashboard,
  PieChart,
  Users,
  FolderOpen,
  MessageSquare,
  Settings,
  LogOut
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'Analytics', icon: PieChart, path: '/dashboard/analytics' },
  { label: 'Leads', icon: Users, path: '/dashboard/leads' },
  { label: 'Files', icon: FolderOpen, path: '/dashboard/files' },
  { label: 'Reviews', icon: MessageSquare, path: '/dashboard/reviews' },
];

const SETTINGS_ITEMS = [
  { label: 'Settings', icon: Settings, path: '/dashboard/settings/services' },
];

export const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="w-64 h-screen bg-black/50 border-r border-border flex flex-col fixed left-0 top-0">
      <div className="h-16 flex items-center px-6 border-b border-border bg-black/20">
        <div className="flex items-center gap-2 text-primary font-bold text-xl">
          <Image src="/logos/icon-logo.svg" alt="Logo" width={32} height={32} className="w-8 h-8" />
          <span>BeachBird</span>
        </div>
      </div>

      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <div className="px-3 mb-2 text-xs font-semibold text-muted uppercase tracking-wider">Overview</div>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(item.path)
              ? 'bg-primary/10 text-primary'
              : 'text-gray-400 hover:text-gray-100 hover:bg-white/5'
              }`}
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}

        <div className="mt-8 px-3 mb-2 text-xs font-semibold text-muted uppercase tracking-wider">Configuration</div>
        {SETTINGS_ITEMS.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${pathname?.startsWith('/dashboard/settings')
              ? 'bg-primary/10 text-primary'
              : 'text-gray-400 hover:text-gray-100 hover:bg-white/5'
              }`}
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
      </div>

      <div className="p-4 border-t border-border">
        <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-gray-400 hover:text-error hover:bg-error/10 transition-colors">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </div>
  );
};