import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
const SideBar = ({ catt, setCat }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat) => (
        <button
          onClick={() => setCat(cat.name)}
          style={{
            background: cat.name === catt && "#fc1503",
            color: "white",
          }}
          className="category-btn"
          key={cat.name}
        >
          <span
            style={{
              color: cat.name === catt ? "#fff" : "red",
              marginRight: "15px",
            }}
          >
            {<cat.icon />}
          </span>
          <span
            style={{
              opacity: cat.name === catt ? "1" : "0.8",
              marginRight: "15px",
            }}
          >
            {cat.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
