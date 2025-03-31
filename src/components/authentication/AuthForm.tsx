"use client";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ResetPasswordForm from "./ResetPasswordForm";
import { Button } from "../ui/button";

const AuthForm = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="space-y-2 m-8">
      <div className="flex space-y-2 text-center flex-col">
        <h1 className="text-lg font-semibold tracking-tight">
        {mode === "reset"
          ? "Reset Password"
          : mode === "login"
          ? "Login"
          : "SignUp"}
        </h1>
        
        <p className="text-sm text-gray-500 text-muted-foreground">
        {mode === "reset"
          ? "Enter your email below to reset your password"
          : mode === "login"
          ? "Enter your Email & Password below to login"
          : "Enter your information below to create your account"}
        </p>
      </div>

      {/* Rendering the forms */}
      {
        mode === "login" && <>
        <LoginForm/>
        <div className="text-center flex justify-between">
            <Button variant={"link"} className="p-1" onClick={() => setMode('signup')}>
                New User? {" "} SignUp
            </Button>
            <Button variant={"link"} className="p-1" onClick={() => setMode('reset')}>
                Forgot Password
            </Button>
        </div>
        </>
      }
      {
        mode === "signup" && <>
        <SignUpForm/>
        <div className="text-center">
            <Button variant={"link"} className="p-1" onClick={() => setMode('login')}>
                Already have an account? {" "} Login
            </Button>
        </div>
        </>
         
      }
      {
        mode === "reset" && 
        <>
        <ResetPasswordForm/>
        <div className="text-center">
            <Button variant={"link"} className="p-1" onClick={() => setMode('login')}>
              Back To Login
            </Button>
        </div>
        </>
        
      }

    </div>
  );
};

export default AuthForm;
