import {profileDictionary} from "@/constants/profileDictionary";
import {Profile} from "@/interfaces/profile";

// funcion para ordenar los perfiles key por las del diccionario
export function sortKeyProfile(profile: Profile) {
	return {
		[profileDictionary.email]: profile.email,
		[profileDictionary.name]: `${profile.firstname} ${profile.lastname}`,
		[profileDictionary.dni]: profile.dni,
		[profileDictionary.phone]: profile.phone,
	};
}
