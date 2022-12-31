export class CtaClient {
    private apiKey: string;
    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }
    public async getArrivals(stationId: number): Promise<unknown> {
        const url = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${this.apiKey}&mapid=${stationId}&outputType=JSON`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
    public async getPositions(routes: string[]): Promise<unknown> {
        const url = `http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=${this.apiKey}&rt=${routes.join(",")}&outputType=JSON`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

}