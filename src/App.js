import React, { useState } from "react"


import { Grid } from "@material-ui/core"
import youtube from "./api/youtube"
import { SearchBar, VideoDetail, VideoList } from "./components"
import { useEffect } from "react"

const App = () =>{
    const [Videos, setVideos] = useState([]);
    const [SelectedVideos, setSelectedVideos] = useState(null);

    useEffect(()=>{
        handleSubmit("pdf generation using react and node");
    },[]);
    
    const onVideoSelect = (video) => {
        setSelectedVideos(video);
      }
      

    const handleSubmit = async (searchTerm) =>{
        const response = await youtube.get('search', {
            params: {
                part: "snippet",
                maxResults: 5,
                key: process.env.REACT_APP_YOUTUBE_API_KEY,
                q:searchTerm,
              }
        }) 
        // console.log(response.data.items);
        setVideos(response.data.items);
        setSelectedVideos(response.data.items[0]);
    }
    return (
        <Grid justifyContent="center" container spacing={10}>
            <Grid item xs={12}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <SearchBar onFormSubmit={handleSubmit}/>
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail video={SelectedVideos}/>
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList Videos={Videos} onVideoSelect={onVideoSelect}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default App