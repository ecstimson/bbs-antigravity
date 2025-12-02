"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/dashboard/ui/Card';
import { MOCK_FILES } from '@/components/dashboard/constants';
import { Folder, FileText, Image, FileSpreadsheet, MoreVertical, UploadCloud, Search, Grid, List, Download, Trash2, Share2, X, CheckCircle } from 'lucide-react';

const FileIcon = ({ type, size = "md" }: { type: string, size?: "sm" | "md" }) => {
   const dims = size === "sm" ? "w-5 h-5" : "w-10 h-10";
   switch (type) {
      case 'folder': return <Folder className={`text-primary ${dims}`} />;
      case 'image': return <Image className={`text-purple-500 ${dims}`} />;
      case 'spreadsheet': return <FileSpreadsheet className={`text-success ${dims}`} />;
      default: return <FileText className={`text-gray-400 ${dims}`} />;
   }
};

export default function Files() {
   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
   const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
   const [isDragging, setIsDragging] = useState(false);

   const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(true);
   };

   const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
   };

   const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      // Handle file drop here
      setTimeout(() => setIsUploadModalOpen(false), 500);
   };

   return (
      <div className="p-8 space-y-6 max-w-[1600px] mx-auto pb-20">

         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
               <h1 className="text-3xl font-bold text-gray-900 dark:text-white">File Manager</h1>
               <p className="text-muted mt-2">Securely store and share project assets.</p>
            </div>
            <div className="flex items-center gap-3">
               <button
                  onClick={() => setIsUploadModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-hover transition-colors"
               >
                  <UploadCloud size={16} />
                  Upload File
               </button>
            </div>
         </div>

         <Card className="min-h-[600px]">
            <CardContent className="p-0 h-full flex flex-col">

               {/* Toolbar */}
               <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 justify-between items-center bg-surface/30">
                  <div className="relative w-full sm:w-96">
                     <Search className="absolute left-3 top-2.5 text-muted" size={18} />
                     <input
                        type="text"
                        placeholder="Search files..."
                        className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white placeholder-muted"
                     />
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

               {/* Breadcrumbs Mock */}
               <div className="px-6 py-3 text-sm text-muted border-b border-border/50 flex items-center gap-2">
                  <span className="text-primary font-medium hover:underline cursor-pointer">Root</span>
                  <span>/</span>
                  <span className="text-gray-900 dark:text-white">All Files</span>
               </div>

               {/* Content Area */}
               {viewMode === 'grid' ? (
                  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                     {MOCK_FILES.map(file => (
                        <div key={file.id} className="group relative bg-surface border border-border rounded-xl p-4 flex flex-col items-center text-center hover:bg-border/50 transition-colors cursor-pointer">

                           <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 p-1 hover:bg-background rounded transition-all text-muted hover:text-gray-900 dark:hover:text-white">
                              <MoreVertical size={16} />
                           </button>

                           <div className="mb-4 mt-2 transition-transform group-hover:scale-110 duration-300">
                              <FileIcon type={file.type} />
                           </div>

                           <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 truncate w-full" title={file.name}>{file.name}</h3>

                           <div className="text-xs text-muted mt-1 flex flex-col gap-0.5">
                              <span>{file.date}</span>
                              {file.size && <span>{file.size}</span>}
                           </div>

                        </div>
                     ))}

                     {/* Upload Placeholder */}
                     <div
                        onClick={() => setIsUploadModalOpen(true)}
                        className="border-2 border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer min-h-[180px]"
                     >
                        <UploadCloud className="text-muted mb-2" size={24} />
                        <span className="text-sm text-muted font-medium">Drop files here or click to upload</span>
                     </div>
                  </div>
               ) : (
                  <div className="overflow-x-auto">
                     <table className="w-full text-left text-sm">
                        <thead className="bg-surface/50 border-b border-border text-muted font-medium">
                           <tr>
                              <th className="px-6 py-4">Name</th>
                              <th className="px-6 py-4">Type</th>
                              <th className="px-6 py-4">Size</th>
                              <th className="px-6 py-4">Uploaded By</th>
                              <th className="px-6 py-4">Date</th>
                              <th className="px-6 py-4 text-right">Actions</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                           {MOCK_FILES.map(file => (
                              <tr key={file.id} className="hover:bg-surface/30 transition-colors group">
                                 <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                       <FileIcon type={file.type} size="sm" />
                                       <span className="font-medium text-gray-900 dark:text-white">{file.name}</span>
                                    </div>
                                 </td>
                                 <td className="px-6 py-4 text-muted capitalize">{file.type}</td>
                                 <td className="px-6 py-4 text-muted">{file.size || '--'}</td>
                                 <td className="px-6 py-4 text-muted">{file.uploadedBy}</td>
                                 <td className="px-6 py-4 text-muted">{file.date}</td>
                                 <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                       <button className="p-1.5 text-muted hover:text-primary hover:bg-surface rounded" title="Download">
                                          <Download size={16} />
                                       </button>
                                       <button className="p-1.5 text-muted hover:text-primary hover:bg-surface rounded" title="Share">
                                          <Share2 size={16} />
                                       </button>
                                       <button className="p-1.5 text-muted hover:text-error hover:bg-error/10 rounded" title="Delete">
                                          <Trash2 size={16} />
                                       </button>
                                    </div>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               )}

            </CardContent>
         </Card>

         {/* Upload Modal */}
         {isUploadModalOpen && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
               <div className="bg-surface border border-border rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-6 border-b border-border flex items-center justify-between">
                     <h3 className="text-lg font-bold text-gray-900 dark:text-white">Upload Files</h3>
                     <button onClick={() => setIsUploadModalOpen(false)} className="text-muted hover:text-gray-900 dark:hover:text-white transition-colors">
                        <X size={20} />
                     </button>
                  </div>
                  <div className="p-6 space-y-6">

                     <div
                        className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-colors ${isDragging ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-primary/5'}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                     >
                        <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mb-4">
                           <UploadCloud size={32} className="text-primary" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Click to upload or drag and drop</h4>
                        <p className="text-muted text-sm mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                     </div>

                     <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-background border border-border rounded-lg">
                           <div className="flex items-center gap-3">
                              <FileText className="text-blue-500" size={20} />
                              <div className="flex flex-col">
                                 <span className="text-sm font-medium text-gray-900 dark:text-white">Project_Brief_v2.pdf</span>
                                 <span className="text-xs text-muted">2.4 MB</span>
                              </div>
                           </div>
                           <CheckCircle size={18} className="text-success" />
                        </div>
                     </div>

                     <div className="flex justify-end gap-3">
                        <button onClick={() => setIsUploadModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Cancel</button>
                        <button onClick={() => setIsUploadModalOpen(false)} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">Upload 1 File</button>
                     </div>
                  </div>
               </div>
            </div>
         )}

      </div>
   );
};