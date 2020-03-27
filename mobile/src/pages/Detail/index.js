import React from 'react';
import { View, TouchableOpacity, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={() => {}}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>

        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>
          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>Cadelinha atropelada</Text>
          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>R$ 120,00</Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
        </View>

        <Text styles={styles.heroDescription}>Entre em contato:</Text>

        <View styles={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
