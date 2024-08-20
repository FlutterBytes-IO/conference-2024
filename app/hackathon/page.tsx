'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://drive.google.com/file/d/1fy53GKvSgOuhk6ZqjcWthuhFCHVomHve/view?usp=sharing');
  }, [router]);

  return null;
}
