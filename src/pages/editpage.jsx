import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        quantity: "",
        price: "",
        image: ""
    });

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`https://backend-product-tool.onrender.com/api/products/${id}`);
               
                console.log(response.data)
                setProduct(response.data);
            } catch (error) {
              console.log(error);
            }
        }
        getProduct();
    }, [id])

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            await axios.put(`https://backend-product-tool.onrender.com/api/products/${id}`, product);
            
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong.');
        } finally {
            setIsLoading(false);
             toast.success('Product updated!');
             
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Edit product</h2>
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
                         {product.image && (
                            <img 
                                key={product.image}
                                src={product.image} 
                                alt="preview" 
                                className="mt-2 w-full h-40 object-cover rounded-md border border-gray-200" 
                                onError={(e) => e.target.style.display = 'none'} 
                              />
                         )}
                    </div>
                    <button onClick={handleSubmit} className="w-full bg-gray-800 text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700 mt-2">
                        {isLoading ? "Saving..." : "Update product"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditPage;