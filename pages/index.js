import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import Redirect from "./api/redirect";

export default function Index() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) {
    return <Redirect ssr to="/api/auth/login" />; // You can add a loading spinner or message here
  }

  useEffect(() => {
    // User is logged in
    router.push("/patients");
  }, [router, user]);

  // User is logged in, perform client-side redirect to '/patients'

  return null; // You can add a loading spinner or message here
}
