import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        quantity: "",
        price: "",
        image: ""
    });

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            await axios.post("https://backend-product-tool.onrender.com/api/products", product);
            navigate("/");
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Add a product</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-sm text-gray-500 mb-1 block">Name</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm" value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} />
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 mb-1 block">Quantity</label>
                        <input type="number" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm" value={product.quantity} onChange={(e) => setProduct({...product, quantity: e.target.value})} />
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 mb-1 block">Price</label>
                        <input type="number" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm" value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} />
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 mb-1 block">Image URL</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm" value={product.image} onChange={(e) => setProduct({...product, image: e.target.value})} />
                    </div>
                        <button onClick={handleSubmit} disabled={isLoading} className="w-full bg-gray-800 text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700 mt-2 flex items-center justify-center gap-2">
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                    Saving...
                                </>
                            ) : "Save product"}
                        </button>
                </div>
            </div>
        </div>
    )
}

export default CreatePage;