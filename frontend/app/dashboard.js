import { useState, useEffect } from 'react';

export default function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/api/flask/users');
            const result = await response.json();
            setData(result);
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
                        {/* Agrega más encabezados según tus datos */}
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            {/* Agrega más celdas según tus datos */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
