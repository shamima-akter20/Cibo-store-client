
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../Firebase/AuthProvider';

export default function ProductDetails() {
    const product = useLoaderData()
    const {user} = useContext(AuthContext);

    const myCart = product;
    myCart.email = user.email;
    // console.log(myCart);
    // fetch('url', {
    //     headers: {
    //         'conte'
    //     },
    //     body: JSON.stringify()
    // })
  return (
    <div>
        <h1>product details</h1>
        <button className='btn'></button>
    </div>
  )
}


