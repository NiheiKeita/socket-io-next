
import Message from '@/models/message'
import Translate from '@/models/translate'
import { atom } from 'jotai'
import { Socket } from 'socket.io-client'

export const socketAtom = atom(null as unknown as Socket)
export const messageBoardAtom = atom<Array<Message>>([])
export const userNameAtom = atom('')
export const translateAtom = atom<Translate[]>([])
