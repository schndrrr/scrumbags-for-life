import http from "../http-common";

class UserDataService{

    // User
    createUser(data) {
        console.log (process.env.BASE_URL);
        return http.post("/user", data);
    }

    getAllUsers() {
        return http.get("/users")
    }

    getUser(id) {
        return http.get(`/user/${id}`);
    }

    updateUser(id, data) {
        return http.post(`/user/update/${id}`, data);
    }

    deleteUser(id) {
        return http.delete(`/user/${id}`);
    }

    authUser(data) {
        return http.post("/authenticate/", data);
    }
    
}
export default new UserDataService();