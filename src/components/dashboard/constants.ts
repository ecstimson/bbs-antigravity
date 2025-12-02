import { Property, PropertyType, ServiceType, Lead, Activity, AnalyticsDataPoint, FileItem, Review, SearchConsoleDataPoint, Keyword } from './types';

export const MOCK_PROPERTIES: Property[] = [
    {
        id: 'prop_1',
        name: 'Wilmington Location',
        type: PropertyType.LOCATION,
        address: '123 Ocean Blvd, Wilmington, NC',
        isPrimary: true,
        connectedServices: [
            ServiceType.GOOGLE_ANALYTICS,
            ServiceType.GOOGLE_BUSINESS,
            ServiceType.GOOGLE_ADS,
            ServiceType.GOOGLE_SEARCH_CONSOLE,
            ServiceType.EMAIL_MARKETING
        ]
    },
    {
        id: 'prop_2',
        name: 'Raleigh Location',
        type: PropertyType.LOCATION,
        address: '456 Oak Ave, Raleigh, NC',
        connectedServices: [
            ServiceType.GOOGLE_ANALYTICS,
            ServiceType.GOOGLE_BUSINESS
        ]
    },
    {
        id: 'prop_3',
        name: 'Online Store Campaign',
        type: PropertyType.CAMPAIGN,
        website: 'shop.beachbird.com',
        connectedServices: [
            ServiceType.GOOGLE_ANALYTICS,
            ServiceType.GOOGLE_ADS,
            ServiceType.META_ADS
        ]
    }
];

export const MOCK_LEADS: Lead[] = [
    { id: 'l1', name: 'Sarah Johnson', company: 'Seaside Events', source: 'Google Ads', status: 'New', priority: 'High', email: 'sarah.j@example.com', phone: '(555) 123-4567', value: '$2,500', date: '2 mins ago' },
    { id: 'l2', name: 'Mike Peters', company: 'Individual', source: 'Organic Search', status: 'Contacted', priority: 'Medium', email: 'mike.p@example.com', phone: '(555) 987-6543', value: '$450', date: '2 hours ago' },
    { id: 'l3', name: 'Jenny Wilson', company: 'Local Boutique', source: 'Instagram', status: 'Qualified', priority: 'High', email: 'j.wilson@boutique.com', phone: '(555) 234-5678', value: '$5,000', date: 'Yesterday' },
    { id: 'l4', name: 'Robert Chen', company: 'Tech Solutions', source: 'Referral', status: 'New', priority: 'Low', email: 'rob.chen@techsol.com', phone: '(555) 876-5432', value: '$1,200', date: 'Yesterday' },
    { id: 'l5', name: 'Amanda Lowery', company: 'Coastal Realty', source: 'Google Ads', status: 'Converted', priority: 'High', email: 'amanda@coastal.com', phone: '(555) 345-6789', value: '$12,000', date: '2 days ago' },
    { id: 'l6', name: 'Tom Baker', company: 'Individual', source: 'Facebook', status: 'Contacted', priority: 'Low', email: 'tom.baker@example.com', phone: '(555) 456-7890', value: '$300', date: '3 days ago' },
];

export const MOCK_ACTIVITY: Activity[] = [
    { id: 'a1', type: 'lead', title: 'New Lead: Sarah Johnson', description: 'From Google Ads campaign "Wilmington SEO"', timestamp: '2 min ago', propertyId: 'prop_1' },
    { id: 'a2', type: 'review', title: 'New 5-Star Review', description: 'Received on Google Business Profile', timestamp: '1 hour ago', propertyId: 'prop_1' },
    { id: 'a3', type: 'system', title: 'Weekly Report Ready', description: 'Performance report for Raleigh Location', timestamp: '3 hours ago', propertyId: 'prop_2' },
    { id: 'a4', type: 'file', title: 'Menu_Summer_2024.pdf', description: 'Uploaded by Admin', timestamp: '5 hours ago', propertyId: 'prop_1' },
];

export const MOCK_FILES: FileItem[] = [
    { id: 'f1', name: 'Brand Assets', type: 'folder', uploadedBy: 'System', date: 'Jan 1, 2024' },
    { id: 'f2', name: 'Campaign Reports', type: 'folder', uploadedBy: 'System', date: 'Jan 1, 2024' },
    { id: 'f3', name: 'Summer_Menu_Final.pdf', type: 'pdf', size: '4.2 MB', uploadedBy: 'Sarah J.', date: '2 days ago' },
    { id: 'f4', name: 'Storefront_Exterior.jpg', type: 'image', size: '2.8 MB', uploadedBy: 'Mike P.', date: '1 week ago' },
    { id: 'f5', name: 'Q1_Financials.xlsx', type: 'spreadsheet', size: '1.1 MB', uploadedBy: 'Admin', date: '2 weeks ago' },
    { id: 'f6', name: 'Logo_Vector_Pack.zip', type: 'folder', size: '15 MB', uploadedBy: 'Design Team', date: '1 month ago' },
];

