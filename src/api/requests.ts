import { get, post, remove } from "./client";
import { Chat } from "../types/Chat";

const BASE_URL = import.meta.env.VITE_API_URL;
const CHATS_URL = `${BASE_URL}/chats`;

export const getAllChats = (userId: string) => {
  return get<Chat[]>(`${CHATS_URL}?userId=${userId}`);
}

export const createChat = (title: string, userId: string) => {
  return post<Chat>(CHATS_URL, { title, userId });
}

export const deleteChat = (id: number) => {
  return remove(`${CHATS_URL}/${id}`);
}
