import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/homepage.jsx';
import CategoryPage from './pages/category/Category.jsx';
import ProductDetailPage from './pages/product/ProductDetailPage.jsx';
import Error from './Error/Error.jsx';
import ProductCreatePage from './pages/product/ProductCreatePage.jsx';
import ContactUsPage from './pages/contactUs/ContactUsPage.jsx';
// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
// const externalContent = {
//     id: 'article-1',
//     title: 'An Article',
//     author: 'April Bingham',
//     text: 'Some text in the article',
// };

function App() {
    return (
        <>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create" exact component={ProductCreatePage} />
                <Route path="/contact-us" exact component={ContactUsPage} />
                <Route
                    path="/:categoryTitle"
                    exact
                    render={(props) => (
                        // getting the parameters from the url and passing
                        // down to the component as props
                        <CategoryPage
                            match={props.match}
                            location={props.location}
                            history={props.history}
                            categoryTitle={props.match.params.categoryTitle}
                        />
                    )}
                />
                {/* passing parameters via a route path */}
                <Route
                    path="/:categoryTitle/product/:productId"
                    exact
                    render={(props) => (
                        // getting the parameters from the url and passing
                        // down to the component as props
                        <ProductDetailPage
                            match={props.match}
                            location={props.location}
                            history={props.history}
                            categoryTitle={props.match.params.categoryTitle}
                            productId={props.match.params.productId}
                            product={props.location.product}
                        />
                    )}
                />
                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;
