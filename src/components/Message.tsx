import Box from '@mui/material/Box';
import { FC } from 'react';

interface MessageProps {
  text: string;
  role: 'user' | 'assistant' | 'system';
}


export const Message: FC<MessageProps> = ({ text, role }) => {
  return (
    <Box
      sx={(theme) => {
        return {
          padding: theme.spacing(1),
          [theme.breakpoints.down('md')]: {
            position: 'relative',
            width: '80%',
            borderRadius: '30px',
            paddingX: '24px',
            paddingY: '5px',
            backgroundColor: role === 'user' ? '#FEE2C5' : '#C4DDFF',
            alignSelf: role === 'user' ? 'flex-end' : 'flex-start'
          },
          [theme.breakpoints.up('md')]: {
            position: 'relative',
            width: '60%',
            borderRadius: '40px',
            paddingX: '44px',
            paddingY: '25px',
            backgroundColor: role === 'user' ? '#FEE2C5' : '#C4DDFF',
            alignSelf: role === 'user' ? 'flex-end' : 'flex-start'
          },
        }
      }}
    >
      <p>
        {text}
      </p>

      <Box
        sx={
          role === 'user'
            ? {
              position: 'absolute',
              bottom: 0,
              right: '-3%'
            }
            : {
              position: 'absolute',
              bottom: 0,
              left: '-3%',
              transform: 'scale(-1, 1)'
            }
        }
      >
        <svg width="37" height="25" viewBox="0 0 37 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.8006 24.0576C36.8006 24.0576 30.5225 24.2208 26.5001 24C26.5001 24 20.9746 23.5653 17.5001 23C13.8997 22.4142 11.9664 21.6364 8.50012 20.5C5.32954 19.4605 0.500124 17.5 0.500124 17.5L14.3671 0.0458846C14.3671 0.0458846 16.149 3.74649 17.5001 6C19.0877 8.64792 19.9894 10.1572 22.0001 12.5C24.25 15.1214 25.7976 16.3482 28.5001 18.5C31.5519 20.9299 36.8006 24.0576 36.8006 24.0576Z" fill={role === 'user' ? '#FEE2C5' : '#C4DDFF'}/>
        </svg>
      </Box>
    </Box>
  );
}