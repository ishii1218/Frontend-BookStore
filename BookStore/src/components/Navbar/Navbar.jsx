import React from "react";
import { Link,useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars3Icon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from '../../store/auth';


// Profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    link: "/profile",
  },
  // {
  //   label: "Edit Profile",
  //   icon: Cog6ToothIcon,
  //   link: "/edit-profile",
  // },
  // {
  //   label: "Inbox",
  //   icon: InboxArrowDownIcon,
  //   link: "/inbox",
  // },
  // {
  //   label: "Help",
  //   icon: LifebuoyIcon,
  //   link: "/help",
  // },
  {
    label: "Sign Out",
    icon: PowerIcon,
    link: "/",
  },
];



function ProfileMenu() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  console.log(isLoggedIn);
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  if(!isLoggedIn) 
    return null;



  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-start">
      <MenuHandler>
        <Avatar
          variant="circular"
          size="md"
          alt="tania andrew"
          className="p-0 mx-2 hover:scale-105 transition-all duration-100 ease-in-out"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      </MenuHandler>
      <MenuList className="p-2">
        {profileMenuItems.map(({ label, icon, link }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
            key={label}
            onClick={() => {
              closeMenu();
              if (label === "Sign Out") {
                // Only log out if the "Sign Out" option is clicked
                dispatch(authActions.logout());
                dispatch(authActions.changeRole("user"));
                localStorage.clear("id");
                localStorage.clear("token");
                localStorage.clear("role");
                history("/");
              } else {
                // For other items, navigate to the appropriate link
                history(link);
              }
            }}
            className={`flex items-center gap-2 ${
              isLastItem
                ? "hover:bg-transparent hover:bg-red-100 focus:bg-red-500/10"
                : ""
            }`}
          >
            {React.createElement(icon, {
              className: `h-4 w-4 ${isLastItem ? "text-red-500 " : ""}`,
              strokeWidth: 2,
            })}
            <Typography
              as="span"
              variant="small"
              className="font-normal"
              color={isLastItem ? "red" : "inherit"}
            >
              {label}
            </Typography>
          </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

const navListItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About Us",
    link: "/aboutus",
  },
  {
    label: "All Books",
    link: "/allbooks",
  },
 
];

function NavList() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  const currentPath = window.location.pathname;
  const [activePage, setActivePage] = React.useState(currentPath);

  const handleItemClick = (link) => {
    setActivePage(link);
  };

  return (
    <ul className="flex flex-col lg:flex-row items-center lg:gap-4 gap-2 mb-0 mt-0">
      {navListItems.map(({ label, link }) => (
        <Typography
          key={label}
          as="a"
          href={link}
          variant="small"
          color="white"
          className="font-bold w-full lg:w-auto h-9 items-center rounded-md hover:bg-gray-900/40"
          onClick={() => handleItemClick(link)}
        >
          <MenuItem
            className={`flex items-center text-lg px-3 py-2 h-9 transition-all duration-200 ease-in-out w-full lg:w-auto ${
              activePage === link
                ? "bg-gray-800/50 rounded-md text-green-100"
                : "hover:bg-gray-900/80"
            }`}
            style={{
              backgroundColor:
                activePage === link ? "rgba(38, 38, 38, 0.3)" : "transparent",
              height: 36,
            }}
          >
            <span className="text-green-200/100 hover:text-green-100 w-full lg:w-auto">
              {label}
            </span>
          </MenuItem>
        </Typography>
      ))}

      {isLoggedIn && (
        <Typography
          as="a"
          href="/collection"
          variant="small"
          color="white"
          className="font-bold w-full lg:w-auto h-9 items-center rounded-md hover:bg-gray-900/40"
          onClick={() => handleItemClick("/collection")}
        >
          <MenuItem
            className={`flex items-center text-lg px-3 py-2 h-9 transition-all duration-200 ease-in-out w-full lg:w-auto ${
              activePage === "/collection"
                ? "bg-gray-800/50 rounded-md text-green-100"
                : "hover:bg-gray-900/80"
            }`}
            style={{
              backgroundColor:
                activePage === "/collection" ? "rgba(38, 38, 38, 0.3)" : "transparent",
              height: 36,
            }}
          >
            <span className="text-green-200/100 hover:text-green-100 w-full lg:w-auto">
              Collection
            </span>
          </MenuItem>
        </Typography>
      )}

      {isLoggedIn===false && (
        <>
        <Button className="font-bold px-2 py-1 h-9 bg-transparent hover:bg-gray-800/50 border-green-100 border text-sm text-green-200/100 hover:text-green-100 rounded-md w-full lg:w-auto">
        <Link to="/login" className="w-full text-center lg:w-auto">
          <span>Login</span>
        </Link>
      </Button>
      <Button
        variant="text"
        className="font-bold px-2 py-1 h-9 hover:bg-gray-800/50 border-green-100 border-shadow text-sm text-gray-800 bg-green-200/50 hover:text-green-200/100 rounded-md w-full lg:w-auto"
      >
        <Link to="/signup" className="w-full text-center lg:w-auto">
          <span>Sign Up</span>
        </Link>
      </Button>
      </>
        )}
    </ul>
  );
}

const Navibar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className=" fixed top-0 w-full z-50 max-w-screen-5xl items-center p-0 pb-0 pl-5 bg-teal-900/95 rounded-none border-0 shadow-none ">
      <div className="relative mx-0 flex items-center justify-between text-green-100">
        <div className="flex items-center gap-2">
          {React.createElement(BookOpenIcon, {
            className: "h-[40px] w-[40px]",
          })}
          <Typography
            className="cursor-pointer py-1.5 font-bold text-green-100 text-4xl"
          >
            Bookify
          </Typography>
        </div>
        <div className="gap-4 items-center flex px-5">
        <div className="hidden lg:flex items-center gap-2 lg:gap-2">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="white"
          variant="gradient"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 items-center lg:hidden"
        >
          <Bars3Icon className="h-6 w-6" />
        </IconButton>

        <ProfileMenu />
        </div>
      </div>

      <Collapse
        open={isNavOpen}
        className="items-center relative w-full pl-2 pr-5 pb-0 h-full top-0 left-0"
      >
        <NavList />
      </Collapse>
    </Navbar>
    
  );
};

export default Navibar;





