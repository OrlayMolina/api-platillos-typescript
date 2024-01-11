export interface Platillo {
    
    id: number;
    nombre: string;
    precio: string;
}

export interface ApiResponse {
    message: string;
    data: Platillo[];
}

export class ApiService {
    private baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl;
    }

    async getPlatillos(): Promise<Platillo[]> {
        try {
            
            const response = await fetch(`${this.baseUrl}/platillos`);

            if(!response.ok){
                throw new Error('Error al obtener los datos de la API');
            }

            const apiResponse: ApiResponse = await response.json();
            return apiResponse.data;

        } catch (error) {
            console.error('Error en la llamada a la API:', error);
      throw error;
        }
    }
}