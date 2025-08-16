"use client";

import { api } from "@workspace/backend/_generated/api";
import { useQuery } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>Apps/Widget</p>
      <div className="max-w-sm w-full mx-auto">
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </div>
  );
}
