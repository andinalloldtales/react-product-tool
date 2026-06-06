import { useEffect, useState } from "react"
import axios from "axios";
import Product from "../components/Product"

const HomePage = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = (id) => {
        setProducts(products.filter(p => p._id !== id));
    }

    const getProducts = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get("https://backend-product-tool.onrender.com/api/products");
            console.log(response.data);
            setProducts(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            {isLoading ? (
                <div className="flex justify-center mt-20">
                    <svg className="animate-spin h-8 w-8 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                </div>
            ) : (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <Product key={index} product={product} onDelete={handleDelete} />
                        ))
                    ) : (
                        <div>There is no product</div>
                    )}
                </div>
            )}
        </div>
    )

}

export default HomePage