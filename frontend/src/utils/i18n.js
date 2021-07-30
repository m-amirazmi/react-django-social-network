import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    auth: {
                        change_language: 'Change Language',
                        english: 'English',
                        malay: 'Malay',
                        register: 'register',
                        login: 'login',
                        username: 'username',
                        email: 'email',
                        password: 'password',
                        confirm_password: 'confirm password',
                        full_name: 'full name',
                        choose_a_username: 'Choose a username...',
                        insert_your_full_name: 'Insert your full name...',
                        insert_your_email: 'Insert your email...',
                        insert_your_password: 'Insert your password...',
                        reenter_the_same_password: 'Reenter the same password...',
                        insert_your_registered_email: 'Insert your registered email...',
                        insert_your_registered_password: 'Insert your registered password...',
                        already_have_an_account: 'Already have an account?',
                        dont_have_an_account: 'Don\'t have an account?',
                        login_here: 'LOGIN HERE',
                        register_here: 'REGISTER HERE'
                    }
                }
            },
            ms: {
                translation: {
                    auth: {
                        change_language: 'Tukar Bahasa',
                        english: 'Inggeris',
                        malay: 'Melayu',
                        register: 'daftar',
                        login: 'log masuk',
                        username: 'nama pengguna',
                        email: 'emel',
                        password: 'kata laluan',
                        confirm_password: 'sahkan kata laluan',
                        full_name: 'nama penuh',
                        choose_a_username: 'Pilih nama pengguna...',
                        insert_your_full_name: 'Masukkan nama penuh anda...',
                        insert_your_email: 'Masukkan emel anda...',
                        insert_your_password: 'Masukkan kata laluan anda...',
                        reenter_the_same_password: 'Masukkan kata laluan yang sama...',
                        insert_your_registered_email: 'Masukkan emel anda yang dah di daftar...',
                        insert_your_registered_password: 'Masukkan kata laluan anda yang dah di daftar...',
                        already_have_an_account: 'Dah ada akaun?',
                        dont_have_an_account: 'Belum ada akaun?',
                        login_here: 'LOG MASUK DI SINI',
                        register_here: 'DAFTAR DI SINI'
                    }
                }
            }
        }
    });

export default i18n;