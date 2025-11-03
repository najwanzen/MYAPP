import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const notes: Note[] = [
  {
    id: 1,
    image: require("@/assets/images/pict-1.png"),
    title: "Belajar Mobile App",
    description: "Belajar Membuat Aplikasi mobile app",
    date: "29 Oktober 2025",
  },
  {
    id: 2,
    image: require("@/assets/images/pict-2.png"),
    title: "Belajar backend",
    description: "Belajar membuat restful api",
    date: "30 Oktober 2025",
  },
  {
    id: 3,
    image: require("@/assets/images/pict-3.png"),
    title: "Belajar Mobile App",
    description: "Belajar Membuat Aplikasi mobile app",
    date: "11 November 2025",
  },
  {
    id: 4,
    image: require("@/assets/images/pict-4.png"),
    title: "Belajar backend",
    description: "Belajar membuat restful api",
    date: "17 November 2025",
  },{
    id: 5,
    image: require("@/assets/images/pict-4.png"),
    title: "Belajar backend",
    description: "Belajar membuat restful api",
    date: "17 November 2025",
  },{
    id: 6,
    image: require("@/assets/images/pict-4.png"),
    title: "Belajar backend",
    description: "Belajar membuat restful api",
    date: "17 November 2025",
  },{
    id: 7,
    image: require("@/assets/images/pict-4.png"),
    title: "Belajar backend",
    description: "Belajar membuat restful api",
    date: "17 November 2025",
  },

];

type Note = {
  id: number;
  image: ImageSourcePropType | { uri: string };
  title: string;
  description: string;
  date: string;
};

const NoteItem = ({ item }: { item: Note }) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={{ width: 75, height: 75 }} />

      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDesc}>{item.description}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
      </View>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 35, height: 35 }}
        />

        <Text style={styles.kodeinText}>Kodein</Text>
        <Text style={styles.notesText}>Notes</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={notes}
          renderItem={({ item }) => <NoteItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 10 }}
          ListEmptyComponent={() => <EmptyData />}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="add" size={30} color={"white"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const EmptyData = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("@/assets/images/emptyIcon.png")}
      />
      <Text style={styles.emptyTitle}>Add your first note</Text>
      <Text style={styles.emptyDesc}>
        Save your thoughts, tasks or inspiration
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  kodeinText: {
    fontSize: 20,
    fontWeight: 700,
  },

  notesText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#FF5B13",
  },

  button: {
    position: "absolute",
    bottom: 45,
    right: 20,
    backgroundColor: "#FF5B13",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },

  content: {
    flex: 1,
    padding: 10,
    gap: 15,
  },

  card: {
    flexDirection: "row",
    gap: 20,
    padding: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderRadius: 8,
  },

  cardContainer: {
    flex: 1,
    padding: 10,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },

  cardDesc: {
    fontSize: 14,
    marginTop: 3,
  },

  cardDate: {
    fontSize: 13,
    marginTop: 15,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  emptyDesc: {
    fontSize: 18,
    color: "gray"
  }
});