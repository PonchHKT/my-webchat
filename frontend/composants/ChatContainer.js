import styles from '../styles/ChatContainer.module.scss'

const ChatContainer = () => {
    return (
        <div>
            <div className={styles.chatbox}>
            <div className={styles.chatwindow}>
            <div style={{position: 'absolute', bottom: 0,}}>
            <div className={styles.chatinput}>
            <input className={styles.input} type="text" placeholder="Aa"/>
            <button className={styles.button} type="submit">
            <i style={{fontSize: 30, }} class="far fa-link"/>
            <i style={{fontSize: 30, }} class="fad fa-paper-plane"/>
            <i style={{fontSize: 30, }} class="far fa-icons"/>
            </button>
            </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default ChatContainer