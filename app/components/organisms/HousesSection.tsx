import { Suspense } from "react";
import HousesSectionStatic from "./HousesSectionStatic";
import HousesSectionDynamic from "./HousesSectionDynamic";

export default function HousesSection() {
    return (
        <Suspense fallback={<HousesSectionStatic />}>
            <HousesSectionDynamic />
        </Suspense>
    );
}