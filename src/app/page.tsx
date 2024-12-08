"use client";

import { Suspense } from "react";
import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";
import LandingPage from "@/components/landing-page";

export default function IndexPage() {
  return (
    <Suspense>
      <Authenticated key="home-page" fallback={<LandingPage />}>
        <NavigateToResource />
      </Authenticated>
    </Suspense>
  );
}
