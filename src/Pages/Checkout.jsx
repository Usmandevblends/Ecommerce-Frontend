import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = ({setOrder}) => {
    const [billingToggle, setBillingToggle] = useState(true);
    const [shippingToggle, setShippingToggle] = useState(false);
    const [paymentToggle, setPaymentToggle] = useState(false);
    const [paymentMethonds, setPaymentMethonds] = useState("cod")
    const [shippingInfo, setShippingInfo] =useState({
        addres: '',
        city: '',
        zip: '',
    })
    const navigate = useNavigate()

    const handleOrder = () => {
        const newOrder = {
            products: cart.products,
            orderNumber : '12344',
            shippingInformation: shippingInfo,
            totalPrice: cart.totalPrice
        }
        setOrder(newOrder)
        navigate('/order-confirmation')
    }


    const cart = useSelector(state => state.cart);
    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    <div className='border p-6 mb-6 rounded-lg shadow-md'>
                        <div
                            className='flex items-center justify-between cursor-pointer'
                            onClick={() => setBillingToggle(!billingToggle)}
                            role='button'
                            aria-expanded={billingToggle}>
                            <h3 className='text-lg font-semibold'>Billing Information</h3>
                            {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 mt-4 ${billingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700' htmlFor='name'>Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    placeholder='Enter Name'
                                    className='w-full px-3 py-2 border rounded mt-1'
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700' htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    placeholder='Enter Email'
                                    className='w-full px-3 py-2 border rounded mt-1'
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700' htmlFor='phone'>Phone</label>
                                <input
                                    type='tel'
                                    id='phone'
                                    placeholder='Enter Phone #'
                                    className='w-full px-3 py-2 border rounded mt-1'
                                />
                            </div>
                        </div>
                    </div>
                    {/* Shipping  */}
                    <div className='border p-6 mb-6 rounded-lg shadow-md'>
                        <div
                            className='flex items-center justify-between cursor-pointer'
                            onClick={() => setShippingToggle(!shippingToggle)}
                            role='button'
                            aria-expanded={shippingToggle}>
                            <h3 className='text-lg font-semibold'>Shipping Information</h3>
                            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 mt-4 ${shippingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700' htmlFor='name'>Address</label>
                                <input
                                    type='text'
                                    id='name'
                                    placeholder='Enter Name'
                                    className='w-full px-3 py-2 border rounded mt-1'
                                    onChange={(e) => setShippingInfo({...shippingInfo, addres: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700' htmlFor='email'>City</label>
                                <input
                                    type='text'
                                    id='City'
                                    placeholder='City name'
                                    className='w-full px-3 py-2 border rounded mt-1'
                                    onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700' htmlFor='phone'>Zipcode</label>
                                <input
                                    type='text'
                                    name='zip'
                                    placeholder='zip code'
                                    className='w-full px-3 py-2 border rounded mt-1'
                                    onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value})}

                                />
                            </div>
                        </div>
                    </div>
                    {/* Payment Methonds */}
                    <div className='border p-6 mb-6 rounded-lg shadow-md'>
                        <div
                            className='flex items-center justify-between cursor-pointer'
                            onClick={() => setPaymentToggle(!paymentToggle)}
                            role='button'
                            aria-expanded={paymentToggle}>
                            <h3 className='text-lg font-semibold'>Payment Methods</h3>
                            {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 mt-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center mb-2'>
                                <input
                                    type='radio'
                                    id='payment'
                                    checked={paymentMethonds === 'cod'}
                                    onChange={() => setPaymentMethonds('cod')}
                                />
                                <label className='block text-gray-700 ml-2' htmlFor='name'>Cash on Delivery</label>
                            </div>
                        </div>
                        <div className={`space-y-4 mt-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center mb-2'>
                                <input
                                    type='radio'
                                    id='payment'
                                    checked={paymentMethonds === 'dc'}
                                    onChange={() => setPaymentMethonds('dc')}
                                />
                                <label className='block text-gray-700 ml-2' htmlFor='name'>Debit Card</label>
                            </div>
                            {paymentMethonds === 'dc' && (
                                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                                    <h3 className='text-xl font-semibold mb-4'>Debit Card Imformation</h3>
                                    <div className='mb-4'>
                                        <label htmlFor="" className='block text-gray-700 font-semibold'>Card Name</label>
                                        <input type="text" placeholder='Enter Card Name' className='border p-2 w-full rounded' />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="" className='block text-gray-700 font-semibold' >Card Holder Name</label>
                                        <input type="text" placeholder='Enter Holder Name' className='border p-2 w-full rounded' />
                                    </div>
                                    <div className='flex justify-between mb-4'>
                                        <div className='w-1/2 mr-2'>
                                            <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Expire Date</label>
                                            <input type="text" placeholder='MM/YY' required />
                                        </div>
                                        <div className='w-1/2 ml-2'>
                                            <label htmlFor="" className='block text-gray-700 font-semibol mb-2'>CVV</label>
                                            <input type="text" placeholder='CVV' className='border p-2 w-full rounded' />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                    <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                    <div className='space-y-4'>
                        {cart.products.map(product => (
                            <div key={product.id} className='flex justify-between'>
                                <div className='flex items-center'>
                                    <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                                    <div className='ml-4'>
                                        <h4 className='text-md font-semibold'>{product.name}</h4>
                                        <p className='text-gray-600'>${product.price} X {product.quantity}</p>
                                    </div>
                                </div>
                                <div className='text-gray-800'>
                                    ${product.price * product.quantity}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-4 border-t pt-4'>
                        <div className='flex justify-between'>
                            <span>Total Price:</span>
                            <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                    <button className='w-full bg-red-600 text-white py-4 mt-6 hover:bg-red-800' onClick={handleOrder}>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;