import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import Sidebar from "./components/Sidebar"
import Header from "./components/Header"

import Dashboard from "./pages/Dashboard"
import Incidents from "./pages/Incidents"
import Reports from "./pages/Reports"
import Clients from "./pages/Clients"
import Settings from "./pages/Settings"


function App() {

  return (

    <BrowserRouter>

      <div className="
        flex
        min-h-screen
        bg-black
      ">


        <Sidebar />


        <div className="
          flex-1
          flex
          flex-col
        ">


          <Header />


          <Routes>

            <Route 
              path="/dashboard"
              element={<Dashboard />}
            />


            <Route 
              path="/incidents"
              element={<Incidents />}
            />


            <Route 
              path="/reports"
              element={<Reports />}
            />


            <Route 
              path="/clients"
              element={<Clients />}
            />


            <Route 
              path="/settings"
              element={<Settings />}
            />


            <Route
              path="*"
              element={
                <Navigate to="/dashboard"/>
              }
            />


          </Routes>


        </div>


      </div>


    </BrowserRouter>

  )

}


export default App