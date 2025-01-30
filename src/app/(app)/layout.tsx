import { checkAuth } from '@/lib/auth/utils';
import { ClerkProvider } from '@clerk/nextjs';
import TrpcProvider from '@/lib/trpc/Provider';
import { cookies } from 'next/headers';
import { HeroUIProvider } from '@heroui/react';
import NextTopLoader from 'nextjs-toploader';

export default async function AppLayout({ children }: { children: React.ReactNode }) {
   await checkAuth();

   return (
      <main>
         <HeroUIProvider>
            <ClerkProvider>
               <TrpcProvider cookies={cookies().toString()}>
                  <NextTopLoader
                     color="#00F600"
                     showSpinner={false}
                  />
                  <div className="flex h-screen">
                     <main className="flex-1 overflow-y-auto p-8 pt-2 md:p-8">{children}</main>
                  </div>
               </TrpcProvider>
            </ClerkProvider>
         </HeroUIProvider>
      </main>
   );
}
