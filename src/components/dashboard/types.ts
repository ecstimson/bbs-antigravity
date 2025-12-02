export enum PropertyType {
    LOCATION = 'Physical Location',
    WEBSITE = 'Website',
    CAMPAIGN = 'Marketing Campaign',
    BRAND = 'Brand Identity'
}

export enum ServiceType {
    GOOGLE_ANALYTICS = 'google_analytics',
    GOOGLE_ADS = 'google_ads',
    GOOGLE_BUSINESS = 'google_business',
    GOOGLE_SEARCH_CONSOLE = 'google_search_console',
    META_ADS = 'meta_ads',
    EMAIL_MARKETING = 'email',
    CALL_TRACKING = 'call_tracking'
}

export interface Property {
    id: string;
    name: string;
    type: PropertyType;
    address?: string;
    website?: string;
    isPrimary?: boolean;
    connectedServices: ServiceType[];
}

export interface AnalyticsDataPoint {
    date: string;
    visitors: number;
    pageViews: number;
    conversions?: number;
    spend?: number;
}

export interface SearchConsoleDataPoint {
    date: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
}

export interface Keyword {
    id: string;
    query: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
}

export interface Lead {
    id: string;
    name: string;
    company?: string;
    source: string;
    status: 'New' | 'Contacted' | 'Qualified' | 'Converted';
    priority: 'High' | 'Medium' | 'Low';
    email: string;
    phone: string;
    value: string;
    date: string;
}

export interface Activity {
    id: string;
    type: 'lead' | 'review' | 'system' | 'file';
    title: string;
    description: string;
    timestamp: string;
    propertyId: string;
}

export interface ServiceConnectionState {
    id: string;
    serviceType: ServiceType;
    isConnected: boolean;
    lastSynced?: string;
    accountName?: string;
    issues?: string;
}

export interface FileItem {
    id: string;
    name: string;
    type: 'folder' | 'image' | 'pdf' | 'spreadsheet' | 'doc';
    size?: string;
    uploadedBy: string;
    date: string;
}

export interface Review {
    id: string;
    author: string;
    rating: number;
    content: string;
    source: 'Google' | 'Yelp' | 'Facebook';
    date: string;
    status: 'Replied' | 'Pending';
    reply?: string;
}
