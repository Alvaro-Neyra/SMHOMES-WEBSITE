"use client";
import { useState, ReactNode } from "react";
import Link from "next/link";
import axios from "axios";
import { PlusCircle, Home, Settings, LogOut, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: Readonly<AdminLayoutProps>) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = async () => {
        try {
            await axios.post("/api/auth/logout", {}, { withCredentials: true });
            router.push("/");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <div className="flex h-screen bg-blackSoft30">
            <div
                className={`fixed md:relative inset-y-0 left-0 z-50 w-64 bg-blackSoft border-r border-primaryBackground border-opacity-30 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    }`}
            >
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-primaryBackground">AdminPanel</h1>
                        <button
                            className="md:hidden text-white"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="mt-8 space-y-6">
                        <Link
                            href="/admin/dashboard"
                            className={`flex items-center space-x-3 ${pathname === "/admin/dashboard"
                                ? "text-primaryBackground"
                                : "text-gray-200 hover:text-primaryBackground"
                                } transition-colors duration-200`}
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <Home size={20} />
                            <span>Propiedades</span>
                        </Link>

                        <Link
                            href="/admin/dashboard/new-property"
                            className={`flex items-center space-x-3 ${pathname === "/admin/dashboard/new-property"
                                ? "text-primaryBackground"
                                : "text-gray-200 hover:text-primaryBackground"
                                } transition-colors duration-200`}
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <PlusCircle size={20} />
                            <span>Agregar Propiedad</span>
                        </Link>

                        <Link
                            href="/admin/dashboard/settings"
                            className={`flex items-center space-x-3 ${pathname === "/admin/dashboard/settings"
                                    ? "text-primaryBackground"
                                    : "text-gray-200 hover:text-primaryBackground"
                                } transition-colors duration-200`}
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <Settings size={20} />
                            <span>Configuración</span>
                        </Link>

                    </nav>
                </div>

                <div className="absolute bottom-0 w-full p-6 border-t border-primaryBackground border-opacity-30">
                    <button onClick={handleLogout} className="flex items-center space-x-3 text-gray-200 hover:text-primaryBackground transition-colors duration-200">
                        <LogOut size={20} />
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-x-hidden overflow-y-auto">
                <header className="bg-blackSoft30 border-b border-primaryBackground border-opacity-30 p-4 flex items-center justify-between">
                    <button
                        className="md:hidden text-white"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <Menu size={24} />
                    </button>

                    <div className="ml-auto flex items-center space-x-4">
                        <span className="text-white">Admin</span>
                    </div>
                </header>

                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
