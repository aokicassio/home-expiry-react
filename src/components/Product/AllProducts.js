import { Icon } from 'rsuite';

import { useState, useEffect, Fragment } from "react";
import ProductsTable from "./ProductsTable";


const AllProducts = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const username = process.env.REACT_APP_USER;
            const password = process.env.REACT_APP_PASSWD;
            const authString = `${username}:${password}`

            let headers = new Headers();

            const url = process.env.REACT_APP_HOST + '/product';

            headers.set('Authorization', 'Basic ' + btoa(authString));
            headers.set('Accept', 'application/json');
            headers.set('Content-Type', 'application/json');

            const response = await fetch(url, {
                method: 'GET',
                headers: headers
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedProducts = [];

            let today = new Date();
            today.setHours(0, 0, 0, 0);

            let isToday = (date) => {
                return date.getDate() === today.getDate() &&
                    date.getMonth() === today.getMonth() &&
                    date.getFullYear() === today.getFullYear();
            }

            responseData.forEach((product) => {
                const expiryDate = new Date(product.expiryDate);
                loadedProducts.push({
                    id: product.id,
                    name: product.name,
                    brand: product.brand.name,
                    expiryDate:  `${product.expiryDate[0]}-${product.expiryDate[1]}-${product.expiryDate[2]}`,
                    status: today > expiryDate ? <Fragment> <Icon icon="ban"/> Expired </Fragment> :
                        isToday(expiryDate) ? <Fragment> <Icon icon="exclamation-circle"/> Due </Fragment> : <Fragment> <Icon icon="smile-o"/> Good </Fragment>
                });
            });
            setProducts(loadedProducts);
        };

        fetchProducts().catch((error) => {
            console.log(error);
        });
    }, [props.refreshKey]);
    
    return (
        <ProductsTable products={products}/>
    );

}

export default AllProducts;




