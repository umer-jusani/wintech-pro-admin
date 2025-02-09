"use client";
//home
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
//employees
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
//certificates
import SchoolIcon from '@mui/icons-material/School';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
//applicants
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
//transaction
import PaidIcon from '@mui/icons-material/Paid';
import PaidIcon from '@mui/icons-material/Paid';
//posted-jobs
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
// portfolio
import DescriptionIcon from '@mui/icons-material/Description';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


let sideBarRoutes = {
    organization: [
        {
            id: 0,
            title: "Home",
            href: "/organization/home",
            icon: {
                filled: HomeIcon,
                outline: AddHomeOutlinedIcon
            }
        },
        {
            id: 1,
            title: "Employees",
            href: "/organization/Employees",
            icon: {
                filled: Diversity3OutlinedIcon,
                outline: PeopleOutlineIcon
            }
        },
        {
            id: 2,
            title: "Certificates",
            href: "/organization/certificates",
            icon: {
                filled: SchoolIcon,
                outline: SchoolOutlinedIcon
            }
        },
        {
            id: 3,
            title: "Posted Jobs",
            href: "/organization/posted-jobs",
            icon: {
                filled: BusinessCenterIcon,
                outline: BusinessCenterOutlinedIcon
            }
        },
        {
            id: 4,
            title: "Applicants",
            href: "/organization/applicants",
            icon: {
                filled: PersonRoundedIcon,
                outline: PersonOutlineOutlinedIcon
            }
        },
        {
            id: 5,
            title: "Transaction",
            href: "/organization/transaction",
            icon: {
                filled: Diversity3OutlinedIcon,
                outline: PeopleOutlineIcon
            }
        },
    ],
    technician: [
        {
            id: 0,
            title: "Home",
            href: "/technician/home",
            icon: {
                filled: HomeIcon,
                outline: AddHomeOutlinedIcon
            }
        },
        {
            id: 1,
            title: "Portfolio",
            href: "/technician/portfolio",
            icon: {
                filled: DescriptionIcon,
                outline: DescriptionOutlinedIcon
            }
        },
        {
            id: 2,
            title: "Certificates",
            href: "/technician/certificates",
            icon: {
                filled: HomeIcon,
                outline: AddHomeOutlinedIcon
            }
        },
        {
            id: 3,
            title: "Jobs",
            href: "/technician/jobs",
            icon: {
                filled: HomeIcon,
                outline: AddHomeOutlinedIcon
            }
        },
        {
            id: 4,
            title: "Transaction",
            href: "/organization/transaction",
            icon: {
                filled: Diversity3OutlinedIcon,
                outline: PeopleOutlineIcon
            }
        }
    ]
};


export { sideBarRoutes };