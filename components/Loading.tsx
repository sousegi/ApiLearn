import {ActivityIndicator, StyleSheet, Text, View} from "react-native";

export  const Loading = () => {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
      }}>
          <ActivityIndicator size={"large"} />
          <Text style={{ marginTop: 15, color: '#0891b2' }}>Loading ...</Text>
      </View>
    );
}