import { Suspense } from "react";
import ExploreSectionDynamic from "./ExploreSectionDynamic";
import ExploreSectionStatic from "./ExploreSectionStatic";

export default function ExploreSection() {
    return (
        <Suspense fallback={<ExploreSectionStatic />}>
            <ExploreSectionDynamic />
        </Suspense>
    );
}