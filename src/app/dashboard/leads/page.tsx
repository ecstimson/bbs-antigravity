"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/dashboard/ui/Card';
import { Badge } from '@/components/dashboard/ui/Badge';
import { MOCK_LEADS } from '@/components/dashboard/constants';
import { Search, Filter, Download, MoreHorizontal, Phone, Mail, X, Plus } from 'lucide-react';

export default function Leads() {
   const [searchTerm, setSearchTerm] = useState('');
   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

   const filteredLeads = MOCK_LEADS.filter(lead =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company?.toLowerCase().includes(searchTerm.toLowerCase())
   );

   const handleAddLead = (e: React.FormEvent) => {
      e.preventDefault();
      setIsAddModalOpen(false);
      // In a real app, this would add to the list
      alert("Lead added successfully!");
   }

   return (
      <div className="p-8 space-y-6 max-w-[1600px] mx-auto pb-20">

         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
               <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Lead Management</h1>
               <p className="text-muted mt-2">Track and manage potential client interactions.</p>
            </div>
            <div className="flex items-center gap-3">
               <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-hover transition-colors"
               >
                  <Plus size={16} />
                  Add Manual Lead
               </button>
            </div>
         </div>

         <Card>
            <CardContent className="p-0">
               {/* Toolbar */}
               <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="relative w-full sm:w-96">
                     <Search className="absolute left-3 top-2.5 text-muted" size={18} />
                     <input
                        type="text"
                        placeholder="Search leads by name or company..."
                        className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white placeholder-muted"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                     <button className="flex items-center gap-2 px-3 py-2 bg-surface border border-border rounded-lg text-sm hover:bg-border transition-colors text-muted hover:text-gray-900 dark:hover:text-white">
                        <Filter size={16} />
                        Filter
                     </button>
                     <button className="flex items-center gap-2 px-3 py-2 bg-surface border border-border rounded-lg text-sm hover:bg-border transition-colors text-muted hover:text-gray-900 dark:hover:text-white">
                        <Download size={16} />
                        Export
                     </button>
                  </div>
               </div>

               {/* Table */}
               <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                     <thead className="bg-surface/50 border-b border-border text-muted font-medium">
                        <tr>
                           <th className="px-6 py-4">Name</th>
                           <th className="px-6 py-4">Status</th>
                           <th className="px-6 py-4">Value</th>
                           <th className="px-6 py-4">Source</th>
                           <th className="px-6 py-4">Created</th>
                           <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-border">
                        {filteredLeads.map(lead => (
                           <tr key={lead.id} className="hover:bg-surface/30 transition-colors group">
                              <td className="px-6 py-4">
                                 <div className="flex flex-col">
                                    <span className="font-medium text-gray-900 dark:text-white">{lead.name}</span>
                                    <span className="text-xs text-muted">{lead.company || 'Individual'}</span>
                                    <div className="flex items-center gap-3 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                       <button className="text-muted hover:text-primary" title="Call"><Phone size={14} /></button>
                                       <button className="text-muted hover:text-primary" title="Email"><Mail size={14} /></button>
                                    </div>
                                 </div>
                              </td>
                              <td className="px-6 py-4">
                                 <Badge variant={
                                    lead.status === 'New' ? 'error' :
                                       lead.status === 'Converted' ? 'success' :
                                          lead.status === 'Qualified' ? 'warning' : 'default'
                                 }>
                                    {lead.status}
                                 </Badge>
                              </td>
                              <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">{lead.value}</td>
                              <td className="px-6 py-4 text-muted">{lead.source}</td>
                              <td className="px-6 py-4 text-muted">{lead.date}</td>
                              <td className="px-6 py-4 text-right">
                                 <button className="p-2 text-muted hover:text-gray-900 dark:hover:text-white hover:bg-border rounded-lg transition-colors">
                                    <MoreHorizontal size={16} />
                                 </button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>

               {/* Pagination Mock */}
               <div className="p-4 border-t border-border flex items-center justify-between text-xs text-muted">
                  <span>Showing 1-{filteredLeads.length} of {filteredLeads.length} leads</span>
                  <div className="flex gap-2">
                     <button className="px-3 py-1 border border-border rounded hover:bg-border disabled:opacity-50" disabled>Previous</button>
                     <button className="px-3 py-1 border border-border rounded hover:bg-border disabled:opacity-50" disabled>Next</button>
                  </div>
               </div>

            </CardContent>
         </Card>

         {/* Add Lead Modal */}
         {isAddModalOpen && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
               <div className="bg-surface border border-border rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-6 border-b border-border flex items-center justify-between">
                     <h3 className="text-lg font-bold text-gray-900 dark:text-white">Add New Lead</h3>
                     <button onClick={() => setIsAddModalOpen(false)} className="text-muted hover:text-gray-900 dark:hover:text-white transition-colors">
                        <X size={20} />
                     </button>
                  </div>
                  <form onSubmit={handleAddLead}>
                     <div className="p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                              <input required type="text" className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white" placeholder="Jane" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                              <input required type="text" className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white" placeholder="Doe" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-medium text-gray-900 dark:text-white">Company</label>
                           <input type="text" className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white" placeholder="Business Name" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                           <input required type="email" className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white" placeholder="jane@example.com" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-900 dark:text-white">Source</label>
                              <select className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white">
                                 <option>Google Ads</option>
                                 <option>Organic Search</option>
                                 <option>Referral</option>
                                 <option>Social Media</option>
                              </select>
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-900 dark:text-white">Status</label>
                              <select className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white">
                                 <option>New</option>
                                 <option>Contacted</option>
                                 <option>Qualified</option>
                              </select>
                           </div>
                        </div>
                     </div>
                     <div className="p-4 border-t border-border bg-background/50 flex justify-end gap-3">
                        <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">Add Lead</button>
                     </div>
                  </form>
               </div>
            </div>
         )}
      </div>
   );
};