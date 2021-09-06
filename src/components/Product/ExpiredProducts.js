import { Icon } from 'rsuite';

import { useState, useEffect, Fragment } from "react";
import ProductsTable from "./ProductsTable";

const ExpiredProducts = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const username = process.env.REACT_APP_USER;
            const password = process.env.REACT_APP_PASSWD;
            const authString = `${username}:${password}`

            let headers = new Headers();

            const url = process.env.REACT_APP_HOST + '/expiration/expired';

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

            responseData.forEach((product) => {
                loadedProducts.push({
                    id: product.id,
                    name: product.name,
                    brand: product.brand.name,
                    expiryDate: `${product.expiryDate[0]}-${product.expiryDate[1]}-${product.expiryDate[2]}`,
                    status:
                        <Fragment>
                            <Icon icon="ban"/> Expired
                        </Fragment>
                });
            });
            setProducts(loadedProducts);
        };

        fetchProducts().catch((error) => {
            console.log(error);
        });
    }, []);
    
    return (
        <ProductsTable
            header={"Expired Products"}
            description={"Products that have already expired."}
            products={products}/>
    );

}

export default ExpiredProducts;




