// IconTile.tsx — React + Tailwind (fondo oscuro friendly)
import React from "react";

type Props = {
  label: string;
  children: React.ReactNode;
};

export default function IconTile({ label, children }: Props) {
  return (
    <div className="w-[88px] sm:w-[92px] md:w-[96px]">
      <div className="aspect-square rounded-2xl bg-white/[0.04] ring-1 ring-white/10 shadow-lg shadow-black/40 grid place-items-center backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-500 ease-out hover:scale-105">
        <div className="w-11 sm:w-11 md:w-12 [&_svg]:w-full [&_svg]:h-auto [&_svg]:block [&_img]:w-full [&_img]:h-auto [&_img]:block">
          {children}
        </div>
      </div>
      <div className="mt-2 text-center text-[11px] sm:text-[11px] md:text-xs text-neutral-300">
        {label}
      </div>
    </div>
  );
} 