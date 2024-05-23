import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";
 
const VideoList = ({Videos,onVideoSelect}) =>{
    const ListOfVideos = Videos.map((video, id)=>
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)

    return (
        <Grid container spacing={6}>
            {ListOfVideos}
        </Grid>
        )
}
export default VideoList;