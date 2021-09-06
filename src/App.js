import 'rsuite/dist/styles/rsuite-dark.css';

import {Container, Content, Grid, Row } from 'rsuite';

import ProductForm from "./components/Product/ProductForm";
import AllProducts from "./components/Product/AllProducts";
import Navigation from "./components/Layout/Navigation";

import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Config from "./components/Config/Config";
import Home from "./components/Home/Home";
import ExpiredProducts from "./components/Product/ExpiredProducts";
import DueProducts from "./components/Product/DueProducts";

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
                                <AllProducts refreshKey={refreshKey} updateRefreshKey={setRefreshKey}/>
                            </Row>
                        </Grid>
                    </Route>

                    <Route exact  path="/due">
                        <Grid fluid>
                            <Row>
                                <DueProducts />
                            </Row>
                        </Grid>
                    </Route>

                    <Route exact  path="/expired">
                        <Grid fluid>
                            <Row>
                                <ExpiredProducts />
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
