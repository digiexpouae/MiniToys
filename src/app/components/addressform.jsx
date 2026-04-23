"use client";
import { useEffect, useState } from "react";
import api from "../utils/axiosInterceptor";
export default function AddressForm({ address }) {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        country: "United States",
        city: "",
        state: "",
        street: "",
        building: "",
        countryCode: "+1",
        phone: "",
    });


    const [errors, setErrors] = useState({});
    const [savedAddress, setSavedAddress] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        console.log("address", address)
        setSavedAddress(address)

    }, [address])
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

        setErrors(prev => ({
            ...prev,
            [e.target.name]: ""
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.country.trim()) newErrors.country = "Country is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.state || formData.state === "Select region") newErrors.state = "State is required";
        if (!formData.street.trim()) newErrors.street = "Street is required";
        if (!formData.building.trim()) newErrors.building = "Building is required";
        if (!formData.countryCode) newErrors.countryCode = "Code required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";

        // if (formData.phone && !/^[0-9]{7,15}$/.test(formData.phone)) {
        //     newErrors.phone = "Enter valid phone number";
        // }

        return newErrors;
    };

    const handleSave = async () => {
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            setLoading(true);

            // simulate API call
            const data = {
                name: formData.firstName + " " + formData.lastName,
                country: formData.country,
                city: formData.city,
                state: formData.state,
                street: formData.street,
                building: formData.building,
                phone: formData.countryCode + formData.phone
            }
            const response = await api.post({ url: 'v1/address/new', data: data })
            console.log("response", response)
            const res = await api.get({ url: 'v1/address/get' })
            console.log("res", res)
            if (res.success) {
                setSavedAddress(res.response)
            }

        } catch (err) {
            console.log(err)
            setErrors({ api: "Failed to save address. Try again." });
        } finally {
            setLoading(false);
        }
    };


    if (savedAddress) {
        console.log("savedAddress", savedAddress, address)
        return (
            <div className="bg-white p-6 rounded-2xl border shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Saved Address</h2>

                <div className="text-sm text-gray-700 space-y-1">
                    <p><b>Name:</b> {savedAddress.name}</p>
                    <p><b>Country:</b> {savedAddress.country}</p>
                    <p><b>City:</b> {savedAddress.city}</p>
                    <p><b>Phone:</b> {savedAddress.phone}</p>
                    <p><b>State:</b> {savedAddress.state}</p>
                    <p><b>Street:</b> {savedAddress.street}</p>
                    <p><b>Building:</b> {savedAddress.building}</p>
                </div>

                <button
                    onClick={() => setSavedAddress(null)}
                    className="mt-5 px-5 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition"
                >
                    Edit Address
                </button>
            </div>
        );
    }

    /* ================= FORM UI ================= */

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-6 text-gray-800">
                Delivery address
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* First Name */}
                <div>
                    <input
                        name="firstName"
                        placeholder="First name"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none transition"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>

                {/* Last Name */}
                <div>
                    <input
                        name="lastName"
                        placeholder="Last name"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none transition"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>

                {/* Country */}
                <div>
                    <select
                        name="country"
                        onChange={handleChange}
                        value={formData.country}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none transition"
                    >
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="UAE">UAE</option>
                    </select>
                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                </div>

                {/* City */}
                <div>
                    <input
                        name="city"
                        placeholder="City"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none transition"
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>

                {/* State */}
                <div>
                    <select
                        name="state"
                        onChange={handleChange}

                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none transition"
                    >
                        <option value="" >Select region</option>
                        <option value="California" >California</option>
                        <option value="Texas" >Texas</option>
                        <option value="Punjab" >Punjab</option>
                        <option value="Sindh" >Sindh</option>
                    </select>
                    {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                </div>

                {/* Street */}
                <div>
                    <input
                        name="street"
                        placeholder="Street / Landmark"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none transition"
                    />
                    {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street}</p>}
                </div>

                {/* Building */}
                <div className="md:col-span-2">
                    <input
                        name="building"
                        placeholder="Building / Apartment"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none transition"
                    />
                    {errors.building && <p className="text-red-500 text-xs mt-1">{errors.building}</p>}
                </div>

                {/* Phone */}
                <div className="md:col-span-2">
                    <div className="flex gap-3">
                        <select
                            name="countryCode"
                            onChange={handleChange}
                            value={formData.countryCode}
                            className="rounded-lg border border-gray-300 bg-gray-50 px-3 py-3 text-sm focus:outline-none transition"
                        >
                            <option value="+1">+1 (US)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+92">+92 (PK)</option>
                            <option value="+971">+971 (UAE)</option>
                            <option value="+61">+61 (AU)</option>
                            <option value="+91">+91 (IN)</option>
                        </select>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter mobile number"
                            onChange={handleChange}
                            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none transition"
                        />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

            </div>

            {errors.api && <p className="text-red-500 text-sm mt-4">{errors.api}</p>}

            <button
                onClick={handleSave}
                disabled={loading}
                className="mt-8 w-full md:w-auto bg-[#DA3C24] text-white font-medium px-8 py-3 rounded-lg shadow-sm hover:bg-[#b9321d] transition-all duration-200 disabled:opacity-50"
            >
                {loading ? "Saving..." : "Save Address"}
            </button>
        </div>
    );
}
