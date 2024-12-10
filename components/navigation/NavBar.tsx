import Logo from './Logo';
import NavIcons from './NavIcons';
import NavLinks from './NavLinks';

const NavBar = () => {
  return (
    <header className="fixed w-full z-20">
      <div className="w-full h-[190px] absolute bg-gradient-to-b from-codgray to-transparent" />
      <div className="flex-between py-4 px-6 sticky z-10">
        <NavIcons />
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
};
export default NavBar;
