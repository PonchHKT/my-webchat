import ChatContainer from '../composants/ChatContainer'
import ProfilContainer from '../composants/ProfilContainer'
import SidebarContainer from '../composants/SidebarContainer'
import ChatBotNesrine from '../composants/ChatBotNesrine'
import { useEffect, useState } from 'react';
import { io } from "socket.io-client";

import styles from '../styles/Home.module.scss'

export default function Home() {

    const [socketId, setSocketId] = useState()

    useEffect(() => {
        const socket = io("ws://localhost:4242");
        setSocketId(socket)

        socket.on("new_msg", (data) => {
            alert(data.msg);
        })
    }, [])

    return ( 
        <div className={styles.homeContainer}>

            <SidebarContainer />

            <ChatContainer socket={socketId}/>

            <ProfilContainer />

            <ChatBotNesrine />

        </div>
    )
}
