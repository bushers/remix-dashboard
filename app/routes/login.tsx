import { Outlet } from 'remix';

export default function Login() {
    return (
        <div>
            <h1>Login page</h1>
            <Outlet />
        </div>
    );
}
