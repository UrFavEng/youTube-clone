import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { useGetSearchQuery } from "../store/apiSlice";
const Feed = () => {
  const [catt, setCat] = useState("New");
  console.log(catt);
  const { data } = useGetSearchQuery(catt);
  console.log(data);
  // const [videos, setVideos] = useState(data?.items);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar catt={catt} setCat={setCat} />
        <Typography
          className="copyright"
          variant="body2"
          color="#fff"
          sx={{ mt: 1.5 }}
        >
          Copyright 2023 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography fontWeight={"bold"} mb={2} variant="h4" color={"white"}>
          {catt} <span style={{ color: "#f31503" }}>Videos</span>
        </Typography>
        <Videos videos={data?.items} />
      </Box>
    </Stack>
  );
};

export default Feed;