export const MOCK_REVIEWS: Review[] = [
    { id: 'r1', author: 'Jessica M.', rating: 5, content: 'Absolutely loved the atmosphere! The seafood was fresh and the service was impeccable.', source: 'Google', date: '2 hours ago', status: 'Pending' },
    { id: 'r2', author: 'David K.', rating: 4, content: 'Great food, but the wait time was a bit long on Friday night.', source: 'Yelp', date: '1 day ago', status: 'Replied', reply: 'Thanks for the feedback David! We are working on optimizing our seating process.' },
    { id: 'r3', author: 'Sarah W.', rating: 5, content: 'Best sunset view in Wilmington. Highly recommend the crab dip.', source: 'Facebook', date: '3 days ago', status: 'Replied', reply: 'Glad you enjoyed the view and the dip, Sarah!' },
    { id: 'r4', author: 'John D.', rating: 2, content: 'Order was incorrect and cold when it arrived.', source: 'Google', date: '1 week ago', status: 'Pending' },
];

export const MOCK_KEYWORDS: Keyword[] = [
    { id: 'k1', query: 'best seafood wilmington nc', clicks: 452, impressions: 2300, ctr: 19.6, position: 1.2 },
    { id: 'k2', query: 'ocean view restaurant menu', clicks: 380, impressions: 890, ctr: 42.7, position: 1.0 },
    { id: 'k3', query: 'waterfront dining near me', clicks: 215, impressions: 5400, ctr: 3.9, position: 4.5 },
    { id: 'k4', query: 'crab dip recipe', clicks: 120, impressions: 12000, ctr: 1.0, position: 8.2 },
    { id: 'k5', query: 'romantic dinner spots', clicks: 98, impressions: 3100, ctr: 3.1, position: 3.8 },
    { id: 'k6', query: 'live music weekend', clicks: 76, impressions: 1500, ctr: 5.0, position: 5.1 },
];

export const MOCK_CTAS = [
    { id: 1, name: 'Summer Guide PDF', type: 'Popup', views: 1240, leads: 186, active: true, sequenceName: 'Content Delivery', assets: ['Summer_Guide.pdf'] },
    { id: 2, name: 'Newsletter Footer', type: 'Inline Form', views: 3500, leads: 45, active: true, sequenceName: 'Welcome Series', assets: ['Welcome_Email_1'] },
    { id: 3, name: 'Free Consultation', type: 'Sticky Bar', views: 890, leads: 12, active: false, sequenceName: 'Sales Follow-up', assets: ['Booking_Link'] },
];

export const GENERATE_ANALYTICS_DATA = (days: number): AnalyticsDataPoint[] => {
    const data: AnalyticsDataPoint[] = [];
    for (let i = 0; i < days; i++) {
        data.push({
            date: `Day ${i + 1}`,
            visitors: Math.floor(Math.random() * 200) + 100,
            pageViews: Math.floor(Math.random() * 500) + 200,
            conversions: Math.floor(Math.random() * 15),
            spend: Math.floor(Math.random() * 100) + 20
        });
    }
    return data;
};

export const GENERATE_SEARCH_CONSOLE_DATA = (days: number): SearchConsoleDataPoint[] => {
    const data: SearchConsoleDataPoint[] = [];
    for (let i = 0; i < days; i++) {
        data.push({
            date: `Day ${i + 1}`,
            clicks: Math.floor(Math.random() * 50) + 10,
            impressions: Math.floor(Math.random() * 1000) + 200,
            ctr: Number((Math.random() * 5 + 1).toFixed(2)),
            position: Number((Math.random() * 10 + 1).toFixed(1))
        });
    }
    return data;
};

export const SERVICE_ICONS: Record<ServiceType, string> = {
    [ServiceType.GOOGLE_ANALYTICS]: '📊',
    [ServiceType.GOOGLE_ADS]: '💰',
    [ServiceType.GOOGLE_BUSINESS]: '🏪',
    [ServiceType.GOOGLE_SEARCH_CONSOLE]: '🔍',
    [ServiceType.META_ADS]: '♾️',
    [ServiceType.EMAIL_MARKETING]: '📧',
    [ServiceType.CALL_TRACKING]: '📞'
};

export const SERVICE_NAMES: Record<ServiceType, string> = {
    [ServiceType.GOOGLE_ANALYTICS]: 'Google Analytics',
    [ServiceType.GOOGLE_ADS]: 'Google Ads',
    [ServiceType.GOOGLE_BUSINESS]: 'Business Profile',
    [ServiceType.GOOGLE_SEARCH_CONSOLE]: 'Search Console',
    [ServiceType.META_ADS]: 'Meta Ads',
    [ServiceType.EMAIL_MARKETING]: 'Email Marketing',
    [ServiceType.CALL_TRACKING]: 'Call Tracking'
};
