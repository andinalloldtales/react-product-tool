import { useState } from "react"
import axios from "axios";

const HomePage = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getProducts = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get("https://backend-product-tool.onrender.com/api/products");
            console.log(response.data);
            setProducts(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>The home page</div>
    )

}

export default HomePage