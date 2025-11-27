"use client";
import React from "react";
import styles from "./styles.module.css";
import TestimonialSlider from "../testimonialSlider";
import Back from "@/svgs/back";
import SignupForm from "../signupForm";
import { useRouter } from "next/navigation";
import { SignupFormData } from "@/utils/data";

const FounderComp = () => {
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
          <SignupForm userType="founder" onSubmit={handleSignup} />
        </div>
      </div>
    </div>
  );
};

export default FounderComp;
