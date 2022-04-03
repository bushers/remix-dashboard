import Sidebar from './Sidebar';

import type { PropsWithChildren } from 'react';

interface Props {}

export default function AppLayout({ children }: PropsWithChildren<Props>): JSX.Element {
    return (
        <div className="w-full flex h-screen justify-start items-start">
            <Sidebar />
            <main className="flex-grow self-stretch bg-white p-5">{children}</main>
        </div>
    );
}
