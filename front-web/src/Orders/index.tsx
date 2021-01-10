import { useEffect, useState } from 'react'
import './styles.css'
import ProductsList from './ProductsList'
import StepsHeader from './StepsHeader'
import { OrderLocationData, Product } from './Types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders() {
    const [products, setProducts] = useState<Product[]>([])
    const [orderLocatio, setOrderLocatio] = useState<OrderLocationData>()

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
        
    }, []);
 
    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList products={products}/>
                <OrderLocation onChangeLocation={location => setOrderLocatio(location)}/>
            </div>
        </>
    )
}

export default Orders