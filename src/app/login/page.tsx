import AuthForm from "@/components/authentication/AuthForm";
import React from "react";


const AuthenticationPage = () => {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="max-w-xl w-[350px] mx-auto border rounded-lg">
        <AuthForm />
      </div>
    </main>
  );
};

export default AuthenticationPage;
