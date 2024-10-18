import React, { useState } from "react";
import { View, Button, Text, Platform, Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as Permissions from "expo-permissions";
import { saveAs } from "file-saver";

export default function FileSharingApp() {
  const [fileUri, setFileUri] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState<string>(
    "Hello, this is a test file."
  );

  // Request storage permissions (only necessary for Android)
  const requestPermissions = async () => {
    if (Platform.OS === "android") {
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
      if (status !== "granted") {
        Alert.alert("Permission denied", "Storage access is required.");
        return false;
      }
    }
    return true;
  };

  // Create a file on the device or web
  const createFile = async () => {
    const permissionGranted = await requestPermissions();
    if (!permissionGranted) return;

    if (Platform.OS === "web") {
      // For web, just set the file content
      setFileUri(
        "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent)
      );
      Alert.alert("File Created", "Web file is ready for download.");
    } else {
      // For mobile platforms, save the file locally
      const filePath = `${FileSystem.documentDirectory}example.txt`;
      await FileSystem.writeAsStringAsync(filePath, fileContent);
      setFileUri(filePath);
      Alert.alert("File Created", `File saved at ${filePath}`);
    }
  };

  // Share or download the file
  const shareOrDownloadFile = async () => {
    if (fileUri) {
      if (Platform.OS === "web") {
        // Use FileSaver to trigger download on web
        saveAs(fileUri, "example.txt");
      } else if (await Sharing.isAvailableAsync()) {
        // Use native sharing options for mobile
        await Sharing.shareAsync(fileUri);
      } else {
        Alert.alert("Error", "Sharing is not available.");
      }
    } else {
      Alert.alert("Error", "File not created yet.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Create File" onPress={createFile} />
      {fileUri && (
        <Text>
          File Created: {Platform.OS === "web" ? "Web file ready" : fileUri}
        </Text>
      )}
      <Button
        title={Platform.OS === "web" ? "Download File" : "Share File"}
        onPress={shareOrDownloadFile}
        disabled={!fileUri}
      />
    </View>
  );
}
