
import { Route } from "react-router-dom";
import { Layout } from "../index";

const PublishLayout = (props: any) => {
  const { component: Component, ...rest } = props;
  const isauthenticated = false
  return <Route {...rest} render={
    (routerProps: any) => {
      return (
        <Layout>
          <Component {...routerProps} />
        </Layout>
      )
    }
  } />
}

export default PublishLayout