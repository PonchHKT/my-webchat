import styles from '../styles/Sidebar.module.scss'

const ChatCard = () => {
    return (
        <div className={styles.chatCard}>
            <div className={styles.profil}>
            <img width="50px" height="auto" src="https://cdna.artstation.com/p/assets/images/images/011/470/102/original/odai-karsou-odai-gif1.gif?1529745899" alt="logo-profil"/>
            <div style={{marginTop: "8px", marginLeft: "12px"}}>
                <p className={styles.title}>CHANALOET Pornchai</p>
                <p className={styles.subtitle}>Bonjour à tous !</p>
            </div>
        </div>
    </div>
    )
}

export default ChatCard