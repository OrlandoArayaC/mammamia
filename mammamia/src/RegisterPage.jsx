import { useState } from 'react';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setMessage('Todos los campos son obligatorios');
    } else if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres');
    } else if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
    } else {
      setMessage('Registro exitoso');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control my-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="form-control my-2" type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
        <input className="form-control my-2" type="password" placeholder="Confirmar contraseña" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        <button className="btn btn-primary" type="submit">Registrar</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
}

export default RegisterPage;
