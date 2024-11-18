import * as React from "react";
import  { useState } from "react";

function searchbox() {
	const [query, setQuery] = useState("");
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};
	
	
	return(
		<div id="ext-searchbox" >
			<h3>Search content</h3>
		<form >
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInput} style={{ backgroundColor: "white"}}
      />
      <button type="submit">Search</button>
    </form>
		</div>
  );
}

export default searchbox;