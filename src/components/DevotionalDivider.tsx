import React from 'react';

interface DevotionalDividerProps {
  className?: string;
  variant?: 'lotus' | 'simple' | 'gold';
}

export default function DevotionalDivider({
  className = '',
  variant = 'lotus',
}: DevotionalDividerProps) {
  if (variant === 'simple') {
    return (
      <div className={`w-full flex items-center justify-center my-6 ${className}`}>
        <div className="h-px bg-slate-200 w-full max-w-md" />
      </div>
    );
  }

  return (
    <div className={`w-full flex items-center justify-center gap-3 my-8 select-none ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-slate-200 flex-1 max-w-xs" />
      <div className="flex items-center gap-1.5 text-amber-600 px-1">
        <span className="w-1 h-1 rounded-full bg-amber-500" />
        <span className="text-[10px] font-bold text-amber-700 tracking-widest uppercase">॥ ॐ ॥</span>
        <span className="w-1 h-1 rounded-full bg-amber-500" />
      </div>
      <div className="h-px bg-gradient-to-l from-transparent via-slate-200 to-slate-200 flex-1 max-w-xs" />
    </div>
  );
}
