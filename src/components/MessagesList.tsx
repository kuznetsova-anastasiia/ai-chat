import Container from '@mui/material/Container';
import { Message } from './Message';
import { Message as MessageType } from '../types/Message';
import { FC } from 'react';

interface ListProps {
  messages: MessageType[]
}

export const MessageList: FC<ListProps> = ({ messages }) => {

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: '28px',
        paddingY: '40px',
        flexGrow: 1,
      }}
    >
      {messages.map(message => (
        <Message
          key={message.id}
          text={message.text}
          role={message.role}
        />
      ))}
    </Container>
  );
}