import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductUpdate from './components/ProductUpdate';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';


function App() {


    return (
        <BrowserRouter>
            
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Product Manager</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                                <Link className= "nav-link" to= "/">Home</Link>
                                <Link className= "nav-link" to= "/add">Add Product</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route exact path="/">
                    <ProductList/>
                </Route>
    
                <Route exact path="/add">
                    <ProductForm/>
                </Route>
            
                <Route exact path="/product/:id">
                    <ProductDetail/>
                </Route>

                <Route exact path="/product/update/:id">
                    <ProductUpdate/>
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default App;
