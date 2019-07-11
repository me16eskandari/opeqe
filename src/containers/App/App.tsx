import "./App.scss";

import React, { useEffect, useState } from "react";

import { Carousel, Header, MenuItemCard } from "../../components";
import { MenuItem } from "../../models";
import { MenuService } from "../../services";

const App: React.FC = () => {

  // declaring state
  const [menu, setMenu] = useState<MenuItem[]>([]);

  // load data on component mount
  useEffect(() => {
    //get menu items from service
    const m: MenuItem[] = MenuService.getMenu();

    //set menu to state
    setMenu(m);
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Carousel title="Food Delivery in New York">
          {menu.map((x, index) => <MenuItemCard {...x} key={index} />)}
        </Carousel>
        {/* Added to more Carousel so you can check header functioanlity */}
        <Carousel title="Food Delivery in New York">
          {menu.map((x, index) => <MenuItemCard {...x} key={index} />)}
        </Carousel>
        <Carousel title="Food Delivery in New York">
          {menu.map((x, index) => <MenuItemCard {...x} key={index} />)}
        </Carousel>
      </div>
    </>
  );
}

export default App;
