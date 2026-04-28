export default function UnavailableItems() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="font-semibold mb-4 text-red-600">
                Items cannot be delivered
            </h2>

            <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                <div>
                    <p className="text-sm font-medium">
                        Philips Avent - Natural Response Baby Feeding Bottle 125ml
                    </p>
                    <p className="text-xs text-gray-500">$ 8.06</p>
                </div>

                <div className="flex gap-3 text-sm">
                    <button className="text-red-500 hover:underline">Remove</button>
                    <button className="text-gray-500 hover:underline">
                        Move to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
}
