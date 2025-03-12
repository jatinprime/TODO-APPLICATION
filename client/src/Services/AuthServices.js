import axios from "axios";

//BASICALLY AXIOS IS USED FOR THE NETWORK REQUEST PART

const registerUser = (data) => {
    //remaining url has already been written in package-json file in the form of proxy
    return axios.post("/user/register", data);
};

const loginUser = (data) => {
    //remaining url has already been written in package-json file in the form of proxy
    return axios.post("/user/login", data);
};

const AuthServices = { registerUser, loginUser };

export default AuthServices;
