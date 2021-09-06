import { Form, Alert,  Button, FormGroup, ButtonToolbar } from 'rsuite';

const ResetProducts = (props) => {

    const resetHandler = async (event) => {

        const username = process.env.REACT_APP_USER;
        const password = process.env.REACT_APP_PASSWD;
        const authString = `${username}:${password}`

        const url = process.env.REACT_APP_HOST + '/product/reset';

        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(authString));
        headers.set('Accept', 'application/json');
        headers.set('Content-Type', 'application/json');

        const response = await fetch(url, {
            method: 'DELETE',
            headers: headers,
        });

        if (response.ok) {
            Alert.success('Products list reset successfully.', 5000);
        } else {
            Alert.error('An error has occurred.', 5000);
        }

    };

    return (
        <Form fluid onSubmit={resetHandler}>
            <p>Reset list of Products</p>
            <br/>
            <FormGroup>
                <ButtonToolbar>
                    <Button appearance="primary" type="submit">Reset</Button>
                </ButtonToolbar>
            </FormGroup>
        </Form>
    );

}

export default ResetProducts;




