import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"


import Sidebar from "./components/Sidebar"
import Header from "./components/Header"


import Login from "./pages/Login"


import Dashboard from "./pages/Dashboard"
import Analyze from "./pages/Analyze"

import Incidents from "./pages/Incidents"
import IncidentDetails from "./pages/IncidentDetails"

import Reports from "./pages/Reports"

import Clients from "./pages/Clients"
import ClientDetails from "./pages/ClientDetails"

import Settings from "./pages/Settings"



function Layout(){


  return (

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
            path="/analyze"
            element={<Analyze />}
          />


          <Route
            path="/incidents"
            element={<Incidents />}
          />


          <Route
            path="/incidents/:id"
            element={<IncidentDetails />}
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
            path="/clients/:id"
            element={<ClientDetails />}
          />


          <Route
            path="/settings"
            element={<Settings />}
          />


          <Route
            path="*"
            element={
              <Navigate to="/dashboard" />
            }
          />


        </Routes>


      </div>


    </div>

  )

}





function App(){


  return (

    <BrowserRouter>


      <Routes>


        {/* Página inicial abre o login */}

        <Route

          path="/"

          element={<Login />}

        />



        <Route

          path="/login"

          element={<Login />}

        />



        {/* Sistema SOC */}

        <Route

          path="/*"

          element={<Layout />}

        />


      </Routes>


    </BrowserRouter>

  )

}


export default App