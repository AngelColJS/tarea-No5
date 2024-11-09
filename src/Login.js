import React, { useState } from 'react';
import './Login.css'; // Importa el archivo CSS

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Usuario:', username);
        console.log('Contraseña:', password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Usuario:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Contraseña:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
};

export default Login;