import { Endpoints } from "../config/endpoints";
import { API_URL } from "../config/general-config";
import { apiPost } from "../shared/apiService";
import { UserData } from "../shared/types";
import { Paths } from "../config/paths";

const UserLogin = async (userLogin: UserData) => {
    const response = await apiPost({
        url: `${API_URL}/${Endpoints.LOGIN}`,
        body: userLogin,
    });

    const username = response.username;
    const userID = response._id;
    
    localStorage.setItem("usertoken", response.authentication.sessionToken);

    return {
        username,
        userID,
    };
};

const isLoggedIn = () => {
    const token = localStorage.getItem('usertoken');

    return token;
}

const logout = async (reload = true) => {

    localStorage.removeItem('userID');
    localStorage.removeItem('username');
    localStorage.removeItem('usertoken');

    reload && window.location.assign(Paths.LOGIN);
}

export {
    UserLogin,
    logout,
    isLoggedIn
}