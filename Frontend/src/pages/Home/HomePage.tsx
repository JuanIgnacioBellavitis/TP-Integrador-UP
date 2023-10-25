import { HomeComponent } from "../../components/Home/HomeComponent"
import { NavbarComponent } from "../../components/Navbar/NavbarComponent"

export const HomePage = () => {
  return (
    <>
      <div>
        <div>
          <NavbarComponent />
        </div>
        <div>
          <HomeComponent />
        </div>
      </div>
    </>
  )
}
