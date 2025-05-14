"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function AuthRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/bookings');
  }, [router]);
  
  return null;
}

export default function HeaderWithAuth() {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        <AuthRedirect />
      </SignedIn>
    </header>
  );
}