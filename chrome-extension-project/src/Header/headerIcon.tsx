import { IoSettingsOutline, IoClose } from "react-icons/io5";


export default function headerIcon() {
	return(
		<span className="ext-header-icons">
			<IoSettingsOutline className="text-success me-1 fs-5" />
			<IoClose className="text-white me-1 fs-6" />
		</span>
	);
}