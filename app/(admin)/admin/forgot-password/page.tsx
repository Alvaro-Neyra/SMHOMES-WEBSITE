import PasswordRecoveryPageComponent from "@/app/components/organisms/PasswordRecoveryPage";
import Head from "next/head";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";

export default function PasswordRecoveryPage() {
    return (
        <>
            <Head>
                <title>Recuperar contraseña - SM HOME&apos;S</title>
                <meta name="description" content="Recupera tu contraseña de SM HOME&apos;S" />
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <Suspense fallback={<ClipLoader color="#ffffff" size={50} className="mx-auto mt-20" />}>
                <PasswordRecoveryPageComponent />
            </Suspense>
        </>
    );
}