import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "../ui/navbar";

const NAV_ITEMS = [
  { name: "Home", link: "#" },
  { name: "Shop", link: "#" },
  { name: "Cart", link: "#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={NAV_ITEMS} />
        <NavbarButton href="#" variant="primary">
          Sign In
        </NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
