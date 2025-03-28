"use client";
import { useState, useEffect } from "react";
import { Save, AlertCircle, CheckCircle } from "lucide-react";
import axios, { isAxiosError } from 'axios';
import { useRouter } from "next/navigation";

export default function SettingsPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);
    const [sessions, setSessions] = useState<{ ip: string; userAgent: string; createdAt: string }[]>([]);

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const res = await axios.get("/api/auth/admin-settings", { withCredentials: true });
                const data = res.data as { username: string; email?: string };
                setUsername(data.username);
                setEmail(data.email ?? "");
            } catch (error) {
                console.error("Error al obtener datos del admin:", error);
                setNotification({ type: "error", message: "Error al cargar los datos" });
            }
        };

        const fetchSessions = async () => {
            try {
                const res = await axios.get("/api/auth/admin-sessions", { withCredentials: true });
                setSessions(res.data as { ip: string; userAgent: string; createdAt: string }[]);
            } catch (error) {
                console.error("Error al obtener sesiones activas:", error);
            }
        };

        fetchSessions();
        fetchAdminData();
    }, []);

    const handleProfileUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await axios.put("/api/auth/admin-settings", { username, email }, { withCredentials: true });
            setNotification({ type: "success", message: "Perfil actualizado correctamente" });
        } catch (error) {
            console.error("Error al actualizar perfil:", error);
            setNotification({ type: "error", message: "Error al actualizar el perfil" });
        } finally {
            setIsLoading(false);
            setTimeout(() => setNotification(null), 3000);
        }
    };

    const handlePasswordChange = async () => {
        if (newPassword !== confirmPassword) {
            setNotification({
                type: "error",
                message: "Las contraseñas no coinciden"
            });
            return;
        }
        setIsLoading(true);
        try {
            await axios.put(
                "/api/auth/admin-settings",
                { currentPassword, newPassword },
                { withCredentials: true }
            );
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setNotification({
                type: "success",
                message: "Contraseña actualizada correctamente"
            });
        } catch (error) {
            console.error("Error al cambiar contraseña:", error);
            if (isAxiosError(error)) {
                const errorMessage = error.response?.data?.error ||
                    error.message ||
                    "Error al actualizar la contraseña";
                setNotification({
                    type: "error",
                    message: errorMessage
                });
            } else {
                console.error("Error inesperado:", error);
                setNotification({
                    type: "error",
                    message: "Ocurrió un error inesperado"
                });
            }
        } finally {
            setIsLoading(false);
            setTimeout(() => setNotification(null), 3000);
        }
    };


    const handleCloseSessions = async () => {
        try {
            await axios.delete("/api/auth/admin-sessions", { withCredentials: true });
            setSessions([]);
            alert("Todas las sesiones han sido cerradas");
            router.push("/");
        } catch (error) {
            console.error("Error al cerrar sesiones:", error);
            alert("Error al cerrar las sesiones");
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Configuración</h1>

            {notification && (
                <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${notification.type === "success"
                    ? "bg-green-900/30 text-green-400 border border-green-800"
                    : "bg-red-900/30 text-red-400 border border-red-800"
                    }`}>
                    {notification.type === "success"
                        ? <CheckCircle className="w-5 h-5 mt-0.5" />
                        : <AlertCircle className="w-5 h-5 mt-0.5" />}
                    <p>{notification.message}</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blackSoft30 rounded-lg overflow-hidden border border-primaryBackground border-opacity-30">
                    <div className="bg-primaryBackground/10 p-4 border-b border-primaryBackground border-opacity-30">
                        <h2 className="text-xl font-semibold text-white">Información del Perfil</h2>
                        <p className="text-gray-400 text-sm">Actualiza tu información personal</p>
                    </div>

                    <form onSubmit={handleProfileUpdate} className="p-6 space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                                Nombre de usuario
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primaryBackground focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                Correo electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primaryBackground focus:border-transparent"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 bg-primaryBackground hover:bg-secondaryBackground text-white py-3 px-4 rounded-md transition duration-300 disabled:opacity-50"
                        >
                            {isLoading ? "Guardando..." : (
                                <>
                                    <Save size={18} />
                                    <span>Guardar cambios</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <div className="bg-blackSoft30 rounded-lg overflow-hidden border border-primaryBackground border-opacity-30">
                    <div className="bg-primaryBackground/10 p-4 border-b border-primaryBackground border-opacity-30">
                        <h2 className="text-xl font-semibold text-white">Cambiar Contraseña</h2>
                        <p className="text-gray-400 text-sm">Actualiza tu contraseña de acceso</p>
                    </div>

                    <form onSubmit={handlePasswordChange} className="p-6 space-y-4">
                        <div>
                            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-300 mb-1">
                                Contraseña actual
                            </label>
                            <input
                                id="currentPassword"
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primaryBackground focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-1">
                                Nueva contraseña
                            </label>
                            <input
                                id="newPassword"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primaryBackground focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                                Confirmar contraseña
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primaryBackground focus:border-transparent"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 bg-primaryBackground hover:bg-secondaryBackground text-white py-3 px-4 rounded-md transition duration-300 disabled:opacity-50"
                        >
                            {isLoading ? "Actualizando..." : (
                                <>
                                    <Save size={18} />
                                    <span>Actualizar contraseña</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-6 bg-blackSoft30 rounded-lg overflow-hidden border border-primaryBackground border-opacity-30">
                <div className="bg-primaryBackground/10 p-4 border-b border-primaryBackground border-opacity-30">
                    <h2 className="text-xl font-semibold text-white">Sesiones activas</h2>
                    <p className="text-gray-400 text-sm">Gestiona tus sesiones activas</p>
                </div>

                <div className="p-6">
                    {sessions.length === 0 ? (
                        <p className="text-gray-400 text-center">No hay sesiones activas.</p>
                    ) : (
                        sessions.map((session) => (
                            <div key={`${session.ip} - ${session.createdAt}`} className="bg-blackSoft30 border border-primaryBackground border-opacity-20 rounded-lg p-4 flex justify-between items-center mb-4">
                                <div>
                                    <p className="text-white font-medium">IP: {session.ip}</p>
                                    <p className="text-sm text-gray-400">{session.userAgent}</p>
                                    <p className="text-xs text-gray-500 mt-1">Última actividad: {new Date(session.createdAt).toLocaleString()}</p>
                                </div>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-400 border border-green-800">
                                    Activa
                                </span>
                            </div>
                        ))
                    )}

                    {sessions.length > 0 && (
                        <button onClick={handleCloseSessions} className="mt-4 w-full bg-red-700/30 hover:bg-red-700/50 text-red-400 border border-red-800 py-2 px-4 rounded-md transition duration-300">
                            Cerrar todas las sesiones
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}