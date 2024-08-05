import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

const UserProfile = () => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
  }

  return (
    <div className='user-profile min-h-[80vh] flex flex-col justify-center items-center text-center'>
      <div className='profile-details flex flex-col items-center justify-center'>
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className='username py-5 text-2xl font-semibold'>Shehan</h1>
        <p className='email'>Email: shehan@gmail.com</p>
        <Button
          variant="contained"
          onClick={handleLogout}
          sx={{ margin: "2rem 0rem" }}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
}

export default UserProfile;
