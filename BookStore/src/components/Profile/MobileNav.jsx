
import React from 'react'
import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    ArrowTrendingUpIcon,
    ChartBarIcon,
    BookOpenIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MobileNav = () => {
    const role = useSelector((state) => state.auth.role);

  return (
<>
    {role === 'user' && (
        <div className='w-full h-14 px-2 flex items-center justify-between text-green-100 bg-[#08312a]'>
        <Link to='/profile'>
                    <ListItem className='hover:text-[#08312a] '>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Favourites
                        <ListItemSuffix>
                        </ListItemSuffix>
                    </ListItem>
                </Link>
                <Link to='/collection'>
                    <ListItem className='hover:text-[#08312a] '>
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Collection
                        <ListItemSuffix>
                        </ListItemSuffix>
                    </ListItem>
                </Link>
                
                <Link to='/profile/status'>
                    <ListItem className='hover:text-[#08312a] '>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Status
                    </ListItem>
                </Link>
    </div>
    )}
    {role === 'admin' && (
        <div className='w-full h-14 px-2 flex items-center justify-center gap-24 grid-cols-3 text-green-100 bg-[#08312a]'>
            <Link to='/profile'>
                    <ListItem className='hover:text-[#08312a] '>
                        <ListItemPrefix>
                            <ArrowTrendingUpIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Overview
                    </ListItem>
                    </Link>
        <Link to='/profile/bookstatus'>
                    <ListItem className='hover:text-[#08312a] '>
                        <ListItemPrefix>
                            <ChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Status
                        <ListItemSuffix>
                        </ListItemSuffix>
                    </ListItem>
                </Link>
                <Link to='/profile/addbook'>
                    <ListItem className='hover:text-[#08312a] '>
                        <ListItemPrefix>
                            <BookOpenIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Add Book
                        <ListItemSuffix>
                        </ListItemSuffix>
                    </ListItem>
                </Link>
        </div>
    )}
</>

  )
}

export default MobileNav