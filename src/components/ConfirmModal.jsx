const ConfirmModal = ({ onConfirm, onCancel, productName }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full mx-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Delete product</h3>
                <p className="text-sm text-gray-500 mb-6">Are you sure you want to delete <span className="font-medium text-gray-700">{productName}</span>? This can't be undone.</p>
                <div className="flex gap-3">
                    <button onClick={onCancel} className="flex-1 text-sm font-medium border border-gray-200 text-gray-600 rounded-md py-2 hover:bg-gray-50">Cancel</button>
                    <button onClick={onConfirm} className="flex-1 text-sm font-medium bg-red-600 text-white rounded-md py-2 hover:bg-red-500">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal;