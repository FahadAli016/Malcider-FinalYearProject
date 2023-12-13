import { lazy } from 'react';



const ScanFile = lazy(() => import('../pages/ScanFile'));



const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));

const MalwareAnalytics = lazy(() => import('../pages/Admin/MalwareAnalytics'));
const UserAnalytics = lazy(() => import('../pages/Admin/UserAnalytics'));
const RegisteredUsers = lazy(() => import('../pages/Admin/RegisteredUsers'));
const ScannedFiles = lazy(() => import('../pages/Admin/ScannedFiles'));



const coreRoutes = [
  {
    path: '/scanfile',
    title: 'scanfile',
    component: ScanFile,
  },

 
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
 

 
  {
    path: '/admin/MalwareAnalytics',
    title: 'MalwareAnalytics',
    component: MalwareAnalytics,
  },
  {
    path: '/admin/UserAnalytics',
    title: 'Buttons',
    component: UserAnalytics,
  },
  {
    path: '/admin/RegisteredUsers',
    title: 'RegisteredUsers',
    component: RegisteredUsers,
  },
  {
    path: '/admin/ScannedFiles',
    title: 'ScannedFiles',
    component: ScannedFiles,
  },
  {
    path: '/history',
    title: 'history',
    component: Tables,
  },
];

const routes = [...coreRoutes];
export default routes;
