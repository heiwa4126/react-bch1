import { Link, useHref } from "react-router-dom";

export const _blank = "_blank";
export const windowFeatures = "width=800,height=600";

export function OpenInNewWindow() {
	const currentLocation = window.location.href;
	return (
		<>
			<a
				href={currentLocation}
				onClick={(e) => {
					e.preventDefault(); // デフォルトのリンク動作を防ぐ
					window.open(currentLocation, _blank, windowFeatures);
				}}
			>
				このページを別のウインドウで開く
			</a>
			{" | "}
			<a href={currentLocation} target={_blank} rel="noopener noreferrer">
				このページを別のタブで開く
			</a>
		</>
	);
}

export function OpenInNewWindow2({ receiverURL }: { receiverURL: string }) {
	const location = useHref(receiverURL);
	return (
		<>
			<a
				href={location}
				onClick={(e) => {
					e.preventDefault(); // デフォルトのリンク動作を防ぐ
					window.open(location, _blank, windowFeatures);
				}}
			>
				受信側を別のウインドウで開く
			</a>
			{" | "}
			<Link to={receiverURL} target={_blank}>
				受信側を別タブで開く
			</Link>
		</>
	);
}
