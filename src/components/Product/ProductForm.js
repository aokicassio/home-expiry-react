import {Form, Alert, Button, ControlLabel, FormGroup, FormControl, ButtonToolbar, DatePicker, Panel} from 'rsuite';
import { useState } from "react";

const ProductForm = (props) => {

    const [name, setName] = useState();
    const [brand, setBrand] = useState();
    const [expiryDate, setExpiryDate] = useState();

    const onBlurNameHandler = (event) => {
        setName(event.target.value);
    };

    const onBlurBrandHandler = (event) => {
        setBrand(event.target.value);
    };

    const onExpiryDateChange = (event) => {
        const expirationDate =
            new Date(Date.UTC(event.getUTCFullYear(), event.getUTCMonth(), event.getUTCDate()));
        setExpiryDate(expirationDate.toJSON());
    };

    const submitHandler = async () => {

        const username = process.env.REACT_APP_USER;
        const password = process.env.REACT_APP_PASSWD;
        const authString = `${username}:${password}`

        const url = process.env.REACT_APP_HOST + '/product';
        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(authString));
        headers.set('Accept', 'application/json');
        headers.set('Content-Type', 'application/json');

        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(
                {
                    name : name,
                    brand : {
                        name : brand
                    },
                    expiryDate : expiryDate
                }
            ),
        });

        if (response.ok) {
            Alert.success('ProductForm successfully added.', 5000);
            let newKey = props.refreshKey + 1;
            props.updateRefreshKey(newKey);
        } else {
            Alert.error('An error has occurred.', 5000);
        }

    };

    return (
        <Panel header="Add Product" bordered>
            <p>Please fill in the form below: </p><br/>
            <Form layout="inline" onSubmit={submitHandler}>
                <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl name="name" onBlur={onBlurNameHandler} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Brand</ControlLabel>
                    <FormControl name="brand" onBlur={onBlurBrandHandler} />
                </FormGroup>
                <FormGroup>
                    <DatePicker size="lg" placeholder="Expiry Date" onSelect={onExpiryDateChange} />
                </FormGroup>
                <FormGroup>
                    <ButtonToolbar>
                        <Button appearance="primary" type="submit">Submit</Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
        </Panel>
    );

}

export default ProductForm;




