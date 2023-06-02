import { Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from './hooks/useAuth';
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';
import { useAppSelector } from './redux/hooks';

const App = () => {
  useAuth();
  const { isSignedIn, isLoading } = useAppSelector(state => state.auth);

  if (isLoading) {
    return (
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <LoadingButton>

        </LoadingButton>
      </Box>
    )
  }

  return (
    <div className='container'>
      { isSignedIn
        ? <Home />
        : <Auth />}
    </div>
  )
}

export default App
