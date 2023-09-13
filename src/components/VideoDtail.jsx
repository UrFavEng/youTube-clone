import { Box, Stack, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import { useGetRelatedVidQuery, useGetVidetailsQuery } from "../store/apiSlice";

const VideoDtail = () => {
  const { id } = useParams();
  console.log(id);
  const { data } = useGetVidetailsQuery(id);
  const { data: vids } = useGetRelatedVidQuery(id);
  // console.log(vids);
  console.log(vids?.items);
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className={"react-player"}
              controls
            />
            <Typography variant="h5" color="white" fontWeight={"bold"} p={2}>
              {data?.items[0]?.snippet?.title}
            </Typography>
            <Stack
              sx={{ color: "#fff" }}
              direction={"row"}
              justifyContent={"space-between"}
              py={1}
              px={2}
            >
              <Link to={`/channel/${data?.items[0]?.snippet?.channelId}`}>
                <Typography
                  color={"white"}
                  variant={{ sm: "subtitle", md: "h6" }}
                >
                  {data?.items[0]?.snippet?.channelTitle}{" "}
                  <CheckCircle
                    sx={{ fontSize: 12, color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction={"row"} gap={2}>
                <Typography
                  color={"white"}
                  variant="body1"
                  sx={{ opacity: 0.8 }}
                >
                  {data?.items[0]?.statistics?.viewCount} Views
                </Typography>
                <Typography
                  color={"white"}
                  variant="body1"
                  sx={{ opacity: 0.8 }}
                >
                  {data?.items[0]?.statistics?.likeCount} Liks
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Videos videos={vids?.items} />
      </Box>
    </Box>
  );
};

export default VideoDtail;
