import ChatCard from "./ChatCard"

import styles from '../styles/Sidebar.module.scss'

const SidebarContainer = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.profil}>
              <img width="50px" height="auto" src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png" alt="logo-profil"/>
                <div>
                    <p className={styles.title}>CHANALOET Pornchai</p>
                    <p className={styles.subtitle}>Musculateur</p>
                </div>
                {/*EDIT*/}
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
            <input className={styles.searchBar} type="text" placeholder="Search chat..."/>
            <button type="submit" class={styles.searchButton}>
            <i class="fad fa-search"></i>
            </button>
            </div>
            <div className={styles.solid}>
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            </div>
        </div>
    )
}

export default SidebarContainer