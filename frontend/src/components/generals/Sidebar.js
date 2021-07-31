import { Link, useLocation } from 'react-router-dom'
import styles from '../../assets/css/components/Sidebar.module.css'
import { routes } from '../../utils/routes'

export const Sidebar = () => {

    const { pathname } = useLocation()

    const renderLinks = () => routes.map((route) => {
        const currentPageStyle = pathname === route.path && 'border border-2 border-primary border-top-0 border-bottom-0 border-end-0 text-primary fw-bold'
        if (route.showOnSide) return (
            <Link to={route.path} className={`${styles.link} ${currentPageStyle} d-flex flex-row px-4 my-4`}>
                <i className={`${route.icons} me-3`} />
                <p>{route.name}</p>
            </Link>
        )
    })



    return (
        <aside className={styles.container}>
            {renderLinks()}
        </aside>
    )
}
