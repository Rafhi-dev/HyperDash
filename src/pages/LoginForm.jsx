import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Bersihkan error sebelumnya

    // Validasi sederhana
    if (!email || !password) {
      setError('Email dan password harus diisi.');
      return;
    }

    // Simulasi login 
    if (email === 'user@example.com' && password === 'password123') {
      alert('Login Berhasil!');
      window.location.replace('/')
    } else {
      setError('Email atau password salah.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url(/pexels.jpg)] bg-cover" >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex justify-center mb-6">
  <img src="/react.svg" alt="Logo Aplikasi" className="h-10" /> {/* Sesuaikan path dan class sesuai kebutuhan */}
</div>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border-2 border-solid border-slate-100 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-400 hover:shadow-lg hover:shadow-blue-300/50 hover:duration-700 "
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="sshadow appearance-none border-2 border-solid border-slate-100 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-400 hover:shadow-lg hover:shadow-blue-300/50 hover:duration-700"
              placeholder="Masukkan password Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:shadow-lg hover:duration-700 hover:shadow-blue-700/50  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Login
            </button>
          </div>
          <div className="mt-4 text-center">
            <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Lupa Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;