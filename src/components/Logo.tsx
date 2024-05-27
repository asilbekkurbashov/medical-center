import { logo, logo2 } from "../assets"

const Logo = () => {
  return (
    <img className="cursor-pointer" src={logo} alt="logo" />
  )
}

const Logo2 = () => {
  return (
    <img className="cursor-pointer" src={logo2} alt="logo" />
  )
}

export {Logo, Logo2}