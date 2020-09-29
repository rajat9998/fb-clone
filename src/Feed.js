import { Avatar } from '@material-ui/core'
import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (    
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post profilePic={Avatar} image="https://www.w3schools.com/w3css/img_lights.jpg" username="Rajat Kumar" timestamp="Timestamp here" message="nature image" />
            <Post profilePic={Avatar} username="Rajat Kumar" timestamp="Timestamp here" message="no image caption" />
            <Post/>
        </div>
    )
}

export default Feed
