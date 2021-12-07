import ChatContainer from '../composants/ChatContainer'
import ProfilContainer from '../composants/ProfilContainer'
import SidebarContainer from '../composants/SidebarContainer'

import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div className={styles.homeContainer}>
      
            <SidebarContainer />

            <ChatContainer />

            <ProfilContainer />

        </div>
    )
}
