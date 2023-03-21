import { StyledCheckoutForm } from "./styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useProductsStore } from "../../utils/create";
import { shallow } from "zustand/shallow";

const schema = yup
  .object({
    fullName: yup
      .string()
      .matches(/^[a-zA-Z\s]*$/, "Must not contain any numbers or symbols")
      .min(3, "Must be at least 3 characters long")
      .required(),
    address: yup
      .string()
      .min(3, "Must be at least 3 characters long")
      .required(),
    city: yup
      .string()
      .matches(/^[a-zA-Z\s]*$/, "Must not contain any numbers or symbols")
      .min(3, "Must be at least 3 characters long")
      .required(),
    code: yup.string().min(2, "Must be at least 2 characters long").required(),
    country: yup.string().required("Please choose a country"),
    email: yup
      .string()
      .matches(/\S+@\S+\.\S+/, "Must be a valid email address")
      .required(),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, "Must not contain any letters or symbols")
      .required(),
    cardName: yup
      .string()
      .matches(/^[a-zA-Z\s]*$/, "Must not contain any numbers or symbols")
      .min(3, "Must be at least 3 characters long")
      .required(),
    month: yup
      .number()
      .min(1, "Month must be between 1 and 12")
      .max(12, "Month must be between 1 and 12")
      .integer("Month must be a whole number")
      .required(),
    year: yup
      .number()
      .min(1, "Year must be between 1 and 12")
      .max(12, "Year must be between 1 and 12")
      .integer("Year must be a whole number")
      .required(),
    cvv: yup
      .string()
      .matches(/^[0-9]+$/, "Must be a valid CVV")
      .min(3, "Must be 3 characters long")
      .max(3)
      .required(),
  })
  .required();

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { clearCart } = useProductsStore(
    (state) => ({
      clearCart: state.clearCart,
    }),
    shallow
  );

  const navigate = useNavigate();

  function handleSubmission() {
    clearCart();
    navigate("/src/pages/CheckoutSuccess");
  }

  return (
    <StyledCheckoutForm onSubmit={handleSubmit(handleSubmission)}>
      <fieldset>
        <legend>Shipping information</legend>
        <label htmlFor="fullName">Full name</label>
        <input
          {...register("fullName", {
            required: true,
            minLength: 3,
          })}
          name="fullName"
          placeholder="Full name"
        ></input>
        <p className="error-message">{errors.fullName?.message}</p>

        <label htmlFor="address">Address</label>
        <input
          {...register("address", {
            required: true,
            minLength: 3,
          })}
          name="address"
          placeholder="Address"
        ></input>
        <p className="error-message">{errors.address?.message}</p>

        <div className="small-field">
          <div>
            <label htmlFor="city">City</label>
            <input
              {...register("city", {
                required: true,
                minLength: 3,
              })}
              name="city"
              placeholder="City"
            ></input>
            <p className="error-message">{errors.city?.message}</p>
          </div>

          <div>
            <label htmlFor="code">Postal code</label>
            <input
              {...register("code", {
                required: true,
                minLength: 3,
              })}
              name="code"
              placeholder="Postal code"
            ></input>
            <p className="error-message">{errors.code?.message}</p>
          </div>
        </div>

        <label htmlFor="country">Country</label>
        <select
          {...register("country", {
            required: true,
          })}
        >
          <option value="">--Please choose an option--</option>
          <option>Norway</option>
          <option>Sweeden</option>
          <option>Denmark</option>
        </select>
        <p className="error-message">{errors.country?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          {...register("email", {
            required: true,
          })}
          type="email"
          name="email"
          placeholder="Email"
        ></input>
        <p className="error-message">{errors.email?.message}</p>

        <label htmlFor="phone">Phone number</label>
        <input
          {...register("phone", {
            required: true,
          })}
          type="tel"
          name="phone"
          placeholder="Phone number"
        ></input>
        <p className="error-message">{errors.phone?.message}</p>
      </fieldset>
    </StyledCheckoutForm>
  );
}