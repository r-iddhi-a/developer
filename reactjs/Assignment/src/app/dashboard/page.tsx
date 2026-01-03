"use client";

import { useAuth } from "./Context/AuthContext";
import { useRouter } from "../next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [user, loading]);

  if (loading) return <p>Loading session...</p>;

  return (
    <div>
      <h1>Welcome {user?.email}</h1>
      <p>Your session is active and persistent.</p>
    </div>
  );
}
