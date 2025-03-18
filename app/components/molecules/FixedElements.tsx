import GoToTop from "./GoToTop";
import Whatsapp from "./Whatsapp";

export default function FixedElements() {
    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4 items-center">
            <GoToTop />
            <Whatsapp />
        </div>
    );
}