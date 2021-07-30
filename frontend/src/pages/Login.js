import { Link } from 'react-router-dom'
import { Auth } from '../layouts/Auth'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { useTranslation } from 'react-i18next'

export const Login = () => {

    const { t } = useTranslation()

    const renderTitle = () => {
        return (
            <h4 className="text-uppercase">{t('auth.login')}</h4>
        )
    }

    const renderLoginForm = () => {
        return (
            <Form>
                <FormGroup className="mb-3">
                    <Label for="email" className="text-capitalize">{t('auth.email')}</Label>
                    <Input type="email" name="email" id="email" placeholder={t('auth.insert_your_registered_email')} />
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label for="password" className="text-capitalize">{t('auth.password')}</Label>
                    <Input type="password" name="password" id="password" placeholder={t('auth.insert_your_registered_password')} />
                </FormGroup>
            </Form>
        )
    }

    const renderButton = () => {
        return (
            <Button outline color="primary" className="text-uppercase" block>{t('auth.login')}</Button>
        )
    }

    const renderFooter = () => {
        return (
            <p>{t('auth.dont_have_an_account')} <Link to="/register">{t('auth.register_here')}</Link></p>
        )
    }


    return <Auth renderTitle={renderTitle} renderLoginForm={renderLoginForm} renderButton={renderButton} renderFooter={renderFooter} />
}
