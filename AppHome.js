// Importation des modules nécessaires depuis React et React Native
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Définition du composant AppHome
const AppHome = () => {
  const navigation = useNavigation();

  // Fonction appelée lors du clic sur le bouton d'inscription
  const handleSignUp = () => {
    console.log('Sign Up');
  };

  // Fonction appelée lors du clic sur le bouton de connexion
  const handleLogIn = () => {
    navigation.navigate('Survey');
  };

  // Retourne l'interface utilisateur du composant
  return (
    <View style={styles.container}>
      {/* Conteneur pour l'image */}
      <View style={styles.imageContainer}>
        {/* Image du logo */}
        <Image
          source={require('./film.png')}
          style={styles.image}
        />
      </View>

      {/* Titre de l'application avec une couleur spécifiée */}
      <Text style={[styles.title, { color: '#F02D2D' }]}>Movi'Click</Text>

      {/* Utiliser un conteneur pour grouper les boutons et le sous-titre */}
      <View style={styles.bottomContainer}>
        {/* Bouton d'inscription avec un style conditionnel */}
        <TouchableOpacity
          style={[
            styles.button,
            { borderColor: '#000', backgroundColor: '#fff' },
          ]}
          onPress={handleLogIn}>
          {/* Texte du bouton */}
          <Text style={[styles.buttonText, { color: '#000' }]}>S'INSCRIRE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { borderColor: '#000', backgroundColor: '#fff' },
          ]}
          onPress={handleSignUp}>
          {/* Texte du bouton */}
          <Text style={[styles.buttonText, { color: '#000' }]}>SE CONNECTER</Text>
        </TouchableOpacity>

        {/* Sous-titre */}
        <Text style={styles.subtitle}>
          Vous avez des difficultés à vous connecter ?
        </Text>
      </View>
    </View>
  );
};

// Définition des styles CSS pour le composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  // Style de l'image avec des dimensions spécifiées
  image: {
    width: 100,
    height: 100,
  },
  // Style du titre avec une taille de police et une couleur spécifiées
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Conteneur pour les boutons et le sous-titre
  bottomContainer: {
    alignItems: 'center', // Alignez les éléments au centre du conteneur
    marginTop: 20, // Ajustez la marge supérieure pour déplacer le conteneur vers le bas
  },
  // Style des boutons avec une bordure, un remplissage, et des coins arrondis
  button: {
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 50,
    paddingVertical: 15,
    marginBottom: 10,
  },
  // Style du texte du bouton avec une taille de police et un alignement spécifiés
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  // Style du sous-titre avec une taille de police et une marge supérieure spécifiées
  subtitle: {
    fontSize: 10,
    marginTop: 10,
  },
});

// Exportation du composant AppHome pour pouvoir l'utiliser ailleurs dans l'application
export default AppHome;
