import http from "../http-common";

class UserDataService{
    createUser(data) {
        console.log (process.env.BASE_URL);
        return http.post("/users", data);
    }

    getAllUsers() {
        return http.get("/users")
    }

    getUser(id) {
        return http.get(`/users/${id}`);
    }

    updateUser(id, data) {
        return http.post(`/users/${id}`, data);
    }

    deleteAllUsers() {
        return http.delete(`/users`);
    }

    deleteUser(id) {
        return http.delete("/user/${id}")
    }
}
export default new UserDataService();
