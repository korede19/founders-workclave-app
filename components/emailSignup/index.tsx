"use client";
import React from "react";
import styles from "./styles.module.css";
import TestimonialSlider from "../testimonialSlider";
import Back from "@/svgs/back";
import { useRouter } from "next/navigation";
import { SignupFormData } from "@/utils/data";
import SignupFormAgency from "../signupFormAgency";

const EmailSignupComp = () => {
  const router = useRouter();
  const handleSignup = (data: SignupFormData) => {
    console.log("User registered:", data);
  };
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.colOne}>
          <TestimonialSlider />
        </div>
        <div className={styles.colTwo}>
          <button className={styles.backBtn} onClick={() => router.back()}>
            <Back /> Back
          </button>
          <SignupFormAgency userType="agency" onSubmit={handleSignup} />
        </div>
      </div>
    </div>
  );
};

export default EmailSignupComp;
