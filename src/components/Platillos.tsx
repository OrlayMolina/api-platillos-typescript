import { useState, useEffect } from "react";
import { ApiService, Platillo } from "../services/apiServices";

const Platillos: React.FC = () => {

    const [platillos, setPlatillos] = useState<Platillo[]>([]);

    useEffect(() => {

        const apiService = new ApiService('https://ucamp-api-platillos.onrender.com');

        apiService.getPlatillos()
            .then((data) => setPlatillos(data))
            .catch((error) => console.error('https://ucamp-api-platillos.onrender.com'));

    }, []);

    return (
        <div>
            <h1>Platillos</h1>

            <ul>
                {platillos.map(platillo => (
                    <li
                        key={platillo.id} 
                    >
                        {platillo.nombre} - ${platillo.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Platillos;