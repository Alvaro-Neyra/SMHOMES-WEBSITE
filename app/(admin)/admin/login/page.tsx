"use client";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaArrowRight } from "react-icons/fa";

export default function LoginPage() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const [modalError, setModalError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [accessKey, setAccessKey] = useState("");
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get("/api/auth/check-session", { withCredentials: true });
                if (res.status === 200) {
                    router.push("/admin/dashboard");
                }
            } catch (error) {
                console.log("Error checking session:", error);
            }
        };

        checkAuth();
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const res = await axios.post("/api/auth/login", credentials, { withCredentials: true });
            if (res.status === 200) {
                router.push("/admin/dashboard");
            }
        } catch (err) {
            const error = err as AxiosError;
            setError((error.response?.data as { error: string })?.error || "Error al iniciar sesión");
        } finally {
            setIsLoading(false);
        }
    };

    const handleForgotPassword = () => {
        setIsModalOpen(true);
    };

    const handleVerifyKey = () => {
        if (accessKey.trim() === "") {
            setModalError("Por favor, ingresa la clave de acceso.");
            return;
        }

        router.push(`/admin/forgot-password?key=${accessKey}`);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blackSoft30 p-4">
            <motion.div
                className="bg-blackSoft30 rounded-lg shadow-xl overflow-hidden w-full max-w-md"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div
                    className="w-full h-48 relative bg-gradient-to-r from-yellow-500 to-amber-200 flex items-center justify-center"
                    variants={itemVariants}
                >
                    <Image
                        src="/torrevieja1.jpg"
                        alt="Login"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <motion.div
                            className="h-24 w-24 bg-white p-5 rounded-full flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={64}
                                height={64}
                            />
                        </motion.div>
                    </div>
                </motion.div>

                <div className="p-8">
                    <motion.h2
                        className="text-2xl font-bold text-center mb-6 text-gray-100"
                        variants={itemVariants}
                    >
                        Iniciar Sesión
                    </motion.h2>

                    {error && (
                        <motion.div
                            className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <motion.div className="relative" variants={itemVariants}>
                            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Nombre de usuario"
                                value={credentials.username}
                                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBackground focus:border-transparent transition"
                                required
                            />
                        </motion.div>

                        <motion.div className="relative" variants={itemVariants}>
                            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBackground focus:border-transparent transition"
                                required
                            />
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="w-full bg-primaryBackground text-white py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-opacity-90 transition"
                            disabled={isLoading}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isLoading ? (
                                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <span>Iniciar Sesión</span>
                                    <FaArrowRight />
                                </>
                            )}
                        </motion.button>
                    </form>

                    <motion.div
                        className="mt-6 text-center text-sm text-gray-600"
                        variants={itemVariants}
                    >
                        <button onClick={handleForgotPassword} className="text-primaryBackground hover:underline transition">
                            ¿Olvidaste tu contraseña?
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-blackSoft p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold text-center mb-4">Clave de acceso</h2>
                        <p className="text-gray-100 text-center mb-4">Ingresa la clave para recuperar la contraseña.</p>

                        {modalError && (
                            <motion.div
                                className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {modalError}
                            </motion.div>
                        )}

                        <input
                            type="password"
                            placeholder="Clave de acceso"
                            value={accessKey}
                            onChange={(e) => setAccessKey(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md mb-4 text-black"
                        />

                        <div className="flex justify-between">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                                onClick={() => {
                                    setIsModalOpen(false)
                                    setAccessKey("")
                                    setModalError("")
                                }}
                            >
                                Cancelar
                            </button>

                            <button
                                className="bg-primaryBackground text-white px-4 py-2 rounded-md"
                                onClick={handleVerifyKey}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}