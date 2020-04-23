export interface BookEntry {
  userId: string
  bookId: string
  createdAt: string
  name: string
  summary: string
  read: boolean
  attachmentUrl?: string
}
