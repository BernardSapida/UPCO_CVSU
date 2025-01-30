'use client';

import { trpc } from '@/lib/trpc/client';

export default function Home() {
   const { data, isLoading } = trpc.users.getUsers.useQuery();

   return (
      <main className="space-y-6">
         {JSON.stringify(isLoading)}
         {JSON.stringify(data)}
      </main>
   );
}
