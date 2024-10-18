import { Link, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, Button } from "react-native";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#112614",
        tabBarInactiveTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#b69743",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          height: 60,
          backgroundColor: "#b69743",
          borderTopWidth: 0,
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
              color={"#fff"}
              size={16}
              style={{
                backgroundColor: focused ? color : "transparent",
                paddingLeft: 14,
                paddingRight: 14,
                paddingTop: 6,
                paddingBottom: 6,
                borderRadius: 30,
              }}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text style={{ fontSize: 14, color: focused ? color : "#fff" }}>
              Home
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
              name={"phone-portrait"}
              color={"#fff"}
              size={16}
              style={{
                backgroundColor: focused ? color : "transparent",
                paddingLeft: 14,
                paddingRight: 14,
                paddingTop: 6,
                paddingBottom: 6,
                borderRadius: 30,
              }}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text style={{ fontSize: 14, color: focused ? color : "#fff" }}>
              Device
            </Text>
          ),
        }}
      />
      {/* <Link
        href={"https://reactnavigation.org/docs/tab-based-navigation/"}
        target="_blank"
      >
        hf
      </Link> */}
    </Tabs>
  );
}
