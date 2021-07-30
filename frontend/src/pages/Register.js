import { Link } from 'react-router-dom'
import { Auth } from '../layouts/Auth'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { useTranslation } from 'react-i18next'

export const Register = () => {

    const { t } = useTranslation()

    const renderTitle = () => {
        return (
            <h4 className="text-uppercase">{t('auth.register')}</h4>
        )
    }

    const renderLoginForm = () => {
        return (
            <Form>
                <FormGroup className="mb-3">
                    <Label for="username" className="text-capitalize">{t('auth.username')}</Label>
                    <Input type="text" name="username" id="username" placeholder={t('auth.choose_a_username')} />
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label for="fullName" className="text-capitalize">{t('auth.full_name')}</Label>
                    <Input type="text" name="fullName" id="fullName" placeholder={t('auth.insert_your_full_name')} />
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label for="email" className="text-capitalize">{t('auth.email')}</Label>
                    <Input type="email" name="email" id="email" placeholder={t('auth.insert_your_email')} />
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label for="password" className="text-capitalize">{t('auth.password')}</Label>
                    <Input type="password" name="password" id="password" placeholder={t('auth.insert_your_password')} />
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label for="confirmPassword" className="text-capitalize">{t('auth.confirm_password')}</Label>
                    <Input type="password" name="confirmPassword" id="confirmPassword" placeholder={t('auth.reenter_the_same_password')} />
                </FormGroup>
            </Form>
        )
    }

    const renderButton = () => {
        return (
            <Button outline color="primary" block>{t('auth.register')}</Button>
        )
    }

    const renderFooter = () => {
        return (
            <p>{t('auth.already_have_an_account')} <Link to="/login">{t('auth.login_here')}</Link></p>
        )
    }


    return <Auth renderTitle={renderTitle} renderLoginForm={renderLoginForm} renderButton={renderButton} renderFooter={renderFooter} />
}
