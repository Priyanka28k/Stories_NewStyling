// ImageGallery.js
import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    require("./images/autumn.jpg"),
    require("./images/spring.jpg"),
    require("./images/summer.jpg"),
    require("./images/winter.jpg"),
    // Add more images as needed
  ];

  const toggleImageSize = (index) => {
    if (selectedImageIndex === index) {
      // If the clicked image is already selected, reset the selection
      setSelectedImageIndex(null);
    } else {
      // Set the clicked image as selected
      setSelectedImageIndex(index);
    }
  };

  return (
    <View style={styles.background}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => toggleImageSize(index)}>
            <View
              style={[
                styles.card,
                selectedImageIndex === index && styles.selectedCard,
              ]}
            >
              <Image source={image} style={styles.cardImage} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#3C343D",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  scrollView: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
  },
  card: {
    marginHorizontal: 8,
    borderRadius: 16,
    height: 360,
    width: 50, // Adjust this value to decrease the width
    overflow: "hidden",
    backgroundColor: "#3C343D",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
  cardImage: {
    height: "100%",
    width: 250, // Set the width as needed
  },
  selectedCard: {
    height: 400, // Increase the height for the selected image
    width: "94%",
    borderRadius: 16,
    overflow: "hidden",
  },
});

export default ImageGallery;
