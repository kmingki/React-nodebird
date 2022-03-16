import { io } from 'socket.io-client';

export const socket = io.connect('http://localhost:3065', {
  path: '/socket.io',
  withCredentials: true,
});
