import React, { useState } from "react";
const Header = (props) => {
  const [isActive, setActive] = useState(false);

  const clickHandler = () => {
    props.toggle((current) => !current);
    setActive(!isActive);
  };

  return (
    <div className="ui menu">
      <i
        onClick={clickHandler}
        className={isActive ? "plus icon" : "minus icon "}
      />
      <div className="ui container center">
        <h2>Task App</h2>
      </div>
    </div>
  );
};

export default Header;
