'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
  onClose?: () => void
}

export function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const [animationClass, setAnimationClass] = useState('animate-toast-in');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      setAnimationClass('animate-toast-out');
    }, duration);

    const unmountTimer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration + 300); // Match animation duration

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(unmountTimer);
    };
  }, [duration, onClose]);

  const icons = {
    success: 'check_circle',
    error: 'error',
    info: 'info'
  }

  const colors = {
    success: 'bg-tertiary text-on-tertiary',
    error: 'bg-error text-on-error',
    info: 'bg-primary text-on-primary'
  }

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'fixed bottom-8 right-8 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md z-50',
        colors[type],
        animationClass
      )}
    >
      <span className="material-symbols-outlined fill">{icons[type]}</span>
      <span className="font-medium">{message}</span>
    </div>
  );
}
