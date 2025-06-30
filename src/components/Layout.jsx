import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className='Layout'>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                        <li><Link to="/list1">List 1</Link></li>
                        <li><Link to="/list2">List 2</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {/* Content will be rendered here */}
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2025 React App</p>
            </footer>
        </div>
    )
}
