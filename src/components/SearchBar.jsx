import { Paper, IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
const SearchBar = () => {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      navigate(`/search/${search}`);

      setSearch("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: "1 solid #3e3e3e",
        boxShadow: "none",
        pl: 2,
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ color: "red", p: "10px" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
