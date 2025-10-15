import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', { email, password, redirect: false });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gemini-purple to-gemini-indigo flex items-center justify-center p-4"
    >
      <div className="glass-card w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Welcome to Digital Memory Jar</h1>
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-white/30 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-white/30 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
          />
          <button type="submit" className="glass-button w-full">Sign In</button>
        </form>
        <div className="flex items-center justify-center my-4">
          <span className="text-white/70">or</span>
        </div>
        <button
          onClick={() => signIn('google')}
          className="glass-button w-full flex items-center justify-center"
        >
          <FcGoogle className="mr-2" /> Sign in with Google
        </button>
      </div>
    </motion.div>
  );
};

export default LoginPage;