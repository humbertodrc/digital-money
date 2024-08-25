"use client";
import {useState} from "react";
import {useIdleTimer} from "react-idle-timer";
import ResponseModal from "./ResponseModal";
import Button from "../button/Button";
import { useRouter } from "next/navigation";
import { removeCookieClient } from "@/utils/cookieClient";
import useLocalStorage from "@/hooks/useLocalStorage";

// Expire time in minutes
const EXPIRE_TIME = 58;
export default function ExpireModal() {
  const [isExpired, setIsExpired] = useState(false);
  const router = useRouter();
  const {removeValue } = useLocalStorage("acc_token");

	useIdleTimer({
		timeout: EXPIRE_TIME * 60 * 1000,
		onIdle: () => {
			setIsExpired(true);
		},
		// disabled: isExpired || process.env.NODE_ENV === "development",
  });
  
  // LLevar al Home y borrar la cookie
  const handleLogout = () => {
    router.push("/");
    removeCookieClient("authToken");
    removeValue();
  };


	if (!isExpired) return null;

	return (
		<>
			{isExpired && (
				<style>
					{`
           #slaask-button, #slaask-widget {
             display: none;
           }
         `}
				</style>
			)}
			<ResponseModal.Modal
				type="success"
				title="Sesión expirada"
				content="Tu sesión ha expirado por inactividad."
				show={isExpired}
				onClose={() => {}}
				zIndex={1011}
				hiddenCloseButton={true}
				icon={
					<svg
						width="40"
						height="40"
						viewBox="0 0 21 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.9325 8.39617C9.38528 8.0944 7.78436 8.50368 6.57183 9.51099C5.35931 10.5183 4.66346 12.017 4.67647 13.5933M13.7141 9.84982L11.0937 12.4703M7.85294 1.94629H12.0882M18.4412 5.12276L15.9635 7.60041M17.3824 4.06394L19.5 6.18158M18.4412 13.5933C18.4412 18.2715 14.6488 22.0639 9.97059 22.0639C5.29241 22.0639 1.5 18.2715 1.5 13.5933C1.5 8.91517 5.29241 5.12276 9.97059 5.12276C14.6488 5.12276 18.4412 8.91517 18.4412 13.5933ZM11.5588 13.5933C11.5588 14.4705 10.8477 15.1816 9.97059 15.1816C9.09343 15.1816 8.38235 14.4705 8.38235 13.5933C8.38235 12.7162 9.09343 12.0051 9.97059 12.0051C10.8477 12.0051 11.5588 12.7162 11.5588 13.5933Z"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
			>
				<ResponseModal.Buttons className="justify-center gap-x-6">
					<Button
						type="button"
						onClick={handleLogout}
						className="bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary"
					>
						Regresar al inicio
					</Button>
				</ResponseModal.Buttons>
			</ResponseModal.Modal>
		</>
	);
}
