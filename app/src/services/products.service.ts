import api from "../api";

export class ProductsService {
    static async getAll() {
        const {data} = await api.get("/produtcts")
        return data
    }
 }