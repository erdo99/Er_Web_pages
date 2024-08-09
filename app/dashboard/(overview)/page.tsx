import CardWrapper, { Card } from '@/app/dashboard/cards';
import RevenueChart from '@/app/dashboard/revenue-chart';
import LatestInvoices from '@/app/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';
import { fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { CardsSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';
import {LatestInvoicesSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
  // const revenue = await fetchRevenue();
  
  const totalPaidInvoices = (await fetchCardData()).totalPaidInvoices;
  const totalPendingInvoices = (await fetchCardData()).totalPendingInvoices;
  const numberOfInvoices = (await fetchCardData()).numberOfInvoices;
  const numberOfCustomers = (await fetchCardData()).numberOfCustomers;
  

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}