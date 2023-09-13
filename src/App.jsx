import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDtail from "./components/VideoDtail";
import ChannelDtail from "./components/ChannelDtail";
import SearchFeed from "./components/SearchFeed";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDtail />} />
          <Route path="/channel/:id" element={<ChannelDtail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
