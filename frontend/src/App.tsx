import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"


function App() {

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


        <main className="
          flex-1
        ">

          <Dashboard />

        </main>


      </div>


    </div>

  )

}


export default App