import { Card } from '@/app/ui/dashboard/cards';
import RenvenueChart from '@/app/ui/dashboard/revenue-chart'
import LatestInvoices from '../ui/dashboard/latest-invoices';
import { lusitana } from '../ui/fonts';
import { revenue } from '../lib/placeholder-data';
import { fetchRevenue } from '../lib/data';
import { fetchLatestInvoices, fetchCardData } from '../lib/data';

export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const {
        numberOfCustomers,
        numberOfInvoices,
        totalPaidInvoices,
        totalPendingInvoices
    } = await fetchCardData();

    return (
        <main>
            <h1 className={`${lusitana.className} mb-2 text-xl md:text-2xl`}>Dashboard</h1>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="Collected" value={totalPaidInvoices} type="collected" />
                <Card title="Pending" value={totalPendingInvoices} type="pending" />
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
                <Card
                    title="Total Customers"
                    value={numberOfCustomers}
                    type="customers"
                />
            </div>
            <div className='mt-6 grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-8'>
                <RenvenueChart revenue={revenue} />
                <LatestInvoices latestInvoices={latestInvoices} />
            </div>

        </main>

    );
};