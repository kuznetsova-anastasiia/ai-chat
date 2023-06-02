import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthError, Session } from '@supabase/supabase-js';

export interface AuthState {
  session: Session | null;
  error: AuthError | null;
  isSignedIn: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  session: null,
  error: null,
  isSignedIn: false,
  isLoading: true,
}

function getIsSignedIn(state: any) {
  return !!state.session && !state.error;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session | null>) => {
      state.session = action.payload;
      state.isSignedIn = getIsSignedIn(state);
    },
    setSessionError: (state, action: PayloadAction<AuthError | null>) => {
      state.error = action.payload;
      state.isSignedIn = getIsSignedIn(state);
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  },
})

export const { setSession, setSessionError, setIsLoading } = authSlice.actions

export default authSlice.reducer