// frontend/app/page.js
"use client";

import { useRouter } from 'next/navigation';
import Dashboard from './dashboard';
import AddUserForm from './AddUser';

export default function Home() {
    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1>Welcome to the App</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row', // Cambiado a camelCase
                justifyContent: 'space-around', // Cambiado a camelCase
                alignItems: 'center', // Cambiado a camelCase
                padding: '20px',
                border: '1px solid #ccc'
            }}>
                <AddUserForm />
                <Dashboard />
            </div>
        </div>
    );
}
