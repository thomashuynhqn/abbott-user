import React from "react";
import { Box, Avatar, Text, useStore, Button } from "zmp-framework/react";
import "../css/main.scss";

const Userinfo = () => {
  const user = useStore("user");
  const phoneNumber = useStore("phone");

  const postUrl = "https://api.3anutrition.com/api/ZaloUserMaster";

  const handleSendUser = async () => {
    try {
      const response = await fetch(`${postUrl}`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          phone: phoneNumber,
          zaloid: user.name,
          brand: "",
          oa_id: "",
        }),
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });
      return response;
    } catch (error) {
      console.log("Error to fetch. Details: ", error);
      return false;
    }
  };

  return (
    <Box className="wrapper" mx="4" mb="4" mt="5">
      <Avatar src={user.avatar}></Avatar>
      <form className="text-zone" onClick={handleSendUser}>
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
