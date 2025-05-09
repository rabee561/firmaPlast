// components/Navbar.jsx
import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Link } from '@heroui/link';
import { useLocation } from 'react-router-dom';
import { Select, SelectItem } from '@heroui/select';
import { Menu, X } from 'lucide-react';

export const animals = [
  { key: 'العربية', label: 'العربية' },
  { key: 'English', label: 'English' },
  { key: 'Türkçe', label: 'Türkçe' },
];

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

function MyNavbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar className="fixed " maxWidth="full">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
          <p className="hidden sm:block font-bold text-inherit">ACME</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem isActive={isActive('/home')}>
            <Link color="foreground" href="/home">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isActive('/about')}>
            <Link color="foreground" href="#about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isActive('/products')}>
            <Link color="foreground" href="#products">
              Products
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isActive('/customer-reviews')}>
            <Link color="foreground" href="#customer-reviews">
              Customer reviews
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:block">
            <Select
              className="w-[140px] sm:w-[180px]"
              items={animals}
              placeholder="Languce"
              label
              size="sm"
            >
              {(animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
              )}
            </Select>
          </NavbarItem>
          <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </NavbarContent>
      </Navbar>
      {menuOpen && (
        <div className="sm:hidden absolute top-[64px] left-0 w-full bg-white z-40 p-4 space-y-4 transition-all duration-[2000ms]">
          <Link
            href="/home"
            className="block text-lg font-semibold"
            onPress={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block text-lg font-semibold"
            onPress={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#products"
            className="block text-lg font-semibold"
            onPress={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="#customer-reviews"
            className="block text-lg font-semibold"
            onPress={() => setMenuOpen(false)}
          >
            Customer reviews
          </Link>
          <Select
            className="w-72"
            items={animals}
            placeholder="Language"
            label
            size="md"
          >
            {(animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            )}
          </Select>
        </div>
      )}
    </>
  );
}

export default MyNavbar;
