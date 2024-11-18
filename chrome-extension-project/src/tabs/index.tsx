import { SetStateAction, useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("filter");

  // Function to handle tab click
  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
				{/* tab1 */}
        <div
          className={`tab ${activeTab === "filter" ? "active" : ""}`}
          onClick={() => handleTabClick("filter")}>
          Filter and Extract
        </div>

			{/* tab2 */}
        <div
          className={`tab ${activeTab === "function2" ? "active" : ""}`}
          onClick={() => handleTabClick("function2")}
        >
          function2
        </div>
			{/* tab3 */}
        <div
          className={`tab ${activeTab === "function3" ? "active" : ""}`}
          onClick={() => handleTabClick("function3")}>
          function3
        </div>
      </div>

      {/* Content */}
      <div className="tab-content">
        {activeTab === "filter" && <div>Filter and Extract function</div>}
        {activeTab === "function2" && <div>function2</div>}
        {activeTab === "function3" && <div>function3</div>}
      </div>
    </div>
  );
}

export default Tabs;
