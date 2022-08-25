import { useSession, signIn, signOut } from "next-auth/react";

function LoginPage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as <br />
        <br />
        {JSON.stringify(session.user)}
        <br />
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => {
          signIn("credentials", {
            email: "nilanchal.patra3777@gmail.com",
            password: "Vector123@",
            callbackUrl: "/accessToken",
            redirect: true,
          });
        }}
      >
        Sign in
      </button>
    </>
  );
}

export default LoginPage;
