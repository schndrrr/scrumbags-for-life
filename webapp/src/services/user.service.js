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
        return http.get(`/user?id=${id}`);
    }

    updateUser(id, data) {
        return http.post(`/users/${id}`, data);
    }

    deleteUser(id) {
        return http.delete("/user/${id}")
    }

    checkUser(data) {
        return http.post("user", data);
    }
    
}
export default new UserDataService();