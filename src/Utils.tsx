export function OpenInNewWindow() {
	return (
		<>
			<a
				href="."
				onClick={(e) => {
					e.preventDefault(); // デフォルトのリンク動作を防ぐ
					window.open(e.currentTarget.href, "_blank", "width=800,height=600");
				}}
			>
				このページを別のウインドウで開く
			</a>
			{" | "}
			<a href="." target="_blank" rel="noopener noreferrer">
				このページを別のタブで開く
			</a>
		</>
	);
}
