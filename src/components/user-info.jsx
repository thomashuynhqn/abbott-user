import React from "react";
import { Box, Avatar, Text, useStore, Input } from "zmp-framework/react";
import "../css/main.scss";

const Userinfo = () => {
  const user = useStore("user");
  const phoneNumber = useStore("phone");

  return (
    <Box className="wrapper" mx="4" mb="4" mt="5">
      <Avatar size={98} src={user.avatar}></Avatar>
      <div className="text-zone">
        <div className="user-text">
          {user.name ? <>Chào, {user.name}!</> : "..."}
        </div>
        <div className="phone-text">{phoneNumber}</div>
      </div>
      <Input>Hi</Input>
    </Box>
  );
};

Userinfo.displayName = "zmp-user-info";

export default Userinfo;
