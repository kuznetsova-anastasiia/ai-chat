import Box from '@mui/material/Box';
import { ChatButton } from './ChatButton';
import { Button } from '@mui/material';
import { Chat } from '../types/Chat';
import { useState, useEffect } from 'react';
import { createChat, deleteChat, getAllChats } from '../api/requests';
import { CreateChat } from './CreateChat';
import { useSearchParams } from 'react-router-dom';
import { handleLogout } from '../utils/supabase';
import { useAppSelector } from '../redux/hooks';

export const SideBar = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [modal, setModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { session } = useAppSelector(state => state.auth);

  useEffect(() => {
    const loadChats = async () => {
      console.log(session?.user, 'loadchats');

      if (session) {
        const chats = await getAllChats(session.user.id);
        setChats(chats);
      }
    }

    loadChats();
  }, [session]);

  const handleCreateChat = async (title: string) => {
    console.log(session?.user, 'createchat')

    if (session) {
      const newChat = await createChat(title, session?.user.id);
      setChats(state => [...state, newChat]);
    }
  }

  const handleDeleteChat = async (id: number) => {
    await deleteChat(id);
    setChats(state => state.filter(chat => chat.id !== id));
    const currentChat = searchParams.get('chat') || 0;

    if (+currentChat === id) {
      setSearchParams();
    }
  }

  const handleClick = () => {
    setModal(true);
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <h1 className='title'>
        Agile
      </h1>

      <Button
        variant='outlined'
        sx={{
          marginBottom: '40px'
        }}
        onClick={handleClick}
        fullWidth
      >
        Create chat
      </Button>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          flex: 1,
          overflowY: 'auto'
        }}
      >
        {chats.map(chat => (
          <ChatButton
            key={chat.id}
            chat={chat}
            handleDelete={handleDeleteChat}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <p>
          {session?.user.email}
        </p>

        <Button
          onClick={handleLogout}
        >
          Log out
        </Button>
      </Box>

      <CreateChat
        isOpen={modal}
        setIsOpen={setModal}
        handleCreateChat={handleCreateChat}
      />
    </Box>
  );
}