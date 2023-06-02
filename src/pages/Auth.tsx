import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { supabase } from '../utils/supabase';
import { Box } from '@mui/material';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleLogin = async (email: string) => {
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      setIsError(true);
    } else {
      setIsSent(true);
    }

    setIsLoading(false);
  }

  const validateEmail = () => {
    const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!pattern.test(email)) {
      setEmailError('Invalid email');
      return;
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    validateEmail();

    if (emailError) {
      return;
    }

    handleLogin(email);
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      {!isSent && !isError && !isLoading && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            height: 'max-content'
          }}
        >
          <h1>
            Hi there!
          </h1>

          <p>
            To proceed you need to sign in via magic link
          </p>

          <form
            className='authForm'
            onSubmit={handleSubmit}
          >
            Sign In
            <TextField
              label="Email"
              type='email'
              required
              error={!!emailError}
              helperText={emailError}
              value={email}
              onChange={(e) => {
                setEmailError('');
                setEmail(e.target.value);
              }}
              onBlur={validateEmail}
              sx={{
                width: '400px'
              }}
            />

            <Button
              variant='contained'
              sx={{
                width: '100%'
              }}
              onClick={handleSubmit}
            >
              Send link
            </Button>
          </form>
        </Box>
      )}

      {isLoading && (
        <h2>Loading...</h2>
      )}
      
      {isSent && (
        <>
          <h2>
            The link was successfully sent!
          </h2>

          <p>
            Please, check your email
          </p>
        </>
      )}

      {isError && (
        <>
          <h2>
            Oops, something went wrong :c
          </h2>

          <Button
            variant='outlined'
            onClick={() => setIsError(false)}
          >
            Retry
          </Button>
        </>
      )}
    </Container>
  );
}