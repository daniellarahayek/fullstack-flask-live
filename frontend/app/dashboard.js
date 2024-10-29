// frontend/app/dashboard.js
"use client"; // Required for client-side rendering

import { useState, useEffect } from 'react';

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/flask/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        
        fetchData();
    }, []);

    return (
        <div style={{ padding: '50px' }}>
            <h1>Dashboard</h1>
            <table style={{ width: '100%', border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
