export default function DeliveryItems() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border space-y-6">
            <div className="flex justify-between text-sm">
                <span>Shipping fee: USD 87.68</span>
                <span className="text-gray-500">Delivering on Saturday, 21st February</span>
            </div>

            {/* Item 1 */}
            <div className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="w-20 h-20 bg-gray-200 rounded-md" />
                <div className="flex-1">
                    <p className="font-medium text-sm">
                        Baby Brezza Pro Advanced Formula Dispenser
                    </p>
                    <p className="text-xs text-gray-500">Qty 1</p>
                    <p className="text-sm font-semibold mt-1">$ 271.75</p>
                </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="w-20 h-20 bg-gray-200 rounded-md" />
                <div className="flex-1">
                    <p className="font-medium text-sm">
                        Philips Avent Natural Response Baby Feeding Bottle 125ml
                    </p>
                    <p className="text-xs text-gray-500">Qty 1</p>
                    <p className="text-sm font-semibold mt-1">$ 12.25</p>
                </div>
            </div>

            <button className="bg-primary text-white px-4 py-2 rounded-md text-sm">
                Add Gift Wrap
            </button>
        </div>
    );
}
