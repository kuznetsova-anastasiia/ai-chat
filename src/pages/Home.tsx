import { useSearchParams } from "react-router-dom";
import { Chat } from "../components/Chat"
import { SideBar } from "../components/SideBar"
import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";

const Menu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" stroke="#030303" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const Home = () => {
  const [menu, setMenu] = useState(false);
  const [searchParams] = useSearchParams();
  const currentChat = searchParams.get('chat');

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        paddingY: '40px'
      }}
    >
      <Button
        sx={(theme) => {
          return {
            padding: theme.spacing(1),
            [theme.breakpoints.down('md')]: {
              alignSelf: 'flex-start',
              marginTop: '15px'
            },
            [theme.breakpoints.up('md')]: {
              display: 'none'
            },
        }}}
        onClick={() => setMenu(true)}
      >
        <Menu />
      </Button>

      <Modal
        open={menu}
        onClose={() => setMenu(false)}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            backgroundColor: '#D8E1ED',
            height: '100%',
            paddingY: '20px',
            paddingX: '10px',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px'
          }}
        >
          <SideBar />
        </Box>
      </Modal>

      <Box
        sx={(theme) => {
          return {
            padding: theme.spacing(1),
            [theme.breakpoints.down('md')]: {
              display: 'none'
            },
            [theme.breakpoints.up('md')]: {
              height: '100%'
            }
        }}}
      >
        <SideBar />
      </Box>

      {currentChat
        ? <Chat />
        : (
          <Box
            sx={{
              backgroundColor: '#F9F9F9',
              borderTopLeftRadius: '40px',
              borderBottomLeftRadius: '40px',
              margin: 0,
              paddingX: '64px',
              paddingBottom: '60px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}
          >
            <p>Create or open the chat!</p>
          </Box>
        )}
    </Box>
  )
}