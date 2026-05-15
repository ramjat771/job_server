export const socketHandler = (io) => {
  io.on(
    "connection",
    async (socket) => {
   
      socket.on(
        "joinRoom",
        (room) => {
          socket.join(room);

          socket.emit(
            "roomJoined",
            {
              room,
            }
          );
        }
      );

      socket.on(
        "disconnect",
        () => {
         

          console.log(
            "❌ Disconnected:",
            socket.id,
            "| Users:"
          );

     
        }
      );
    }
  );
};