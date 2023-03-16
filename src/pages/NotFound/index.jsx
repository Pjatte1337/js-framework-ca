import { useEffect } from "react";
import { StyledPage } from "../pageStyles";
import Feedback from "../../components/Feedback";

export default function NotFound() {
  useEffect(() => {
    document.title = "StoreTown | 404 Not Found";
  }, []);

  return (
    <StyledPage>
      <Feedback title={"we couldn't find the page"} />
    </StyledPage>
  );
}