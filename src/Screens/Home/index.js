import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Button from '../../Components/Button';
import * as ImagePicker from 'expo-image-picker';

export default function Home() {
  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text>Hello World</Text>
      <Button text={'Open Picker'} onPress={pickImage} />
      {image && <Image source={{uri: image}} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
