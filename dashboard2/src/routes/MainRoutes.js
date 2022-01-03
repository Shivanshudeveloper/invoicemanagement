import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Employee from 'views/pages/main/Employee';
import Employeestimesheets from 'views/pages/main/EmployeesTimesheets';
import Invoices from 'views/pages/main/Invoices';
import Clients from 'views/pages/main/Clients';
import Estimates from 'views/pages/main/Estimates';
import Expenses from 'views/pages/main/Expenses';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/dashboard/employees',
            element: <Employee />
        },
        {
            path: '/dashboard/employeestimesheets',
            element: <Employeestimesheets />
        },
        {
            path: '/dashboard/invoices',
            element: <Invoices />
        },
        {
            path: '/dashboard/clients',
            element: <Clients />
        },
        {
            path: '/dashboard/estimates',
            element: <Estimates />
        },
        {
            path: '/dashboard/expenses',
            element: <Expenses />
        }
    ]
};

export default MainRoutes;
