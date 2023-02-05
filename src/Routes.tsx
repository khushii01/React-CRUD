import React, { Suspense } from "react";
import {
     BrowserRouter as Router,
     Redirect,
     Route,
     Switch,
     useLocation,
} from "react-router-dom";
import Layout from "./components/layout";

const HomePage = React.lazy(() => import("./pages/home"));
const DashboardPage = React.lazy(() => import("./pages/dashboard"));

function NoMatch() {
     const location = useLocation();

     return (
          <div>
               <h3>Error 404</h3>
               <p>
                    No match for <code>{location.pathname}</code>
               </p>
          </div>
     );
}

export default function Routes() {
     return (
          <Router>
               <Layout>
                    <Suspense fallback={<code>Loading...</code>}>
                         <Switch>
                              <Redirect exact from="/" to="/home" />
                              <Route path="/home" component={DashboardPage} />
                              <Route path="*" component={NoMatch} />
                         </Switch>
                    </Suspense>
               </Layout>
          </Router>
     );
}
