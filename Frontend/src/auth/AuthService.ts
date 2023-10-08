import { Endpoints } from "../config/endpoints";
import { API_URL } from "../config/general-config";
import { apiPost } from "../shared/apiService";
import { UserData } from "../shared/types";

const UserLogin = async (userLogin: UserData) => {
    const response = await apiPost({
        url: `${API_URL}/${Endpoints.LOGIN}`,
        body: userLogin,
    });

    const username = response.username;
    const userID = response._id;

    return {
        username,
        userID,
    };
};

const logout = async (reload = true) => {
    localStorage.removeItem('userID');
    localStorage.removeItem('username');
    reload && window.location.reload();
}

export {
    UserLogin,
    logout
}