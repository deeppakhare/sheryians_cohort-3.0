import React, { useState } from "react";

const Usercard = ({ users, setUpdatedData, setToggle, handelDelete }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    let link = users.url;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    
  );
};

export default Usercard;
