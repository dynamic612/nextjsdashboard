import SideNav from "../ui/dashboard/sidenav";

export default function Layout ({children}: {children: React.ReactNode}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-auto">
            <div className="w-full flex-none bg-sky-200 md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 bg-sky-200 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )

}