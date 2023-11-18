import React from 'react';

import Link from 'next/link';

const NavBar = () => {
    return (
        <nav style={{ backgroundColor: 'navy' }}>
            <ul>
                <li>
                    <Link href="/">
                        <a style={{ fontSize: '2rem', color: 'white' }}>Home</a>
                    </Link>
                    <Link href="/auth/login">
                        <a style={{ fontSize: '2rem', color: 'white' }}>Login</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
