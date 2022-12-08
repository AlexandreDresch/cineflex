import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { Session } from "../pages/Session";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route element={<Home />} path='/' />
                <Route element={<Session />} path='/sessoes/:idFilme'/>
            </Switch>
        </BrowserRouter>
    )
}