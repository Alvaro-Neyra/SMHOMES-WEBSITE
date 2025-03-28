import { NextRequest, NextResponse } from "next/server";
import { ADMIN_ACCESS_KEY } from "./env";

export async function middleware(req: NextRequest) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    const navBarConfig = {
        active: true,
        position: "static",
    };

    if (pathname === "/" || pathname === "/contacto") {
        navBarConfig.active = false;
        navBarConfig.position = "fixed";
    } else if (
        pathname.startsWith("/vender") ||
        pathname.startsWith("/comprar") ||
        pathname.startsWith("/privacidad") ||
        pathname.startsWith("/nosotros") ||
        pathname.startsWith("/testimonios") ||
        pathname.startsWith("/propiedades")
    ) {
        navBarConfig.active = true;
        navBarConfig.position = "static";
    }

    const isAdminRoute = pathname.startsWith("/admin");
    const isLoginPage = pathname === "/admin/login";
    const isForgotPasswordPage = pathname === "/admin/forgot-password";
    const hasToken = req.cookies.get("adminToken");

    const keyFromUrl = url.searchParams.get("key")?.trim();
    const SECRET_KEY = ADMIN_ACCESS_KEY;

    // Si el usuario ya está autenticado y trata de acceder a la página de inicio de sesión o de restablecimiento de contraseña, redirigirlo al dashboard
    if ((isLoginPage || isForgotPasswordPage) && keyFromUrl === SECRET_KEY && hasToken) {
        console.log("✅ Usuario ya autenticado. Redirigiendo a /admin/dashboard");
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }

    if ((isLoginPage || isForgotPasswordPage) && keyFromUrl === SECRET_KEY) {
        console.log("✅ Clave correcta. Permitiendo acceso.");
        return NextResponse.next();
    }

    if ((isLoginPage || isForgotPasswordPage) && keyFromUrl !== SECRET_KEY) {
        console.log("🚫 Clave incorrecta. Redirigiendo a /not-found");
        return NextResponse.rewrite(new URL("/not-found", req.url));
    }

    if (isLoginPage && hasToken) {
        console.log("✅ Usuario ya autenticado. Redirigiendo a /admin/dashboard");
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }

    if (isAdminRoute && !hasToken) {
        console.log("🚫 No tiene token. Redirigiendo a /not-found");
        return NextResponse.rewrite(new URL("/not-found", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
