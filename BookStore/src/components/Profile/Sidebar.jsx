/* eslint-disable react/prop-types */
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
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    BookOpenIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { authActions } from '../../store/auth';


const Sidebar = ({ data }) => {
    const role = useSelector((state) => state.auth.role);


    const dispatch = useDispatch();
    const history = useNavigate();
    return (
      <div className='flex justify-center md:justify-start'>
        <Card className="bg-[#08312a] h-full w-full max-w-[20rem] px-2 pb-8 md:pb-20 pt-8 rounded-md shadow-xl shadow-blue-gray-900/5 mb-10 md:mb-20">
            <div className="mb-0 md:mb-2 p-2 items-center flex-col flex md:flex-row justify-center md:items-start gap-4">
                <img src={data.avatar} className='h-14 w-14 rounded-full' />
                <div className='item-center text-center md:text-left'>
                    <p className='text-white text-lg '>{data.username}</p>
                    <p className='text-gray-500 text-sm mt-1'>{data.email}</p>
                </div>
            </div>
            <List className='text-green-100 gap-1 md:gap-4 justify-center'>
                {role === 'user' && (
                    <>
                        <Link to='/profile'>
                        <ListItem className='hover:text-[#08312a] mt-6 hidden md:flex'>
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Favourites
                            <ListItemSuffix>
                                <Chip value={data.favourites.length} size="sm" variant="ghost" className="rounded-full text-green-100 bg-gray-900/80" />
                            </ListItemSuffix>
                        </ListItem>
                    </Link>
                    <Link to='/collection'>
                        <ListItem className='hover:text-[#08312a] hidden md:flex'>
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            My Collection
                            <ListItemSuffix>
                                <Chip value={data.cart.length} size="sm" variant="ghost" className="rounded-full text-green-100 bg-gray-900/80" />
                            </ListItemSuffix>
                        </ListItem>
                    </Link>
                    <ListItem className='hover:text-[#08312a] hidden md:flex'>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Inbox
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" className="rounded-full text-green-100 bg-gray-900/80" />
                        </ListItemSuffix>
                    </ListItem>
                    <Link to='/profile/settings'>
                            <ListItem className='hover:text-[#08312a] mb-10 hidden md:flex'>
                                <ListItemPrefix>
                                    <Cog6ToothIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Settings
                            </ListItem>
                        </Link> 
                    </>
                )}
                {role === 'admin' && (
                    <div className='mb-10 mt-4 '>
                    <Link to='/profile/bookstatus'>
                    <ListItem className='hover:text-[#08312a] hidden md:flex mb-2'>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Status
                    </ListItem>
                    </Link>
                    <Link to='/profile/addbook'>
                    <ListItem className='hover:text-[#08312a] mt-6 hidden md:flex '>
                        <ListItemPrefix>
                            <BookOpenIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Add Book
                    </ListItem>
                    </Link>
                    </div>
                    )}

                    <ListItem className='bg-gray-700 text-center justify-center md:text-left'
                    onClick={() => {
                      dispatch(authActions.logout());
                      dispatch(authActions.changeRole('user'));
                      localStorage.clear('id');
                      localStorage.clear('token');
                      localStorage.clear('role');
                      history('/');

                    }}
                    >
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
               
            </List>
        </Card>
      </div>
    );
}

export default Sidebar;
