import PasswordRecoveryPageComponent from "@/app/components/organisms/PasswordRecoveryPage";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";

export default function PasswordRecoveryPage() {
    return (
        <Suspense fallback={<ClipLoader color="#ffffff" size={50} className="mx-auto mt-20" />}>
            <PasswordRecoveryPageComponent />
        </Suspense>
    );
}