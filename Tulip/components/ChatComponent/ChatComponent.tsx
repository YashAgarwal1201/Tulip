import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  StyleSheet,
  Keyboard,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import useMessageStore from "@/Stores/messageStore";
import { Message } from "@/interfacesAndTypes/interfacesAndTypes";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TulipPalette } from "@/constants/Colors";

const ChatComponent = () => {
  const { messages, addMessage } = useMessageStore();

  const [newMessage, setNewMessage] = useState("");

  const messagesEndRef = useRef<ScrollView | null>(null);
  const lastPairRef = useRef<any | null>(null);

  const handleSendMessage = (event: any) => {
    event.preventDefault();
    if (!newMessage?.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      type: "user",
      timestamp: new Date().toISOString(),
    };

    // setMessages((messages) => [...messages, userMessage]);
    addMessage(userMessage);
    simulateBotResponse(newMessage);
    setNewMessage(""); // Clear the input after sending a message

    Keyboard.dismiss();
  };

  // Simulate a bot response
  const simulateBotResponse = (userInput: string) => {
    const botMessage = {
      id: messages.length + 2,
      text: `${userInput}`,
      type: "bot",
      timestamp: new Date().toISOString(),
    };

    setTimeout(() => {
      // setMessages((messages) => [...messages, botMessage]);
      addMessage(botMessage);
    }, 1000);
  };

  const groupMessages = (messages: Message[]) => {
    const grouped: Message[][] = [];
    for (let i = 0; i < messages?.length; i += 2) {
      grouped?.push(messages?.slice(i, i + 2));
    }
    return grouped;
  };

  const groupedMessages = Array.isArray(messages)
    ? groupMessages(messages)
    : [];

  console.log(groupedMessages);

  const handleKeyPress = (event: { nativeEvent: { key: string } }) => {
    // Check if the pressed key is 'Enter'
    if (event.nativeEvent.key === "Enter") {
      handleSendMessage(event);
    }
  };

  // useEffect(() => {
  //   // Scroll to the bottom when new messages arrive
  //   if (lastPairRef.current) {
  //     lastPairRef.current?.scrollIntoView({ behavior: "smooth" });
  //     // lastPairRef.current.scrol
  //   }
  // }, [groupedMessages]);

  useEffect(() => {
    // Scroll to the bottom when new messages arrive
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollToEnd({ animated: true }); // Use scrollToEnd for smooth scrolling
    }
  }, [messages]);

  return (
    <View style={styles.chatContainer}>
      <ScrollView style={styles.messageContainer} ref={messagesEndRef}>
        {groupedMessages?.length > 0 ? (
          groupedMessages?.map((value, key) => (
            <View
              key={key}
              style={{
                rowGap: 16,
                // borderWidth: key === groupedMessages?.length - 1 ? 2 : 0,
                borderColor: "red",
                // height: key === groupedMessages?.length - 1 ? "100%" : "auto",
                marginBottom: key === groupedMessages?.length - 1 ? 0 : 16,
                // flex: 1,
                flexGrow: key === groupedMessages.length - 1 ? 1 : undefined, // Allow lastPairRef to grow
              }}
              ref={key === groupedMessages?.length - 1 ? lastPairRef : null}
            >
              {value?.map((val, k) => (
                <View
                  key={k}
                  style={{
                    rowGap: 8,
                    alignItems: val.type === "bot" ? "flex-start" : "flex-end",
                  }}
                >
                  <View
                    style={{
                      flexDirection: val.type === "bot" ? "row" : "row-reverse",
                      alignItems: "center",
                      columnGap: 12,
                    }}
                  >
                    <Ionicons
                      name="person"
                      size={16}
                      style={{
                        backgroundColor: TulipPalette.green,
                        padding: 10,
                        borderRadius: 20,
                        color:
                          val.type === "bot"
                            ? TulipPalette.brown
                            : TulipPalette.pink,
                      }}
                    />
                    <Text>{val.type}</Text>
                  </View>
                  <Text
                    style={{
                      maxWidth: 300,
                      width: "100%",
                      backgroundColor:
                        val.type === "bot"
                          ? TulipPalette.lightPink
                          : TulipPalette.pink,
                      padding: 12,
                      borderRadius: 20,
                      marginLeft: val.type === "bot" ? 12 : 0,
                      marginRight: val.type === "bot" ? 0 : 12,
                    }}
                  >
                    {val.text}
                  </Text>
                </View>
              ))}
            </View>
          ))
        ) : (
          <View style={{ rowGap: 8 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 12,
              }}
            >
              <Ionicons
                name="person"
                size={16}
                style={{
                  backgroundColor: TulipPalette.green,
                  padding: 10,
                  borderRadius: 20,
                  color: TulipPalette.brown,
                }}
              />
              <Text>bot</Text>
            </View>
            <Text
              style={{
                maxWidth: 300,
                width: "100%",
                backgroundColor: TulipPalette.lightPink,
                padding: 12,
                borderRadius: 20,
                marginLeft: 12,
              }}
            >
              Hey, Welcome
            </Text>
          </View>
        )}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          value={newMessage}
          // onChange={(e) => setNewMessage(e.target.value)}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          onKeyPress={handleKeyPress} // Handle key press
          onSubmitEditing={handleSendMessage}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: TulipPalette.green,
            color: TulipPalette.black,
            fontSize: 16,
            padding: 12,
            borderRadius: 30,
            flex: 1,
          }}
        />
        <Pressable onPress={handleSendMessage} style={{ width: 45 }}>
          <Ionicons
            name="send"
            size={18}
            style={{
              padding: 12,
              borderRadius: 30,
              backgroundColor: TulipPalette.brown,
              color: TulipPalette.green,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    gap: 16,
  },
  messageContainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "black",
    rowGap: 16,
    paddingRight: 12,
  },
  inputContainer: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
    paddingRight: 12,
  },
});

export default ChatComponent;
