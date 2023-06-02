import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FC } from 'react';
import { Chat } from '../types/Chat';
import { useSearchParams } from 'react-router-dom';

const HandshakeIcon = () => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.4201 5.07996C19.9184 4.57653 19.3223 4.17709 18.6659 3.90455C18.0095 3.632 17.3058 3.4917 16.5951 3.4917C15.8844 3.4917 15.1806 3.632 14.5243 3.90455C13.8679 4.17709 13.2718 4.57653 12.7701 5.07996L12.0001 5.85996L11.2301 5.07996C10.7284 4.57653 10.1323 4.17709 9.47591 3.90455C8.81953 3.632 8.1158 3.4917 7.40509 3.4917C6.69437 3.4917 5.99065 3.632 5.33427 3.90455C4.67789 4.17709 4.08176 4.57653 3.58009 5.07996C1.46009 7.19996 1.33009 10.78 4.00009 13.5L12.0001 21.5L20.0001 13.5C22.6701 10.78 22.5401 7.19996 20.4201 5.07996Z" stroke="#000A10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0002 5.85986L8.87019 8.99986C8.47448 9.39881 8.25244 9.93795 8.25244 10.4999C8.25244 11.0618 8.47448 11.6009 8.87019 11.9999C9.26913 12.3956 9.80828 12.6176 10.3702 12.6176C10.9321 12.6176 11.4712 12.3956 11.8702 11.9999L14.1302 9.78986C14.6919 9.23415 15.4501 8.92244 16.2402 8.92244C17.0303 8.92244 17.7885 9.23415 18.3502 9.78986L20.7502 12.1899" stroke="#000A10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 15.5L16 13.5" stroke="#000A10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 18.5L13 16.5" stroke="#000A10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DeleteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6H5H21" stroke="#000A10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="#000A10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 11V17" stroke="#000A10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 11V17" stroke="#000A10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface ButtonProps {
  chat: Chat;
  handleDelete: (id: number) => void;
}

export const ChatButton: FC<ButtonProps> = ({ chat, handleDelete }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentChat = searchParams.get('chat') || 0;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Button
        startIcon={<HandshakeIcon />}
        sx={{
          color: '#000A10',
          textTransform: 'none',
          fontSize: '18px',
          fontFamily: 'Nunito, sans-serif',
        }}
        onClick={() => setSearchParams({ chat: `${chat.id}` })}
        variant={+currentChat === chat.id ? 'outlined' : 'text'}
      >
        {chat.title}
      </Button>

      <Button
        sx={{
          opacity: 0.5,
          transition: '700ms',
          ":hover": {
            opacity: 1
          }
        }}
        onClick={() => handleDelete(chat.id)}
      >
        <DeleteIcon />
      </Button>
    </Box>
  );
}