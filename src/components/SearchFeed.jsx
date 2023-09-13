import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useGetSearchVidQuery } from "../store/apiSlice";
import Videos from "./Videos";
const SearchFeed = () => {
  let { searchTerm } = useParams();
  console.log(searchTerm);
  const { data } = useGetSearchVidQuery(searchTerm);
  console.log(data?.items);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}
      >
        Search Results for:{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={data?.items} />
    </Box>
  );
};

export default SearchFeed;
