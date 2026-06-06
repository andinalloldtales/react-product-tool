import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ConfirmModal from "./ConfirmModal";

const Product = ({ product, onDelete }) => {
    const [showModal, setShowModal] = useState(false);

    const handleDelete = async () => {
        try {
            await axios.delete(`https://backend-product-tool.onrender.com/api/products/${product._id}`);
            onDelete(product._id);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {showModal && (
                <ConfirmModal
                    productName={product.name}
                    onConfirm={handleDelete}
                    onCancel={() => setShowModal(false)}
                />
            )}
            <div className="bg-white rounded shadow-lg overflow-hidden">
                <img src={product.image} className="w-full h-28 object-cover"/>
                <div className="px-4 pt-2 pb-4">
                    <h2 className="text font-semibold">{product.name}</h2>
                    <div className="text-sm">Quantity: {product.quantity}</div>
                    <div className="text-sm">Price ${product.price}</div>
                    <div className="mt-2 flex gap-4">
                        <Link to={`/edit/${product._id}`} className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer">Edit</Link>
                        <button onClick={() => setShowModal(true)} className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;