import React from "react"
import {
  Auth0Provider,
  Auth0ProviderOptions,
  WithAuth0Props,
} from "@auth0/auth0-react"
import { createRoot } from "react-dom/client"
import { store } from "./store/store"
import { Provider } from "react-redux"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import TopBar from "./Components/TopBar/TopBar"
import reportWebVitals from "./reportWebVitals"
import Home from "./Views/Dashboard"
import { App } from "./App"

const root = createRoot(document.getElementById("root") as HTMLElement)

// Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html
// for a full list of the available properties on the provider

const auth0ClientDomain: string = process.env.REACT_APP_AUTH0_DOMAIN!
const auth0ClientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID!
const auth0Audience: string = process.env.REACT_APP_AUTH0_AUDIENCE!

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0ClientDomain}
      clientId={auth0ClientId}
      redirectUri={window.location.origin}
      audience={auth0Audience}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals()
