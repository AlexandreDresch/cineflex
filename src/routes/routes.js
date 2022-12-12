import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { Session } from "../pages/Session";
import { Seats } from "../pages/Seats";
import { Success } from "../pages/Success";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route element={<Home />} path='/' />
                <Route element={<Session />} path='/sessoes/:idFilme'/>
                <Route element={<Seats />} path='/assentos/:idSessao'/>
                <Route  element={<Success />} path="/sucesso"/>
            </Switch>
        </BrowserRouter>
    )
}