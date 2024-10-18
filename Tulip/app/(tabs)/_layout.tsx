import { Link, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, Button } from "react-native";
import React from "react";
import * as Device from "expo-device";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#744c4c",
        tabBarInactiveTintColor: "#cddcb4",
        headerTitleStyle: {
          color: "#d36bb6",
        },
        headerStyle: {
          backgroundColor: "#e1e7df",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          height: 70,
          // backgroundColor: "#e1e7df",
          backgroundColor: "#cddcb4",
          borderTopWidth: 0,
          padding: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={"home"}
              size={16}
              style={{
                backgroundColor: focused ? color : "transparent",
                color: focused ? "#cddcb4" : "#744c4c",
                paddingLeft: 14,
                paddingRight: 14,
                paddingTop: 6,
                paddingBottom: 6,
                borderRadius: 30,
              }}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text style={{ fontSize: 14, color: focused ? color : "#744c4c" }}>
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="fileShare"
        options={{
          title: "File Share",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={"share-social"}
              size={16}
              style={{
                backgroundColor: focused ? color : "transparent",
                color: focused ? "#cddcb4" : "#744c4c",
                paddingLeft: 14,
                paddingRight: 14,
                paddingTop: 6,
                paddingBottom: 6,
                borderRadius: 30,
              }}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text style={{ fontSize: 14, color: focused ? color : "#744c4c" }}>
              File Share
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="deviceDetails"
        options={{
          title: "Device Details",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              // name={"phone-portrait"}
              name={
                Device.osName?.toLowerCase() === "android"
                  ? "logo-android"
                  : Device.osName?.toLowerCase() === "ios"
                  ? "logo-apple"
                  : Device.osName?.toLowerCase() === "windows" ||
                    Device.osName?.toLowerCase() === "windows phone"
                  ? "logo-windows"
                  : "phone-portrait"
              }
              size={16}
              style={{
                backgroundColor: focused ? color : "transparent",
                color: focused ? "#cddcb4" : "#744c4c",
                paddingLeft: 14,
                paddingRight: 14,
                paddingTop: 6,
                paddingBottom: 6,
                borderRadius: 30,
              }}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text style={{ fontSize: 14, color: focused ? color : "#744c4c" }}>
              Device
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
