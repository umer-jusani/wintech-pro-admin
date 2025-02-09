"use client"
import { Logo, NotificationsIcon, SearchIcon, UserImage } from '@/assets'
import { AppBar, Avatar, Box, IconButton, Stack, Toolbar, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react';
import InputField from '../../form-control/InputField';
import { useUI } from '@/shared/centralizeManagement/context/GlobalUIContext';
import { DRAWER_BREAK_POINT } from '@/shared/constant/constant';
import Link from 'next/link';
import { AppBarStyled, ToolbarStyled } from './ui';

const Header = () => {
    const { toggleUIState } = useUI();
    const matches = useMediaQuery(DRAWER_BREAK_POINT);

    return (
        <>
            <AppBarStyled position="sticky" sx={{ backgroundColor: "background.body" }}>
                <ToolbarStyled sx={{ display: 'flex', justifyContent: matches ? 'flex-end' : 'space-between' }}>
                    {/* <ox> */}
                    <Image src={Logo} alt='logo' width={165} style={{ objectFit: "contain" }} />


                    <Stack spacing={2} direction={"row"} alignItems="center" justifyContent="center">
                        <InputField label="Search here..." size="small" endIcon={<SearchIcon sx={{ color: "text.primary" }} />} />
                        <NotificationsIcon />

                        {/* Ensure UserImage is a valid URL */}
                        <Avatar
                            src={UserImage?.src || UserImage} // Ensure it's a valid string
                            alt="user_image"
                            variant=""
                            sx={{
                                minHeight: 45,
                                minWidth: 45,
                            }}
                        />
                    </Stack>



                    {/* </ox> */}
                    {!matches && (
                        <IconButton
                            color="inherit"
                            aria-label="menu"
                            onClick={() => toggleUIState('isDrawerOpen')}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Stack direction="row">
                        <IconButton
                            size="large"
                            color="inherit"
                            LinkComponent={Link}
                            href={`/notifications`}
                        >
                            {/* <Notifications /> */}
                        </IconButton>
                        {/* <Profile /> */}
                    </Stack>
                </ToolbarStyled>
            </AppBarStyled>
        </>

    )
}

export default Header


