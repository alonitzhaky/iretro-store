import axios from "axios";
import Profile from "../../models/Profile";
import { SERVER } from "../../env"

export function getUserProfile() {
    const accessToken = JSON.parse(String(localStorage.getItem("token")))
    let config = {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    }
    console.log(accessToken)
    return new Promise<{ data: Profile }>((resolve =>
        axios.get(SERVER + '/profile/', config).then(res => resolve({ data: res.data }))
    ))
}