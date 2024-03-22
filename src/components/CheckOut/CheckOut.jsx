import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { serverTimestamp, addDoc, collection} from 'firebase/firestore'
import { useState } from 'react'
import { db } from '../../config/firebaseConfig'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { ItemCartCheckOut } from '../ItemCart/ItemCartCheckOut'
import { BounceLoader } from "react-spinners";
import mataglogo from "../../assets/matag_logo.png"

export const CheckOut = () => {

    const { cart, clearCart, total } = useContext(CartContext);
    const [isLoading, setIsLoading] = useState(false);

    const [formCheckout, setFormCheckout] = useState({
        name: "",
        phone: "",
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
        setIsLoading(true);
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
        setIsLoading(false);
    }

    if(orderId){
        Swal.fire({icon: "success", title: "¡Compra realizada con éxito!", text: `Su ID de orden es: ${orderId}`})        
    }

    return (
        isLoading ? <div className="h-3/4 flex items-center justify-center flex-col"><BounceLoader color={'#274939'} loading={isLoading} size={150} aria-label="Loading Spinner" data-testid="loader" /></div> :
        <>
            {total < 1 ? (
                    <div className='flex flex-col items-center justify-center h-4/6 m-10'>     
                        <div className='bg-white rounded border h-1/2 w-2/5 flex items-center justify-center flex-col shadow-2xl'>
                            <img src={mataglogo}></img>
                            <h1 className='text-4xl text-green-800 mb-2 mt-2'>¡Muchas gracias por su compra!</h1>
                            <h1 className='text-xl text-green-800 mb-4'>Su número de seguimiento es: {orderId}</h1>                            
                            <Link to="/">
                                <button className='bg-green-800 hover:bg-green-900 text-white w-44 h-10'>Ir a inicio</button>
                            </Link>
                        </div>                                       
                    </div>
            ) : (
                <div className="flex m-10 justify-around h-3/5">
                    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-1">Nombre</label>
                            <input id="name" type="text" value={formCheckout.name} onChange={handleName} required placeholder='Mate Amargo'
                                className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-1">Teléfono</label>
                            <input id="phone" type="tel" value={formCheckout.phone} onChange={handlePhone} required placeholder='(+54)'
                                className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">Email</label>
                            <input id="email" type="email" value={formCheckout.email} onChange={handleEmail} required placeholder='mateamargoteam@gmail.com'
                                className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <input type="submit" value="Terminar la compra"
                                className="bg-green-700 hover:bg-green-800 hover:cursor-pointer text-white font-bold py-2 px-4 rounded"/>
                        </div>
                    </form>
                    <div className='max-h-full bg-white border border-green-800 rounded'>
                        <h1 className='text-green-800 text-xl'>Estas comprando: </h1>
                        <div className='h-5/6 bg-white'>
                            <div className='overflow-auto h-full mb-4 p-1'>
                                { cart.map((item)=> (   
                                    <div key={item.id} className="flex place-content-center">          
                                        <ItemCartCheckOut name={item.name} itemId={item.id}  img={item.img} quantity={item.quantity} size={item.size}></ItemCartCheckOut>                  
                                    </div>        
                                    )) 
                                }
                            </div>
                            <div className='flex justify-center items-center'>
                                <Link to="/cart">
                                    <button onClick={() => {}}className='bg-green-700 h-10 w-52 mt-1 hover:cursor-pointer hover:bg-green-800 transition-all duration-300'>Volver al carrito</button>                                      
                                </Link> 
                            </div>                        
                        </div>                                          
                    </div>
                </div>
            )}
        </>
    );    
}
