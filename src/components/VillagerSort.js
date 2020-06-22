import React from "react";

function villagerSort(props) {
  return (
    <div className="villagerSort">
      <div>
        <label>
          Sort by:
          <select name="sortBy" id="sortBy" onChange={props.handleChange}>
            <option value=""></option>
            <option value="name">Name</option>
            <option value="species">Species</option>
          </select>
        </label>

        <label>
          <input
            type="radio"
            name="order"
            value="asc"
            onChange={props.handleChange}
          />
          asc
        </label>
        <label>
          <input
            type="radio"
            name="order"
            value="desc"
            onChange={props.handleChange}
          />
          desc
        </label>
      </div>
      <div>
        <label>
          Filter by personality:
          <select name="filter" id="filter" onChange={props.handleChange}>
            <option value="">all</option>
            <option value="Uchi">Big Sister</option>
            <option value="Cranky">Cranky</option>
            <option value="Jock">Jock</option>
            <option value="Lazy">Lazy</option>
            <option value="Normal">Normal</option>
            <option value="Peppy">Peppy</option>
            <option value="Smug">Smug</option>
            <option value="Snooty">Snooty</option>
          </select>
        </label>
      </div>
    </div>
  );
}
export default villagerSort;
