import { useState, FC } from "react";

interface InputProps {
  handleMessage: (message: string) => void;
}

export const MessageInput: FC<InputProps> = ({ handleMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    handleMessage(message);
    setMessage('');
  }

  return (
    <form 
      className="form"
      onSubmit={handleSubmit}
    >
      <input
        className='input'
        placeholder="Ask me anything that I can help you or your team.. "
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="send">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.3332 2.66675L14.6665 17.3334" stroke="#000A10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M29.3332 2.66675L19.9998 29.3334L14.6665 17.3334L2.6665 12.0001L29.3332 2.66675Z" stroke="#000A10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  );
}