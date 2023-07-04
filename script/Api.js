export class API {
    static baseURL = "http://localhost:6278/companies"

    static async getPartners() {
        const response = await fetch(this.baseURL)
        const data = response.json()

        return data
    }
}