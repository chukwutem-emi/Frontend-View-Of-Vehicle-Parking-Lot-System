export const Description = () => {
    return (
        <div className="text-white">
            <p className="font-semibold font-sans md:text-lg text-sm">
                This dashboard allows Super Administrators to view all active admin device sessions across the system. Each session includes details such as device label, IP address, location, and login time, providing clear visibility into how administrative accounts are being accessed.<br />By monitoring this information, Super Admins can quickly identify unfamiliar devices or suspicious activity and take appropriate action to maintain system security. Access to this page is strictly restricted to Super Admins.
            </p>
        </div>
    );
};