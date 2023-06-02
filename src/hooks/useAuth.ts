import { useEffect } from "react";
import { supabase } from "../utils/supabase";
import { useAppDispatch } from "../redux/hooks";
import { setSession, setSessionError, setIsLoading } from "../redux/authSlice";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session)
      dispatch(setSession(session));
      dispatch(setSessionError(null));
      dispatch(setIsLoading(false));
    });

  }, [dispatch]);
}