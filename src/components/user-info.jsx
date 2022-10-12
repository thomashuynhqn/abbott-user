import React from "react";
import {
  Box,
  Avatar,
  Text,
  useStore,
  Input,
  Button,
} from "zmp-framework/react";
import "../css/main.scss";

const Userinfo = () => {
  const user = useStore("user");
  const phoneNumber = useStore("phone");

  return (
    <Box className="wrapper" mx="4" mb="4" mt="5">
      <Avatar size={98} src={user.avatar}></Avatar>
      <div className="text-zone">
        <Text className="user-text">
          {user.name ? <>Chào, {user.name}!</> : "..."}
        </Text>
        <Text className="phone-text">{phoneNumber}</Text>
      </div>
      <Button className="confirm filter-button" typeName="primary">
        Xác nhận
      </Button>
    </Box>
  );
};

Userinfo.displayName = "zmp-user-info";

export default Userinfo;
