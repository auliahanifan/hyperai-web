"use client";
import type { AuthPageProps } from "@refinedev/core";
import { AuthPage as AuthPageBase } from "@refinedev/mui";
import Image from "next/image";

export const AuthPage = (props: AuthPageProps) => {
  return (
    <AuthPageBase
      {...props}
      title={"Riset AI"}
      formProps={{
        defaultValues: { email: "demo@refine.dev", password: "demodemo" },
      }}
    />
  );
};
