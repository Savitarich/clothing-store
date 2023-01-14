import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ProductPage } from "./pages/ProductPage";
import { Cart } from "./pages/Cart";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
    return (
        <div className='App'>
            <Router basename='/clothing-store'>
                <Header></Header>
                <main>
                    <Routes>
                        <Route
                            path='/'
                            element={<Home></Home>}
                        ></Route>
                        <Route
                            path='/product'
                            element={<ProductPage></ProductPage>}
                        ></Route>
                        <Route
                            path='/cart'
                            element={<Cart></Cart>}
                        ></Route>
                        <Route
                            path='*'
                            element={<NotFound></NotFound>}
                        ></Route>
                    </Routes>
                </main>
                <Footer></Footer>
            </Router>
        </div>
    );
};
