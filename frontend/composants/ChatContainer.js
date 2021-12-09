import { useEffect, useState } from 'react'
import styles from '../styles/ChatContainer.module.scss'

const ChatContainer = (props) => {

    const [msgList, setMsgList] = useState([])

    useEffect(() => {
        console.log(props.socket)
        
    }, [props.socket])
    
    if(props.socket !== undefined) {
        props.socket.on("chat message", (data) => {
            const tab = [...msgList]
            tab.push({ user: data.nick, message: data.message })
            setMsgList(tab)
            console.log(msgList)
        });
    }

    const addNewMessage = () => {
        const inputField = document.querySelector('#input-send-msg')

        props.socket.emit("chat message", {
            message: inputField.value,
        });
    }                    

    console.log(msgList.length)

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatContainerHeader}>
                <div className={styles.action}>
                    <i className="fad fa-search"></i>
                    <i className="fad fa-heart"></i>
                    <i className="fad fa-bell"></i>
                </div>
            </div>

            <div className={styles.chatContainerMsg}>

                <div className={styles.msg}>
                    </div>

                <div className={styles.msg}>
                    <div className={styles.date}>
                        <hr />
                        <p>Bienvenue !</p>
                        <hr/>
                    </div>

                    {   
                        msgList.length >= 1 ?

                            msgList.map((x) => {
                                console.log(x.message)
                                return (
                                    
                                    <p className={x.user === props.socket.id ? styles.right : styles.left}>{x.message}</p>
                                    
                                )
                            })
                        :
                            <p>ECRIRE SON PREMIER MESSAGE</p>
                    }

                </div>
            </div>

            <div className={styles.chatContainerSend}>
                <i className="fad fa-paperclip"></i>
                <i className="fad fa-camera-alt"></i>
                <i className="fad fa-smile-wink"></i>
                <textarea id="input-send-msg" placeholder="Salut, ça va ?" type="text"/>
                <i onClick={() => addNewMessage()} className="fad fa-arrow-circle-right"></i>
            </div>

        </div>
    )
}

export default ChatContainer