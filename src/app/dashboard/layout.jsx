import Link from 'next/link';
import React from 'react';

const DashBoardLayout = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                {children}
                <label htmlFor="my-drawer-1" className="btn drawer-button">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><Link href='/dashboard'>Dashboard</Link></li>
                    <li><Link href='/dashboard/revenue'>Revenue</Link></li>
                    <li><Link href='/dashboard/revenue/profile'>Profile</Link></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default DashBoardLayout;