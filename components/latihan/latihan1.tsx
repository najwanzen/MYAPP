import { Text, TextInput, View } from "react-native";

export default function Latihan1() {
  return (
    <View
    style={{
      flex: 1, 
      justifyContent:"center",
      alignItems: "center",
      padding: 25,
      backgroundColor: "grey-",
    }}>
      {/* belajar text */}
      <Text
        style={{
          height: 30,
          margin: 5,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Aplikasi Biodata Diri
      </Text>

    <View style={{width: "100%", backgroundColor: "white", padding: 10,
        borderRadius: 7
    }}>
      <Text
        style={{
          padding: 5,
        }}
      >
        Nama
      </Text>

      {/* belajar input */}
      <TextInput
        placeholder="Masukkan nama mu"
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
        Kelas
      </Text>

      {/* belajar input */}
      <TextInput
        placeholder="Masukkan kelas mu"
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
        Hobi
      </Text>

      {/* belajar input */}
      <TextInput
        placeholder="Masukkan hobi mu"
        style={{
          height: 40,
          padding: 10,
          marginHorizontal: 6,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 5,
        }}
      />
      </View>

      <Text
        style={{
          padding: 5,
          fontSize: 15
        }}
      >
        Terima Kasih 
      </Text>
    </View>
  );
}