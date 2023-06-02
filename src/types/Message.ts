export interface Message {
  id: number,
  text: string,
  role: 'user' | 'assistant' | 'system',
  chatId: number,
  createdAt: Date
}