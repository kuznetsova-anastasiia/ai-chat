import Box from '@mui/material/Box';
import { MessageInput } from './MessageInput';
import { MessageList } from './MessagesList';
import io from 'socket.io-client';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Message } from '../types/Message';

const socket = io(import.meta.env.VITE_API_URL);

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [gptWriting, setGptWriting] = useState(false);
  const [searchParams] = useSearchParams();
  const currentChat = searchParams.get('chat') || 0;

  const handleEnterMessage = (message: string) => {
    socket.emit('createMessage', { text: message, chatId: +currentChat });
  }

  useEffect(() => {
    socket.emit('findAllMessages', { data: +currentChat });
  }, [currentChat]);

  useEffect(() => {
    socket.on('newMessage', (data) => {
      setMessages(state => [ ...state, data ]);
    })
  
    socket.on('sendAllMessages', ({ messages }) => {
      setMessages(messages || []);
    });

    socket.on('writing', () => {
      setGptWriting(true);
    });

    socket.on('stopWriting', () => {
      setGptWriting(false);
    });

    return () => {
      socket.off('sendAllMessages');
      socket.off('newMessage');
      socket.off('writing');
      socket.off('stopWriting');
    }
  }, []);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box
      sx={(theme) => {
        return {
          padding: theme.spacing(1),
          [theme.breakpoints.down('md')]: {
            backgroundColor: '#F9F9F9',
            borderTopLeftRadius: '40px',
            borderBottomLeftRadius: '40px',
            paddingX: '32px',
            paddingBottom: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1
          },
          [theme.breakpoints.up('md')]: {
            backgroundColor: '#F9F9F9',
            borderTopLeftRadius: '40px',
            borderBottomLeftRadius: '40px',
            paddingX: '64px',
            paddingBottom: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1
          },
        }
      }}
    >

      <Box
        sx={{
          width: '100%',
          height: '90%',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <MessageList messages={messages} />
        <div ref={messagesEndRef} />
      </Box>

      <Box
        sx={{
          width: '80%',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            display: gptWriting ? 'block' : 'none',
            color: '#ACADAD',
            fontSize: '18px',
            width: 'max-content',
            position: 'absolute',
            top: '-50%',
            left: '3%'
          }}
        >
          AgileGPT writing..
        </Box>

        <MessageInput handleMessage={handleEnterMessage} />
      </Box>
    </Box>
  );
}