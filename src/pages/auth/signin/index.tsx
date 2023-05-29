/* eslint-disable no-console */
import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { FormEventHandler, useState } from "react";

const SignIn: NextPage = (): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const { data, status } = useSession();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const options = {
      email: userInfo.email,
      password: userInfo.password,
      redirect: true,
      callbackUrl: "/",
    };

    const res = await signIn("credentials", options);
    console.log(res);
  };
  return (
    <div className="sign-in-form">
      {status.toString()}
      {data && <h1>Session : {data.user?.email}</h1>}

      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="text"
          placeholder="john@email.com"
          data-test="auth-email"
        />
        atuny0
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="********"
          data-test="auth-password"
        />
        9uQFF1Lh
        <input type="submit" value="Login" data-test="auth-submit" />
      </form>
    </div>
  );
};

export default SignIn;
