import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  useGetChannelDetailsQuery,
  useGetChannelVideosQuery,
} from "../store/apiSlice";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
const ChannelDtail = () => {
  let { id } = useParams();
  console.log(id);
  const { data: channel } = useGetChannelDetailsQuery(id);
  const { data: videos } = useGetChannelVideosQuery(id);
  console.log(videos?.items);
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%) ",
            zIndex: 10,
            height: "280px",
          }}
        />
        <ChannelCard channelDetail={channel?.items[0]} marginTop="-110px" />
        <Box
          display={"flex"}
          p="2"
          sx={{ paddingBottom: "50px" }}
          gap={2}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {" "}
          {videos?.items.map((e, i) => (
            <VideoCard video={e} key={i} />
          ))}
        </Box>

        {/* <VideoCard video={videos?.items} /> */}
      </Box>
    </Box>
  );
};

export default ChannelDtail;
