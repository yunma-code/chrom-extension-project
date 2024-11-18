import HeaderIcon from "./headerIcon";
function header() {
	return(
		<div id='ext-header' className="ext-header">
      <a href="https://stackoverflow.com" target="_blank">
        <img src="./stackoverflow.png" className="ext-logo" alt="stack logo" />
      </a>
      <h4>Stackoverflow Extension</h4>
			
      {/* header icons */}
			<HeaderIcon />
      <hr/>
    </div>
	);
}
export default header;