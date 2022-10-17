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
      <Avatar src={user.avatar}></Avatar>
      <form
        className="text-zone"
        method="POST"
        target="_blank"
        action="https://api.3anutrition.com/api/ZaloUserMaster"
      >
        <Text className="user-text">
          {user.name ? <>Chào, {user.name}!</> : "..."}
        </Text>
        <Text className="phone-text">{phoneNumber}</Text>
        <Button
          className="confirm filter-button"
          typeName="primary"
          type="submit"
        >
          Xác nhận
        </Button>
      </form>
    </Box>
  );
};

Userinfo.displayName = "zmp-user-info";

export default Userinfo;
