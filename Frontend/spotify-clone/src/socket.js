import io from "socket.io-client";

// const url =
//   import.meta.env.NODE_ENV === "production"
//     ? undefined
//     : import.meta.env.VITE_URL;

const url = import.meta.env.VITE_BACKEND_URL;

export const socket = io(url, {
  rejectUnauthorized: false,
});
