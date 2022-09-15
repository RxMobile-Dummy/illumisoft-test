import { NavigationProp } from "@react-navigation/core";
import { RESUS_HOME } from "Modules/Resuscitation/navigation/routes";
import { trachText } from "Modules/Trachestomy/config/strings";
import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import BulletList from "UIToolkit/BulletList";
import HollowButton from "UIToolkit/Buttons/HollowButton";
import GoBackHeader from "UIToolkit/GoBackHeader";
import { INFO_LIST } from "./conf";
import styles from "./styles";

interface Props {
  navigation: NavigationProp<any>;
}

const CPRWithUpperAirwayObstruction = React.memo(({ navigation }: Props) => {
  const onRestart = () => {
    navigation.navigate(RESUS_HOME);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GoBackHeader />
      <Text style={styles.title}>{trachText.CPRairwayObfuscation.knownTitle}</Text>
      <ScrollView style={styles.container}>
        <View style={styles.boldTextContainer}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.boldText}>
            {trachText.CPRairwayObfuscation.listBoldText}
          </Text>
        </View>
        <BulletList items={INFO_LIST} />
      </ScrollView>
      <View style={styles.btnContainer}>
        <HollowButton
          text={trachText.CPRairwayObfuscation.btnText}
          onPress={onRestart}
        />
      </View>
    </SafeAreaView>
  );
});

export default CPRWithUpperAirwayObstruction;
