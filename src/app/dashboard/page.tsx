
// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
// import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
// import { lusitana } from '@/app/ui/fonts';
// import { fetchCardData } from '@/app/lib/data';
// import { Suspense } from 'react';
// import {
//   RevenueChartSkeleton,
//   LatestInvoicesSkeleton,
//   CardSkeleton
// } from '@/app/ui/skeletons'; 
// import CardWrapper from '@/app/ui/dashboard/cards';
// export default async function Page() {

//   return (
//     <main>
//       <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
//         Dashboard
//       </h1>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//       <Suspense fallback={<CardSkeleton/>}>
//         <CardWrapper/>
//       </Suspense>
//       </div>
//       <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
//         <Suspense fallback={<RevenueChartSkeleton />}>
//           <RevenueChart />
//         </Suspense>
//         <Suspense fallback={<LatestInvoicesSkeleton/>}>
//           <LatestInvoices />
//         </Suspense>
//       </div>
//     </main>
//   );
// }

import React from 'react'
import { options } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const  page = async() => {
  const session=await getServerSession(options)
  console.log(session,'sseds')
  // if(!session){
  //   redirect('/api/auth/signin')
  // }
  return (
    <div>homew</div>
  )
}

export default page