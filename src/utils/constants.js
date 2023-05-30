export default {
    API_URL: process.env.NODE_ENV === 'production' ? `https://${window.location.hostname}/api/v1/` : `http://${window.location.hostname}:8000/api/v1/`,
}
