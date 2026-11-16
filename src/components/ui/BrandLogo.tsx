"use client";

import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export function BrandLogo({ className = "", size = 32 }: BrandLogoProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/15 via-rose-600/10 to-transparent border border-rose-500/30 shadow-sm shadow-rose-950/20 group-hover:border-rose-500/60 group-hover:scale-105 transition-all duration-300 shrink-0 ${className}`}
    >
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[85%] h-[85%]"
      >
        <defs>
          <linearGradient id="brand-q-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#be123c" />
          </linearGradient>
          <linearGradient id="brand-s-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        {/* Dynamic Q loop with angled tail */}
        <path
          d="M18 8C12.4772 8 8 12.4772 8 18C8 23.5228 12.4772 28 18 28C20.5 28 22.7 27.1 24.5 25.6L28 29.1"
          stroke="url(#brand-q-grad)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Luminous S wave inside Q */}
        <path
          d="M22 13.5C21.5 12 19.8 11.2 18 11.2C15.5 11.2 13.8 12.6 13.8 14.8C13.8 18.5 22.2 17.5 22.2 21.2C22.2 23.6 20.2 24.8 17.8 24.8C15.5 24.8 13.8 23.6 13.2 22.2"
          stroke="url(#brand-s-grad)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
