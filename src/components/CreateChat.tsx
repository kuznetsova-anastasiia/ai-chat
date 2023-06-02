import { Box, Button, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Dispatch, FC, SetStateAction, useState } from 'react';

interface CreateChatProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleCreateChat: (title: string) => void;
}

export const CreateChat: FC<CreateChatProps> = ({ isOpen, setIsOpen, handleCreateChat }) => {
  const [title, setTitle] = useState('');
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    if (!title.trim() || title.length > 25) {
      setIsError(true);
      return;
    }

    handleCreateChat(title);
    setTitle('');
    setIsOpen(false);
  }

  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          padding: '40px',
          paddingTop: '60px',
          backgroundColor: '#F9F9F9',
          borderRadius: '20px',
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          alignItems: 'center',
        }}
      >
        <TextField
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setIsError(false);
          }}
          error={isError}
          onBlur={() => {
            if (!title.trim()) {
              setIsError(true);
            }
          }}
          fullWidth
          placeholder='Enter the chat name'
          helperText="max 25 symbols"
        />
        <Button
          variant="outlined"
          onClick={handleClick}
          sx={{
            width: 'max-content'
          }}
        >
          Create chat
        </Button>
      </Box>
    </Modal>
  );
}