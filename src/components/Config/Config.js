import { Fragment } from 'react';
import ResetProducts from "./ResetProducts";
import {Divider, Panel} from "rsuite";

const Config = (props) => {

    return (
        <Fragment>
            <Panel header="Configuration Panel" bordered>
                <ResetProducts/>
                <Divider/>
            </Panel>
        </Fragment>
    );
}

export default Config;