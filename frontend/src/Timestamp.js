import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
const Timestamp = () => {
  const [link, setLink] = useState('');
  const history = useNavigate();

  const handleSearch = () => {
    // Extract the video ID from the YouTube link
    const videoId = extractVideoId(link);
    // Redirect to the VideoPage with the videoId as a parameter
    history(`/searchTimeStamp/${videoId}`);
  }

  // Function to extract the video ID from a YouTube link
  const extractVideoId = (link) => {
    const url = new URL(link);
    return url.searchParams.get('v');
  }

  return (
    <div className='searchbar'>
      <input
        type="text"
        placeholder="Enter YouTube Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button onClick={handleSearch}><SearchIcon/></button>
    </div>
  );
}

export default Timestamp;
