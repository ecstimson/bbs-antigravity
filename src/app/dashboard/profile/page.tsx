"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/dashboard/ui/Card';
import { User, Mail, Phone, Shield, Bell, LogOut, Save, Lock, Camera, UploadCloud, Facebook, Linkedin, Instagram, Chrome, AppWindow, X } from 'lucide-react';

export default function Profile() {
    const [formData, setFormData] = useState({
        name: 'Sarah Johnson',
        email: 'sarah.j@beachbird.com',
        phone: '(555) 123-4567',
        role: 'Account Manager'
    });

    const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to save would go here
        alert('Profile updated successfully!');
    };

    const handlePasswordUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsPasswordModalOpen(false);
        alert('Password updated successfully!');
    }

    return (
        <div className="p-8 space-y-6 max-w-4xl mx-auto pb-20 relative">

            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Account Profile</h1>
                <p className="text-muted mt-2">Manage your personal information and preferences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* User Info Card */}
                <Card className="md:col-span-1 h-fit">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="relative group cursor-pointer" onClick={() => setIsAvatarModalOpen(true)}>
                            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-2xl font-bold text-white mb-4 border-4 border-background shadow-lg group-hover:opacity-90 transition-opacity">
                                SJ
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity mb-4">
                                <div className="bg-black/50 rounded-full w-24 h-24 flex items-center justify-center text-white">
                                    <Camera size={24} />
                                </div>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{formData.name}</h2>
                        <p className="text-sm text-muted">{formData.role}</p>
                        <div className="mt-6 w-full space-y-2">
                            <button
                                onClick={() => setIsAvatarModalOpen(true)}
                                className="w-full py-2 px-4 rounded-lg border border-border text-sm font-medium hover:bg-surface transition-colors text-gray-900 dark:text-white flex items-center justify-center gap-2"
                            >
                                <Camera size={16} /> Change Avatar
                            </button>
                        </div>
                    </CardContent>
                </Card>

                {/* Details Form */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Personal Details</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <form onSubmit={handleSave} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted">Full Name</label>
                                    <div className="relative">
                                        <User size={16} className="absolute left-3 top-3 text-muted" />
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted">Role</label>
                                    <input
                                        type="text"
                                        value={formData.role}
                                        disabled
                                        className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-muted cursor-not-allowed"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted">Email Address</label>
                                    <div className="relative">
                                        <Mail size={16} className="absolute left-3 top-3 text-muted" />
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted">Phone Number</label>
                                    <div className="relative">
                                        <Phone size={16} className="absolute left-3 top-3 text-muted" />
                                        <input
                                            type="text"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors flex items-center gap-2">
                                    <Save size={16} /> Save Changes
                                </button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Preferences */}
                <Card className="md:col-span-3">
                    <CardHeader>
                        <CardTitle>Preferences & Security</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between py-2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-surface rounded-lg border border-border"><Bell size={20} className="text-muted" /></div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 dark:text-white">Email Notifications</h3>
                                        <p className="text-sm text-muted">Receive daily summary reports</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between py-2 border-t border-border">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-surface rounded-lg border border-border"><Shield size={20} className="text-muted" /></div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h3>
                                        <p className="text-sm text-muted">Add an extra layer of security to your account</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between py-2 border-t border-border">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-surface rounded-lg border border-border"><Lock size={20} className="text-muted" /></div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 dark:text-white">Password</h3>
                                        <p className="text-sm text-muted">Last changed 3 months ago</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsPasswordModalOpen(true)}
                                    className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white bg-surface border border-border rounded-lg hover:bg-border transition-colors"
                                >
                                    Change Password
                                </button>
                            </div>

                            <div className="pt-4 border-t border-border">
                                <button className="text-error text-sm font-medium hover:underline flex items-center gap-2">
                                    <LogOut size={16} /> Sign out of all devices
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Avatar Modal */}
            {isAvatarModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-surface border border-border rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-border flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Update Profile Photo</h3>
                            <button onClick={() => setIsAvatarModalOpen(false)} className="text-muted hover:text-gray-900 dark:hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 space-y-6">

                            {/* Upload Area */}
                            <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer group">
                                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <UploadCloud size={24} className="text-muted group-hover:text-primary" />
                                </div>
                                <p className="text-sm font-medium text-gray-900 dark:text-white">Click to upload image</p>
                                <p className="text-xs text-muted mt-1">SVG, PNG, JPG or GIF (max. 2MB)</p>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-border" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-surface px-2 text-muted">Or import from</span>
                                </div>
                            </div>

                            {/* Social Connections */}
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                                <button className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border hover:bg-border/50 hover:border-primary/30 transition-colors group">
                                    <div className="text-[#1877F2] p-2 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform"><Facebook size={20} /></div>
                                    <span className="text-[10px] font-medium text-muted group-hover:text-gray-900 dark:group-hover:text-white">Facebook</span>
                                </button>
                                <button className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border hover:bg-border/50 hover:border-primary/30 transition-colors group">
                                    <div className="text-[#C13584] p-2 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform"><Instagram size={20} /></div>
                                    <span className="text-[10px] font-medium text-muted group-hover:text-gray-900 dark:group-hover:text-white">Instagram</span>
                                </button>
                                <button className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border hover:bg-border/50 hover:border-primary/30 transition-colors group">
                                    <div className="text-[#0077b5] p-2 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform"><Linkedin size={20} /></div>
                                    <span className="text-[10px] font-medium text-muted group-hover:text-gray-900 dark:group-hover:text-white">LinkedIn</span>
                                </button>
                                <button className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border hover:bg-border/50 hover:border-primary/30 transition-colors group">
                                    <div className="text-gray-900 p-2 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform"><Chrome size={20} /></div>
                                    <span className="text-[10px] font-medium text-muted group-hover:text-gray-900 dark:group-hover:text-white">Google</span>
                                </button>
                                <button className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border hover:bg-border/50 hover:border-primary/30 transition-colors group">
                                    <div className="text-[#00a4ef] p-2 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform"><AppWindow size={20} /></div>
                                    <span className="text-[10px] font-medium text-muted group-hover:text-gray-900 dark:group-hover:text-white">Microsoft</span>
                                </button>
                            </div>

                        </div>
                        <div className="p-4 border-t border-border bg-background/50 flex justify-end gap-3">
                            <button onClick={() => setIsAvatarModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Cancel</button>
                            <button onClick={() => setIsAvatarModalOpen(false)} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">Save Photo</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Password Modal */}
            {isPasswordModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-surface border border-border rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-border flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Change Password</h3>
                            <button onClick={() => setIsPasswordModalOpen(false)} className="text-muted hover:text-gray-900 dark:hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handlePasswordUpdate}>
                            <div className="p-6 space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                                    <input type="password" placeholder="••••••••" className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                    <input type="password" placeholder="••••••••" className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white" />
                                    <p className="text-xs text-muted">Minimum 8 characters, must include a number and a symbol.</p>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900 dark:text-white">Confirm New Password</label>
                                    <input type="password" placeholder="••••••••" className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white" />
                                </div>
                            </div>
                            <div className="p-4 border-t border-border bg-background/50 flex justify-end gap-3">
                                <button type="button" onClick={() => setIsPasswordModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">Update Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};
