import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction="row" gap={2} flexWrap={"wrap"} justifyContent={"center"}>
      {videos?.map((e, i) => (
        <Box key={i}>
          {e?.id?.videoId && <VideoCard video={e} />}
          {e.id.channelId && <ChannelCard channelDetail={e} marginTop="0px" />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
