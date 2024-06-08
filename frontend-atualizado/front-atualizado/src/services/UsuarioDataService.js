import http from "../http-common";

class UsuarioDataService {
    getAll() {
        return http.get("/Usuario");
    }

    create(data) {
        return http.post("/Usuario", data)
    }
}

export default new  UsuarioDataService();