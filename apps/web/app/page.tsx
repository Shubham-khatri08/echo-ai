"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import {
  Authenticated,
  AuthLoading,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>Apps/Web</p>
          <Button onClick={() => addUser()}>Add User</Button>
          <UserButton />
          <div className="max-w-sm w-full mx-auto">
            <pre>{JSON.stringify(users, null, 2)}</pre>
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>Please sign in to access this page.</p>
          <SignInButton />
        </div>
      </Unauthenticated>
      <AuthLoading>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>Loading...</p>
        </div>
      </AuthLoading>
    </>
  );
}
