const API_DEV = 'http://127.0.0.1:8000'
const API_PROD = ''

const API = API_DEV

export const api = {
    register: `${API}/auth/register/`,
    login: `${API}/auth/login/`,
    logout: `${API}/auth/logout/`
}
