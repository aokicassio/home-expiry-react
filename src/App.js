import 'rsuite/dist/styles/rsuite-dark.css';

import { useState } from 'react';
import {Container, Content, Grid, Row } from 'rsuite';
import { Route, Switch } from 'react-router-dom';

import Navigation from "./components/Layout/Navigation";
import Config from "./components/Config/Config";
import Home from "./components/Home/Home";
import ProductForm from "./components/Product/ProductForm";
import Products from "./components/Product/Products";

function App() {
    const [refreshKey, setRefreshKey] = useState(0);

    return (
        <Container>
            <Navigation/>
            <Content>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact  path="/all">
                        <Grid fluid>
                            <Row>
                                <ProductForm refreshKey={refreshKey} updateRefreshKey={setRefreshKey}/>
                            </Row>
                            <br/>
                            <Row>
                                <Products endpoint="/product" refreshKey={refreshKey} updateRefreshKey={setRefreshKey}/>
                            </Row>
                        </Grid>
                    </Route>

                    <Route exact  path="/due">
                        <Grid fluid>
                            <Row>
                                <Products endpoint="/expiration/due"
                                          heading={"Due Products"}
                                          description={"Products that are due to expire today."}
                                          refreshKey={refreshKey} updateRefreshKey={setRefreshKey}/>
                            </Row>
                        </Grid>
                    </Route>

                    <Route exact  path="/expired">
                        <Grid fluid>
                            <Row>
                                <Products endpoint="/expiration/expired"
                                          heading={"Expired Products"}
                                          description={"Products that have already expired."}
                                          refreshKey={refreshKey} updateRefreshKey={setRefreshKey}/>
                            </Row>
                        </Grid>
                    </Route>

                    <Route exact  path="/config">
                        <Config/>
                    </Route>
                </Switch>
            </Content>
        </Container>
    );
}

export default App;
