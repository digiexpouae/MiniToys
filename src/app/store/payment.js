import {create} from "zustand";


export const usePaymentMethod=create(
    (set)=>({
        selectedMethod:"",
        setselectedMethod:(selectedMethod)=>{
            set({selectedMethod})
        }
    })
)