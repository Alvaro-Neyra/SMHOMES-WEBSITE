"use client";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaArrowRight, FaKey, FaCheck, FaArrowLeft } from "react-icons/fa";

export default function PasswordRecoveryPageComponent() {
    const [email, setEmail] = useState<string>("");
    const [otp, setOtp] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [step, setStep] = useState<number>(1);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const [accessKey, setAccessKey] = useState<string>("");
    const [modalError, setModalError] = useState<string>("");
    const [isGoingToLogin, setIsGoingToLogin] = useState<boolean>(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const keyParam = searchParams.get("key");
        if (keyParam) {
            setIsModalOpen(false);
        }
    }, [searchParams]);

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

    const handleVerifyKey = (): void => {
        if (accessKey.trim() === "") {
            setModalError("Por favor, ingresa la clave de acceso.");
            return;
        }

        if (isGoingToLogin) {
            router.push(`/admin/login?key=${accessKey}`);
        } else {
            router.push(`/admin/forgot-password?key=${accessKey}`);
        }
    };

    const handleSendOtp = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        if (!email) {
            setError("Por favor, ingresa tu correo electrónico");
            return;
        }

        setIsLoading(true);
        setError("");
        setSuccess("");
        
        try {
            const res = await axios.post("/api/auth/send-otp", { email });
            if (res.status === 200) {
                setSuccess("Código enviado a tu correo electrónico");
                setStep(2);
            }
        } catch (err) {
            const error = err as AxiosError;
            const errorMessage = (error.response?.data as { error?: string })?.error ?? "Error al enviar el código";
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        if (!otp) {
            setError("Por favor, ingresa el código de verificación");
            return;
        }

        setIsLoading(true);
        setError("");
        setSuccess("");
        
        try {
            const res = await axios.post("/api/auth/verify-otp", { email, code: otp });
            if (res.status === 200) {
                setSuccess("Código verificado correctamente");
                setStep(3);
            }
        } catch (err) {
            const error = err as AxiosError<{ error?: string }>;
            setError(error.response?.data?.error ?? "Código inválido o expirado");
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        if (!newPassword) {
            setError("Por favor, ingresa una nueva contraseña");
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }
        if (newPassword.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        setIsLoading(true);
        setError("");
        setSuccess("");
        
        try {
            const res = await axios.post("/api/auth/reset-password", { email, newPassword });
            if (res.status === 200) {
                setSuccess("Contraseña restablecida con éxito");
                setTimeout(() => {
                    setIsGoingToLogin(true);
                    setIsModalOpen(true);
                    setModalError("");
                    setAccessKey("");
                }, 2000);
            }
        } catch (err) {
            const error = err as AxiosError;
            const errorMessage = (error.response?.data as { error?: string })?.error ?? "Error al restablecer la contraseña";
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const getStepTitle = (): string => {
        switch (step) {
            case 1: return "Recuperar Contraseña";
            case 2: return "Verificar Código";
            case 3: return "Nueva Contraseña";
            default: return "";
        }
    };

    const goBack = (): void => {
        setError("");
        setSuccess("");
        if (step > 1) {
            setStep(step - 1);
        } else {
            setIsGoingToLogin(true);
            setIsModalOpen(true);
            setModalError("");
            setAccessKey("");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blackSoft30 p-4">
            <motion.div 
                className="bg-blackSoft30 rounded-lg shadow-xl overflow-hidden w-full max-w-md"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                key={`step-${step}`}
            >
                <motion.div 
                    className="w-full h-48 relative bg-gradient-to-r from-yellow-500 to-amber-200 flex items-center justify-center"
                    variants={itemVariants}
                >
                    <Image 
                        src="/torrevieja1.jpg"
                        alt="Recovery"
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
                        className="text-2xl font-bold text-center text-gray-100 mb-6"
                        variants={itemVariants}
                    >
                        {getStepTitle()}
                    </motion.h2>
                    
                    {typeof error === "string" && error && (
                        <motion.div 
                            className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {error}
                        </motion.div>
                    )}

                    {success && (
                        <motion.div 
                            className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {success}
                        </motion.div>
                    )}

                    {step === 1 && (
                        <form onSubmit={handleSendOtp} className="space-y-5">
                            <motion.div className="relative" variants={itemVariants}>
                                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Correo electrónico"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 pl-10 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBackground focus:border-transparent transition"
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
                                        <span>Enviar Código</span>
                                        <FaArrowRight />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    )}

                    {step === 2 && (
                        <form onSubmit={handleVerifyOtp} className="space-y-5">
                            <motion.p 
                                className="text-gray-300 text-sm mb-4"
                                variants={itemVariants}
                            >
                                Hemos enviado un código de 6 dígitos a tu correo electrónico
                            </motion.p>
                            
                            <motion.div className="relative" variants={itemVariants}>
                                <FaKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Código de verificación"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="w-full p-3 pl-10 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBackground focus:border-transparent transition"
                                    maxLength={6}
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
                                        <span>Verificar Código</span>
                                        <FaCheck />
                                    </>
                                )}
                            </motion.button>
                            
                            <motion.div 
                                className="text-center mt-4"
                                variants={itemVariants}
                            >
                                <button 
                                    type="button"
                                    onClick={handleSendOtp}
                                    className="text-primaryBackground text-sm hover:underline transition"
                                    disabled={isLoading}
                                >
                                    Reenviar código
                                </button>
                            </motion.div>
                        </form>
                    )}

                    {step === 3 && (
                        <form onSubmit={handleResetPassword} className="space-y-5">
                            <motion.div className="relative" variants={itemVariants}>
                                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="password"
                                    placeholder="Nueva contraseña"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full p-3 pl-10 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBackground focus:border-transparent transition"
                                    required
                                    minLength={6}
                                />
                            </motion.div>
                            
                            <motion.div className="relative" variants={itemVariants}>
                                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="password"
                                    placeholder="Confirmar contraseña"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full p-3 pl-10 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBackground focus:border-transparent transition"
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
                                        <span>Restablecer Contraseña</span>
                                        <FaCheck />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    )}
                    
                    <motion.div 
                        className="mt-6 flex justify-center"
                        variants={itemVariants}
                    >
                        <button 
                            onClick={goBack}
                            className="text-primaryBackground hover:text-opacity-80 transition flex items-center space-x-1"
                        >
                            <FaArrowLeft size={14} />
                            <span>Volver</span>
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-blackSoft p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold text-center mb-4 text-gray-100">
                            {isGoingToLogin ? "Acceso a Login" : "Clave de acceso"}
                        </h2>
                        <p className="text-gray-300 text-center mb-4">
                            {isGoingToLogin 
                                ? "Ingresa la clave para acceder a la página de login." 
                                : "Ingresa la clave para recuperar la contraseña."}
                        </p>

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
                            className="w-full p-3 text-black border border-gray-300 rounded-md mb-4"
                        />

                        <div className="flex justify-between">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                                onClick={() => {
                                    if (isGoingToLogin) {
                                        setIsGoingToLogin(false);
                                        setIsModalOpen(false);
                                    } else {
                                        router.push("/admin/login");
                                    }
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