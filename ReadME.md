<h1 align="center">Wechat NextJS/React & Socket.io 📑</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/NextJS-12.0.1-green" />
    <img alt="Version" src="https://img.shields.io/badge/Socket.io-4.4.0-cyan" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  </a>
</p>

My WebChat is an project from school made with NextJS/React and Socket.io.

Introduction:

Alright, so you’re sitting on your couch reading tweets about political instability in the US and how it’ll affect you even though you don’t live there.
The very next minute you’re scrolling through cat asmr posts on instagram because why not. After about 20 minutes of feline purring therapy, you start to have an elaborate discussion with your friends about how you can run your country better than the government. <br>
The above activities have one thing in common. You need to get a job. Other than that, if you noticed, everything’s happening in real time.<br>
The endless stream of tweets and instagram posts, the asynchronous nature of a group of friends chatting, all happen instantaneously, in real time. <br>
 <br>
Ever wondered how this happens? You guessed it, sockets.

## Demo

<img src="https://s10.gifyu.com/images/Desktop-2021.12.10---17.48.32.03.gif" width="40" height="40" />

## Prerequisites

- NextJS 12.0.1
- React 17.0.2
- Socket.io 4.4.0

## Installation

1.First you need to get into the root folder of frontend and server files:
```bash
cd frontend
cd server
```
2.Install all the packages of both files:
```bash
>npm install
```
3.Run the instance with theses commands:
```bash
frontend> npm run dev
server> npm start
```
## Usage

```html
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
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Author

👤 **Ponch**

* Website: https://shuxdev.com
* Insta: [@Ponch](https://www.instagram.com/ponchhkt/)
* GitHub: [@Ponch](https://github.com/Ponch)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [@Ponch](https://github.com/PonchHKT)
.<br />

*** 
Craft with ❤️ Ponch
