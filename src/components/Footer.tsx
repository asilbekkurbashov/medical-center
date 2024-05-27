import { Link } from "react-router-dom";
import { footerLinks } from "../shared/data/data";
import { Button } from "antd";
import { Logo2 } from "./Logo";

const Footer = () => {
  return (
    <div className="bg-blue">
      <div className="container text-light-1 py-8">
        <div className="flex-between pb-10 border-b-[1px]">
          <div className="flex-between gap-8">
            {footerLinks.map((elem) => (
              <Link key={elem} to="">{elem}</Link>
            ))}
          </div>
          <div className="flex-between gap-4">
            <Link to={""}>Войти</Link>
            <Button type="text" className="text-light-1">
              Регистрация
            </Button>
          </div>
        </div>
        <div className="flex-between mt-10">
            <Logo2/>
            <p>© 2010-2023 Все права защищены</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
