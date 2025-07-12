import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Clopa Collection",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Discover inspiring designed clothes."
                description="Experience elegance and comfort with our exclusive clothes."
                badge="Clothes Paradise"
            />
            <PropertiesListing />
        </>
    );
};

export default page;
