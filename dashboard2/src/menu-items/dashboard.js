// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'employees',
            title: 'Employees',
            type: 'item',
            url: '/dashboard/employees',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'employeestimesheets',
            title: 'Employees Timesheets',
            type: 'item',
            url: '/dashboard/employeestimesheets',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'invoices',
            title: 'Invoices',
            type: 'item',
            url: '/dashboard/invoices',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'clients',
            title: 'Clients',
            type: 'item',
            url: '/dashboard/clients',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'estimates',
            title: 'Estimates',
            type: 'item',
            url: '/dashboard/estimates',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'expenses',
            title: 'Expenses',
            type: 'item',
            url: '/dashboard/expenses',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
