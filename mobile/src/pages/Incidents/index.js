import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  return(
    <View style={styles.container} >
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>
        Bem-vindo!
      </Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        data={[1, 2, 3]}
        style={styles.incidentList}
        keyExtractor={ incident => String(incident) }
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incidentList}>
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>APAD:</Text>

              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

              <Text style={styles.incidentValue}>VALOR:</Text>
              <Text style={styles.incidentValue}>R$ 120,00</Text>

              <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
                <Text style={styles.detailsButtonPress}>
                  <Feather name="arrow-right" size={16} color="#e02041" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        />

          <View style={styles.incidentList}>
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>APAD:</Text>

              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

              <Text style={styles.incidentValue}>VALOR:</Text>
              <Text style={styles.incidentValue}>R$ 120,00</Text>

              <TouchableOpacity style={styles.detailsButton} onPress={() => }>
                <Text style={styles.detailsButtonPress}>
                  <Feather name="arrow-right" size={16} color="#e02041" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
  );
}
