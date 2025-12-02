"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Building2, Check, Plus } from 'lucide-react';
import { Property } from './types';
import { Badge } from './ui/Badge';

interface PropertySelectorProps {
  properties: Property[];
  activePropertyId: string | 'all';
  onChange: (id: string | 'all') => void;
}

export const PropertySelector: React.FC<PropertySelectorProps> = ({
  properties,
  activePropertyId,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeProperty = activePropertyId === 'all'
    ? { name: 'All Properties Overview' }
    : properties.find(p => p.id === activePropertyId);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 bg-surface border border-border rounded-lg hover:bg-border/50 transition-colors w-40 md:w-64 justify-between"
      >
        <div className="flex items-center gap-2 truncate">
          <div className="bg-primary/20 p-1 rounded hidden sm:block">
            <Building2 size={16} className="text-primary" />
          </div>
          <span className="truncate text-left">{activeProperty?.name}</span>
        </div>
        <ChevronDown size={16} className={`text-muted shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 md:w-80 bg-surface border border-border rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          <div className="p-2 border-b border-border">
            <button
              onClick={() => { onChange('all'); setIsOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${activePropertyId === 'all' ? 'bg-primary/10 text-primary' : 'hover:bg-border text-gray-900 dark:text-gray-200'}`}
            >
              <div className="flex items-center gap-3">
                <Building2 size={16} />
                <span>All Properties Overview</span>
              </div>
              {activePropertyId === 'all' && <Check size={16} />}
            </button>
          </div>

          <div className="p-2 max-h-64 overflow-y-auto space-y-1">
            <div className="px-3 py-1 text-xs font-semibold text-muted uppercase tracking-wider">Your Properties</div>
            {properties.map(prop => (
              <button
                key={prop.id}
                onClick={() => { onChange(prop.id); setIsOpen(false); }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${activePropertyId === prop.id ? 'bg-primary/10 text-primary' : 'hover:bg-border text-gray-900 dark:text-gray-200'}`}
              >
                <div className="flex flex-col items-start text-left gap-0.5 overflow-hidden">
                  <span className="font-medium truncate w-36 md:w-48">{prop.name}</span>
                  <span className="text-[10px] text-muted">{prop.type}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge variant={prop.connectedServices.length > 2 ? 'success' : 'warning'}>
                    {prop.connectedServices.length}
                  </Badge>
                </div>
              </button>
            ))}
          </div>

          <div className="p-2 border-t border-border bg-surface">
            <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-gray-900 dark:hover:text-white hover:bg-border transition-colors">
              <Plus size={16} />
              Add New Property
            </button>
          </div>
        </div>
      )}
    </div>
  );
};