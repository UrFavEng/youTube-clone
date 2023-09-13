import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      p={2}
      alignItems={"center"}
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "#000",
        justifyContent: "space-between",
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
