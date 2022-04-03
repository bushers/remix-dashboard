import type { PropsWithChildren } from 'react';

interface Props {}

export default function Sidebar({ children }: PropsWithChildren<Props>): JSX.Element {
    return <div className="sidebar self-stretch bg-slate-500">SIDEBAR</div>;
}
