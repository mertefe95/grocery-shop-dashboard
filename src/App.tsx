import React, { useState, useEffect } from "react";

import "./style/index.scss";
import "./style/responsive.scss";

import CategoryPage from "./categories/CategoryPage";
import DetailedCategoryPage from "./categories/DetailedCategoryPage";
import SubcategoryPage from "./categories/SubcategoryPage";
import CustomersPage from "./customers/CustomersPage";
import DetailedSubcategoryPage from "./categories/DetailedSubcategoryPage";
import DetailedCustomerPage from "./customers/DetailedCustomerPage";
import HomePage from "./home/HomePage";
import LoginPage from "./login/LoginPage";
import DetailedProductPage from "./products/DetailedProductPage";
import ProductsPage from "./products/ProductsPage";

import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

function App() {
  const ScrollToTop = (props: any) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
  };

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/customers" component={CustomersPage} />
          <Route exact path="/customers/:id" component={DetailedCustomerPage} />
          <Route exact path="/categories" component={CategoryPage} />
          <Route
            exact
            path="/categories/:id"
            component={DetailedCategoryPage}
          />
          <Route exact path="/subcategories" component={SubcategoryPage} />
          <Route
            exact
            path="/subcategories/:id"
            component={DetailedSubcategoryPage}
          />
          <Route exact path="/products" component={ProductsPage} />
          <Route
            exact
            path="/products/:id"
            component={DetailedProductPage}
          />{" "}
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
