import React from 'react';
import { logo } from '../utils/constant';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { SearchBar } from '.';
const Navbar = () => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        justifyContent: 'space-between',
        top: 0,
      }}
    >
      <Link
        to={'/'}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={logo}
          alt="home"
          height={45}
          style={{ marginRight: '10px' }}
        />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
