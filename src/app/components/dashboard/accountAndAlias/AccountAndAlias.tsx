import CopyToClipboard from "@/app/components/common/Icons/CopyToClipboard";
import {Account} from "@/interfaces/account";

interface AccountInfoProps {
	accountInfo: Account;
}

export default function AccountAndAlias({accountInfo}: AccountInfoProps) {
	return (
		<section className="w-full p-5 flex flex-col gap-5 rounded-md bg-black-primary shadow-md md:p-10 xl:p-15">
			<p className="text-base- font-semibold">
				Copia tu CVU o Alias para ingresar o transferir dinero desde otra cuenta
			</p>
			{/* CVU */}
			<div className="flex flex-row justify-between items-center gap-2 py-2">
				<div>
					<h2 className="font-semibold text-lg text-primary">CVU</h2>
					<span className="text-base font-normal">{accountInfo.cvu}</span>
				</div>
				<CopyToClipboard value={accountInfo.cvu}/>
			</div>
			{/* Alias */}
			<div className="flex flex-row justify-between items-center gap-2 py-2">
				<div>
					<h2 className="font-semibold text-lg text-primary">Alias</h2>
					<span className="text-base font-normal">{accountInfo.alias}</span>
				</div>
				<CopyToClipboard value={accountInfo.alias}/>
			</div>
		</section>
	);
}
