import { useEffect } from "react";
import { StyledContactPage } from "./styles";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  useEffect(() => {
    document.title = "StoreTown | Contact";
  }, []);

  return (
    <StyledContactPage>
      <h1>Get in touch</h1>
      <ContactForm />
    </StyledContactPage>
  );
}