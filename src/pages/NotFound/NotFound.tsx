import { Link } from "react-router-dom";
import { StyledPageWrapper } from "./styles";

function NotFound() {
  return (
    <StyledPageWrapper>
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <p>
        <Link to="/">Go back to Home</Link>
      </p>
    </StyledPageWrapper>
  );
}

export default NotFound;
