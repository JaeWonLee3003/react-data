import {BrowserRouter, Routes, Route} from "react-router-dom";

import Pie from "./Pie";

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/pie' element={<Pie />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;