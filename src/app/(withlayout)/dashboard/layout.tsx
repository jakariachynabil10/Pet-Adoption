/* eslint-disable @typescript-eslint/no-explicit-any */

import Footer from "@/components/shared/Footer"
const DashboardLayout = ({children} : any) => {
    return (
        <>
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default DashboardLayout;