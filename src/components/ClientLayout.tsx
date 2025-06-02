'use client';

import dynamic from "next/dynamic";

// Dynamically import SmoothScroll to prevent SSR issues
const SmoothScroll = dynamic(
  () => import("@/components/animations/SmoothScroll"),
  { ssr: false }
);

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <SmoothScroll>
      <main>
        {children}
      </main>
    </SmoothScroll>
  );
} 