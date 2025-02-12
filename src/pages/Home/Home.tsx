import { Search } from "components/Search";
import { datalist } from "./data";
import { StyledPageWrapper } from "./styles";

function Home() {
  return (
    <StyledPageWrapper>
      <Search placeholder="Enter city" datalist={datalist} />
    </StyledPageWrapper>
  );
}

export default Home;
