'use client';

import { ReactNode } from 'react';
import { useGlobalScrollSpeed } from '@/hooks/useGlobalScrollSpeed';

interface ScrollSpeedProviderProps {
  children: ReactNode;
  enabled?: boolean;
}

export const ScrollSpeedProvider = ({ 
  children, 
  enabled = true 
}: ScrollSpeedProviderProps) => {
  useGlobalScrollSpeed({
    enabled
  });

  return <>{children}</>;
}; 