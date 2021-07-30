import { useState } from 'react'
import { Card, Container, Dropdown, DropdownToggle, DropdownMenu, Button } from 'reactstrap'
import styles from '../assets/css/components/Auth.module.css'
import { useTranslation } from 'react-i18next'

export const Auth = (props) => {

    const [languageDropdown, setLanguageDropdown] = useState(false)
    const { i18n, t } = useTranslation()

    const toggleDropdown = () => setLanguageDropdown(!languageDropdown)



    const renderLanguageSwitch = () => {

        const lngs = {
            en: { nativeName: t('auth.english') },
            ms: { nativeName: t('auth.malay') }
        };

        const dropdowns = Object.keys(lngs).map((lng) => (
            <div className={styles.item} onClick={toggleDropdown} onClick={() => i18n.changeLanguage(lng)} style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }}>
                <p>{lngs[lng].nativeName}</p>
            </div>
        ))

        return (
            <div className="ms-auto d-flex flex-row align-items-center">
                <p className="me-2" style={{ color: "#777", fontSize: "0.9rem" }}>{t('auth.change_language')}: </p>
                <Dropdown isOpen={languageDropdown} size="sm" toggle={toggleDropdown}>
                    <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={languageDropdown}
                    >
                        <Button size="sm" outline color="primary">
                            {lngs[i18n.language].nativeName || t('auth.change_language')}
                        </Button>
                    </DropdownToggle>
                    <DropdownMenu>
                        {dropdowns}
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }

    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <Container className="d-flex justify-content-center align-items-center h-100">
                <Card body className={`${styles.container} border-primary rounded-3`}>
                    <div className={styles.title}>
                        {props.renderTitle()}
                        {renderLanguageSwitch()}
                    </div>
                    <div className={styles.form}>
                        {props.renderLoginForm()}
                        {props.renderButton()}
                    </div>
                    <div className={styles.footer}>
                        {props.renderFooter()}
                    </div>
                </Card>
            </Container>
        </div>
    )
}
