import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { MOCK_FILES } from '../constants';
import { Folder, FileText, Image, FileSpreadsheet, MoreVertical, UploadCloud, Search, Grid, List } from 'lucide-react';

const FileIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'folder': return <Folder className="text-primary w-10 h-10" />;
    case 'image': return <Image className="text-purple-500 w-10 h-10" />;
    case 'spreadsheet': return <FileSpreadsheet className="text-success w-10 h-10" />;
    default: return <FileText className="text-gray-400 w-10 h-10" />;
  }
};

export const Files = () => {
  return (
    <div className="p-8 space-y-6 max-w-[1600px] mx-auto pb-20">
       
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">File Manager</h1>
          <p className="text-muted mt-2">Securely store and share project assets.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-hover transition-colors">
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
                    className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary text-white placeholder-muted"
                  />
               </div>
               <div className="flex items-center gap-2 border border-border rounded-lg p-1 bg-background">
                  <button className="p-1.5 bg-surface rounded text-white shadow-sm"><Grid size={16} /></button>
                  <button className="p-1.5 text-muted hover:text-white hover:bg-surface rounded transition-colors"><List size={16} /></button>
               </div>
            </div>

            {/* Breadcrumbs Mock */}
            <div className="px-6 py-3 text-sm text-muted border-b border-border/50 flex items-center gap-2">
                <span className="text-primary font-medium hover:underline cursor-pointer">Root</span>
                <span>/</span>
                <span className="text-white">All Files</span>
            </div>

            {/* Grid Content */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
               {MOCK_FILES.map(file => (
                  <div key={file.id} className="group relative bg-surface border border-border rounded-xl p-4 flex flex-col items-center text-center hover:bg-border/50 transition-colors cursor-pointer">
                     
                     <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 p-1 hover:bg-background rounded transition-all text-muted hover:text-white">
                        <MoreVertical size={16} />
                     </button>

                     <div className="mb-4 mt-2 transition-transform group-hover:scale-110 duration-300">
                        <FileIcon type={file.type} />
                     </div>
                     
                     <h3 className="text-sm font-medium text-gray-200 truncate w-full" title={file.name}>{file.name}</h3>
                     
                     <div className="text-xs text-muted mt-1 flex flex-col gap-0.5">
                        <span>{file.date}</span>
                        {file.size && <span>{file.size}</span>}
                     </div>

                  </div>
               ))}

               {/* Upload Placeholder */}
               <div className="border-2 border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer min-h-[180px]">
                  <UploadCloud className="text-muted mb-2" size={24} />
                  <span className="text-sm text-muted font-medium">Drop files here or click to upload</span>
               </div>
            </div>

         </CardContent>
      </Card>

    </div>
  );
};