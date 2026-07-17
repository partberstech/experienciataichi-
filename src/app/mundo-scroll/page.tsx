"use client";

import dynamic from "next/dynamic";

const ScrollWorld = dynamic(
  () => import("@/components/scroll-world/ScrollWorld").then((mod) => mod.ScrollWorld),
  { ssr: false }
);

export default function ScrollWorldPage() {
  return <ScrollWorld />;
}