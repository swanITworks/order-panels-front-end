import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute"
import { useAuth0 } from "@auth0/auth0-react"
import Welcome from "./Views/Welcome"
import TopBar from "./Components/TopBar/TopBar"
import Dashboard from "./Views/Dashboard"
import ViewLoader from "./Components/UI/ViewLoader"
import AppLayout from "./Components/AppLayout/AppLayout"
import NewQuotation from "./Views/NewQuotation"
import ChooseMaterialSection from "./Components/ChooseMaterialSection/ChooseMaterialSection"
import PanelsListSection from "./Components/PanelsListSection/PanelsListSection"

export const App: React.FC = () => {
  const { isLoading, isAuthenticated, error } = useAuth0()

  if (isLoading) {
    return (
      <div className="page-layout">
        <ViewLoader />
      </div>
    )
  }

  if (error) {
    console.log(error)
    return (
      <div className="page-layout">
        <p>Error with Auth0</p>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <ProtectedRoute component={AppLayout} />
            ) : (
              <Welcome />
            )
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="quontations" element={<p>Quontations</p>} />
          <Route path="quotations/new/:quontationId" element={<NewQuotation />}>
            <Route path="choose-material" element={<ChooseMaterialSection />} />
            <Route path="panels-list" element={<PanelsListSection />} />
            <Route path="*" element={<ChooseMaterialSection />} />
          </Route>
        </Route>
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  )
}
