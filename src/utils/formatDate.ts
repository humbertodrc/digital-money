
type DateString = string | Date;

export const formatDate = (dateString: DateString): string => {
	const date = new Date(dateString);
	const formattedDate = new Intl.DateTimeFormat("es-AR", {
		day: "numeric",
		month: "long",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
	}).format(date);

	return formattedDate;
};
