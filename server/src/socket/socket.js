import { Server } from "socket.io";

const socket = () => {
    const server = new Server({
        cors: {
            origin: "*",
        },
    });

    server.on("connection", (socket) => {
        console.log("new connection.", socket.id);

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
        

            socket.on("chat message", (data) => {
            server.emit("chat message", data);
        });

        // socket.on("room::join", ({ room }) => {
        //     const tab = {
        //         users: [
        //             {
        //                 email: ''
        //             },
        //             {
        //                 email: '',
        //             }
        //         ],
        //         message: [
        //             {
        //                 user: '',
        //                 content: ''
        //             },
        //             {
        //                 user: '',
        //                 content: ''
        //             }
        //         ]
        //     }

        //     console.log(room)
        //     socket.join(room);
        // });

        
    })

    
    server.listen(process.env.PORT_IO || 4242);
    console.log(`server started at ws://localhost:${process.env.PORT_IO || 4242}`);
}

export default socket