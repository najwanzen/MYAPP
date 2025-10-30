import { Button, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
        backgroundColor: "grey-",
      }}
    >
      <Text
        style={{
          height: 30,
          margin: 5,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Login
      </Text>

      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: 10,
          borderRadius: 7,
        }}
      >
        <Text
          style={{
            padding: 5,
          }}
        >
          Email:
        </Text>

        {/* belajar input */}
        <TextInput
          placeholder="Masukkan email"
          style={{
            height: 40,
            padding: 10,
            marginHorizontal: 6,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 5,
          }}
        />
        <Text
          style={{
            padding: 5,
          }}
        >
          Password:
        </Text>

        {/* belajar input */}
        <TextInput
          placeholder="Masukkan password"
          style={{
            height: 40,
            padding: 10,
            marginHorizontal: 6,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 5,
          }}
        />
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            padding: 10,
            borderRadius: 7,
          }}
        >
          <Button title="LOGIN" />
        </View>
      </View>
    </View>
  );
}