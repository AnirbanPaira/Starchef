import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableHighlight,
  Image,
  ScrollView,
  FlatList,
  Pressable,
  TouchableOpacity
} from "react-native";

const data = {
  cuisines: [
    "French",
    "Chinese",
    "Japanese",
    "Italian",
    "Greek",
    "Lebanese",
    "Turkey",
    "Thai",
    "Indian",
    "Mexican",
    "American",
  ],
  dishes: [
    {
      name: "Masala Mughlai",
      rating: 4.2,
      description: "Chicken fried in deep tomato sauce with delicious spices",
      equipments: ["Refrigerator", "Microwave"],
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 1,
    },
    {
      name: "Masala Paneer",
      rating: 4.3,
      description: "Paneer tossed in gravy",
      equipments: ["Microwave"],
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 2,
    },
  ],
  popularDishes: [
    {
      name: "Biryani",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 3,
    },
    {
      name: "Daal Batti",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 4,
    },
    {
      name: "Veg Korma",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 5,
    },
    {
      name: "Chicken Korma",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 6,
    },
    {
      name: "Biryani",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 7,
    },
    {
      name: "Daal Batti",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 8,
    },
    {
      name: "Veg Korma",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 9,
    },
    {
      name: "Chicken Korma",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 10,
    },
    {
      name: "Biryani",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 11,
    },
    {
      name: "Daal Batti",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 12,
    },
    {
      name: "Veg Korma",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 13,
    },
    {
      name: "Chicken Korma",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 14,
    },
    {
      name: "Biryani",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 15,
    },
    {
      name: "Daal Batti",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 16,
    },
    {
      name: "Veg Korma",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 17,
    },
    {
      name: "Chicken Korma",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
      id: 18,
    },
  ],
};

const HomeScreen = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const { width } = useWindowDimensions();
  const containerWidth = Math.min(width, 500);

  const renderCuisineItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        // Handle cuisine press here
      }}
      style={styles.cuisineTouchable}
    >
      <Text style={styles.cuisineText}>{item}</Text>
    </TouchableOpacity>
  );



  const renderItem = ({ item }) => (
    <TouchableHighlight
      key={item.id}
      underlayColor="transparent"
      onPressIn={() => {
        setSelectedItemId(item.id);
      }}
      onPressOut={() => {
        setSelectedItemId(null);
      }}
      style={[
        styles.dishTouchable,
        selectedItemId === item.id && styles.selectedDishTouchable,
      ]}
    >
      <View style={styles.dishContainer}>
        <View
          style={[
            styles.imageContainer,
            selectedItemId === item.id && styles.selectedImageContainer,
          ]}
        >
          <Image source={{ uri: item.image }} style={styles.dishImage} />
        </View>
        <Text style={styles.dishName}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.headercontainer}>
          <View style={styles.header}>
            <Text style={styles.selectDishesText}>Select Dishes</Text>
          </View>
        </View>
        <View style={styles.border} />
        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}>
          <View style={styles.dateanddaterangecontainer}>
            {/* Date and Date Range Picker components can be added here */}
          </View>
          <View style={styles.aligningdishes}>
            <View style={styles.cuisineContainer}>
             
              <FlatList
                data={data.cuisines}
                renderItem={renderCuisineItem}
                keyExtractor={(item) => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cuisineList}
              />
            </View>
            <Text style={styles.aligningdishesText}>Popular Dishes</Text>
            <FlatList
              data={data.popularDishes}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              contentContainerStyle={{ paddingHorizontal: 10 ,width:"100%"}}
              // style={{ width: width }}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
      <View style={styles.secondborder} />
      <View style={styles.textContainer}>
        <Text style={styles.recommendedText}>Recommended</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    // backgroundColor: "lightgray",
    paddingTop: 20,
    height: "50%", // Take 50% of the height
    alignSelf: "center", // Center horizontally
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "10%",
  },
  recommendedText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  headercontainer: {
    backgroundColor: "transparent",

    width: "100%", // Take full width
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    position: "relative",
  },
  selectDishesText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  border: {
    height: 60,
    backgroundColor: "black",
  },
  secondborder: {
    height: 4,
    backgroundColor: "#edeff2",
  },
  dateanddaterangecontainer: {
    backgroundColor: "#ffff",
    height: 90,
    position: "absolute",
    top: -35, // 60 (border height) + 10 (spacing)
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    // margin: 20,
    marginLeft: 30,
    marginRight: 30,
    zIndex: 1,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4, // For Android
  },

  aligningdishes: {
    backgroundColor: "#ffff",
    paddingLeft: 20,
    paddingHorizontal: "5%",
    //  marginTop:150
  },
  aligningdishesText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    marginBottom: 10,
  },
  dishContainer: {
    alignItems: "center", // Center the content vertically
    // width: 150,
  },
  dishesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start", // Updated to flex-start
    marginHorizontal: 10, // Adjusted spacing between items
    marginBottom: 20,
    width: "100%",
  },
  dishTouchable: {
    borderRadius: 50, // Make it circular
    overflow: "hidden", // Ensure the image stays within the circle
    marginRight: 10,
    borderColor: "#FF941A",
    borderWidth: 2,
  },
  dishImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  dishName: {
    marginTop: 10,
    fontSize: 12,
    position: "absolute",
    textAlign: "center",
    width: 50,
    color: "white",
    fontWeight: "bold",
  },
  dishTouchable: {
    borderRadius: 50,
    overflow: "hidden",
    marginRight: 10,
    borderColor: "#FF941A",
    borderWidth: 2,
  },
  selectedDishTouchable: {
    borderWidth: 0, // Hide the border when selected
    borderColor: "transparent",
  },
  imageContainer: {
    borderRadius: 50,
    overflow: "hidden",
    // borderWidth: 2,
    // borderColor: "#e68525",
  },
  selectedImageContainer: {
    borderWidth: 0,
  },
  cuisineContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
    // backgroundColor: "red",
  },
  cuisineTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cuisineList: {
    flexDirection: "row",
  },
  cuisineTouchable: {
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e68525",
  },
  cuisineText: {
    fontSize: 16,
  },
});

export default HomeScreen;
