import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.div`
  text-align: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileInfo = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ProfileLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
  color: #555;
`;

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'ZAYN',
    username: 'ZAYNMALIK',
    bio: '🗺️ India,Coimbatore',
    profileImage: 'https://dsguruji.com/wp-content/uploads/2023/02/Zayn_Malik_with_lucious_messy_hair_600x.webp', // Replace with actual image URL
  });
const navigate=useNavigate();
const handle = () =>{
    navigate('/home');
}
  return (
    <>
    <button onClick={handle} style={{position:'absolute',left:"1400px",top:"20px",width:"100px",height:"45px",borderRadius:"10px"}}>Home</button>
    <div style={{marginTop:"160px"}}>
    <ProfileContainer>           
      <ProfileHeader>
        <ProfileImage src={user.profileImage} alt="Profile" />
      </ProfileHeader>
      <ProfileInfo>
        <h2>{user.name}</h2>
        <p>@{user.username}</p>
        <p>{user.bio}</p>
      </ProfileInfo>
    </ProfileContainer>
    </div>
    </>
  );
};

export default ProfilePage;
