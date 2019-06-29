import React from "react";
import User from "./user";
import "./sidebar.css";

export default props => {
  return (
    <aside className="Sidebar">
      {props.contacts.map(contact => <User user={contact} key={contact.user_id} />)}
    </aside>
  );
};

// export default Sidebar;
