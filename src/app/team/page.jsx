import React from 'react';
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";
import Brands from "@/components/Brands";
import Team from '@/components/Team';

const Page = () => {
    return (
        <>
            <Team/>
            <Services/>
            <Contacts/>
            <Brands/>
        </>
    );
};

export default Page;