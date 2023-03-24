// Import necessary dependencies
import { useEffect } from "react";

// Import components
import ContactForm from "../../components/ContactForm";

// Import Styles
import { StyledContactPage } from "./styles";

function Contact() {
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

export default Contact;