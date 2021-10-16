import React from "react";

const Filter = ({search, searchInput, handleSearch}) => {
  return (
    <div>

      <div className="Search">
         <label > Filtro por actividades:</label>
        <input
          type="text"
          ref={searchInput}
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Filter;
