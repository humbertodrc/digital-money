const year = new Date().getFullYear();

export default function Footer() {
	return (
		<footer className="p-5 bg-secondary text-primary">
			<p>© {year} Digital Money House</p>
		</footer>
	);
}
