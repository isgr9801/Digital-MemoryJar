import React from 'react';
import Link from 'next/link';
import { MdHome, MdDashboard, MdTimeline } from 'react-icons/md';
import { signOut, useSession } from 'next-auth/react';

const NavBar: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div className="glass-card w-full max-w-md p-4 flex justify-between items-center fixed bottom-0 left-0 right-0 mx-auto">
      <Link href="/" className="glass-button flex items-center">
        <MdHome className="mr-2" /> Home
      </Link>
      <Link href="/dashboard" className="glass-button flex items-center">
        <MdDashboard className="mr-2" /> Dashboard
      </Link>
      <Link href="/timeline" className="glass-button flex items-center">
        <MdTimeline className="mr-2" /> Timeline
      </Link>
      {session ? (
        <button onClick={() => signOut()} className="glass-button">Logout</button>
      ) : (
        <Link href="/login" className="glass-button">Login</Link>
      )}
    </div>
  );
};

export default NavBar;