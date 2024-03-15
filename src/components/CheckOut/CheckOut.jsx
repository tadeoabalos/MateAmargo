import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { serverTimestamp, addDoc, collection} from 'firebase/firestore'
import { useState } from 'react'
import { db } from '../../config/firebaseConfig'
import Swal from 'sweetalert2'
export const CheckOut = () => {

    const { cart , total, clearCart } = useContext(CartContext)

    const [formCheckout, setFormCheckout] = useState({
        name: "",
        phone: 0,
        email: ""
    })

    const [orderId, setOrderId] = useState(null)
    const handleName = (e) => {
        setFormCheckout( {
            ...formCheckout,
            name: e.target.value
        } )
    }
    const handlePhone = (e) => {
        setFormCheckout( {
            ...formCheckout,
            phone: e.target.value
        } )
    }
    const handleEmail = (e) => {
        setFormCheckout( {
            ...formCheckout,
            email: e.target.value
        } )
    }

    const handleSubmit = async (e) => {        
        e.preventDefault()
        const newOrder = {
            buyer: formCheckout,
            items: cart,
            total,
            date: serverTimestamp()
        }

        const order = await addDoc( collection( db, "orders" ), newOrder )

        setFormCheckout({
            name: "",
            phone: "",
            email: ""
        })
        
        clearCart();

        setOrderId(order.id);
    }

    if(orderId){
        Swal.fire({icon: "success", title: "¡Compra realizada con éxito!", text: `Su ID de orden es: ${orderId}`})        
    }

    return (
        <div className='flex items-center'>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input type='text' value={formCheckout.name} onChange={handleName} required/>            
                <label>Teléfono:</label>
                <input type='number' value={formCheckout.phone} className='form-control' onChange={handlePhone} required/> 
                <label>Email:</label>
                <input type='email' value={formCheckout.email} className='form-control' onChange={handleEmail} required/> 
                <input type='submit' value="Terminar la compra"/>
            </form>
        </div>
    )
}
