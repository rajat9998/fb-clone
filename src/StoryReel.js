import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://www.harrogateadvertiser.co.uk/webimg/QVNIMTE0MTg1MDky.jpg?width=640" 
                profileSrc="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" 
                title="Rajat Kumar"
            />
            <Story 
                image="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753" 
                profileSrc="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" 
                title="Kishan Raj"
            />
            <Story 
                image="https://images.unsplash.com/photo-1540324155974-7523202daa3f?ixlib=rb-1.2.1&w=1000&q=80" 
                profileSrc="https://www.iconfinder.com/data/icons/avatars-1-5/136/87-512.png" 
                title="Supriya Kumari"
            />
            <Story 
                image="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340" 
                profileSrc="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" 
                title="Ravi Ranjan"
            />
            <Story 
                image="https://www.colesclassroom.com/wp-content/uploads/2017/08/Sunset-pexels-photo-132037_BLOG.jpg" 
                profileSrc="https://www.iconfinder.com/data/icons/avatars-1-5/136/87-512.png" 
                title="Ranju Prakash"
            />
        </div>
    )
}

export default StoryReel
