export function OpenInNewWindow() {
	const currentLocation = window.location.href;
	return (
		<>
			<a
				href={currentLocation}
				onClick={(e) => {
					e.preventDefault(); // デフォルトのリンク動作を防ぐ
					window.open(currentLocation, "_blank", "width=800,height=600");
				}}
			>
				このページを別のウインドウで開く
			</a>
			{" | "}
			<a href={currentLocation} target="_blank" rel="noopener noreferrer">
				このページを別のタブで開く
			</a>
		</>
	);
}
