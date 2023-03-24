// Import necessary dependencies
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Import components
import PrimaryButton from "../PrimaryButton";

// Import styles
import { StyledContactForm } from "./styles";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]*$/, "Must not contain any numbers or symbols")
    .min(3, "Must be at least 3 characters long")
    .required(),
  subject: yup
    .string()
    .trim()
    .min(3, "Must be at least 3 characters long")
    .required(),
  email: yup.string().email("Must be a valid email address").required(),
  body: yup
    .string()
    .trim()
    .min(3, "Must be at least 3 characters long")
    .max(5000, "Cannot be longer than 5000 characters")
    .required(),
});

export default function ContactForm() {
  useEffect(() => {
    document.title = "StoreTown | Contact";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset // clear out the form after submitted 
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    window.alert("Form submitted successfully!");
    reset(); // clear out the form after submitted 
  };


  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
      <div className="form">
        <h2>Fill in</h2>
        <label htmlFor="fullName">Full name</label>
        <input
          {...register("fullName")}
          name="fullName"
          placeholder="Full name"
        ></input>
        {errors.fullName && (
          <p className="error-message">{errors.fullName.message}</p>
        )}

        <label htmlFor="subject">Subject</label>
        <input
          {...register("subject")}
          name="subject"
          placeholder="Subject"
        ></input>
        {errors.subject && (
          <p className="error-message">{errors.subject.message}</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          type="email"
          name="email"
          placeholder="Email"
        ></input>
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}

        <label htmlFor="body">Message</label>
        <textarea
          {...register("body")}
          name="body"
          placeholder="Write your message here"
        ></textarea>
        {errors.body && (
          <p className="error-message">{errors.body.message}</p>
        )}

        <div className="button-container">
          <PrimaryButton text={"Submit"} />
        </div>
      </div>
    </StyledContactForm>
  );
}