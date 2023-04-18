import { useEffect } from "react";
import { useRouter } from "next/router";

import { auth } from "@/src/components/config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "@/src/components/Loading";

export default function Authenticated({ children }) {
  const [user, loading] = useAuthState(auth);

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <>{children}</>;
  }

  return null;
}
