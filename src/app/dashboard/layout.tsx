import AcountInfo from "@/components/dashboard/accountInfo/AcountInfo";
import Navbar from "@/components/dashboard/navbar/Navbar";
import Header from "@/components/layout/header/Header";

export const metadata = {
	title: "Dashboard",
	description: "Digital Money Dashboard",
};

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
	}) {
	
	// TODO: Get user info from API
	const userInfo = {
    "id": 19,
    "firstname": "Daniel",
    "lastname": "Rivero",
    "dni": 30303030,
    "email": "correo@correo.com",
    "phone": "11999999"
	}

	
	return (
		<>
			<Header
				logoLink="/"
				logoClassName="fill-primary"
				userName={`${userInfo.firstname} ${userInfo.lastname}`}
			/>
			<div className="w-full h-full flex flex-row grow">
				<aside className="hidden w-1/3 md:block xl:w-1/4 bg-primary text-black-primary">
					<Navbar />
				</aside>
				<main className="w-full p-5 flex flex-col grow gap-5 items-center bg-tertiary-light md:p-10 xl:px-20">
					{children}
				</main>
			</div>
		</>
	);
}
