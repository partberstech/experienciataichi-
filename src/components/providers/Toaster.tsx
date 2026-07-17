"use client";

import { ToastProvider } from "@/components/ui/Toast";
import { ToastViewport } from "@/components/ui/Toast";

export function Toaster() {
  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  );
}