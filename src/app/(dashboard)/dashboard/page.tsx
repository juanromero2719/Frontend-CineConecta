import DashboardUsers from '@/app/(dashboard)/dashboard/components/dashboardUsers'

const Dashboard = () => {

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>       
            <DashboardUsers />   
        </div>
    );
};

export default Dashboard;