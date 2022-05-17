import http from "../http-common";

class UserDataService{

    // User
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



    // Song
    




    
}
export default new UserDataService();
