import React from "react";
import Profile from "../../components/Profile";
import './Profile.css'
import { useState } from 'react';
import FooterPage from "../FooterPage/FooterPage";
import Room from "../../components/Room";


const ProfilePage = () => {
    
    
    return (
        <div >

            < Profile />
                  
            <FooterPage />

        </div>
    )
}
export default ProfilePage;