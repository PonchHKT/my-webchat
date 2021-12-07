import styles from '../styles/Sidebar.module.scss'

const ChatCard = () => {
    return (
        <div className={styles.chatCard}>
            <div className={styles.profil}>
            <img width="50px" height="auto" src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="logo-profil"/>
            <div style={{marginTop: "8px", marginLeft: "12px"}}>
                <p className={styles.title}>CHANALOET Pornchai</p>
                <p className={styles.subtitle}>Musculateur</p>
            </div>
        </div>
    </div>
    )
}

export default ChatCard