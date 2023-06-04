import { useEffect, useState } from "react";
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";

const Auth = ({ setAuthTitle }) => {
  const [authAction, setAuthAction] = useState(true);

  useEffect(() => {
    authAction ? setAuthTitle("Login") : setAuthTitle("Register");
  }, [authAction]);
  return (
    <>
      {authAction ? (
        <AuthLogin setAuthAction={setAuthAction} />
      ) : (
        <AuthRegister setAuthAction={setAuthAction} />
      )}
    </>
  );
};

export default Auth;
