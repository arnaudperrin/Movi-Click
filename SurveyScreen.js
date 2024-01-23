// Importation des modules nécessaires depuis React et React Native
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

// Définition du composant SurveyScreen
const SurveyScreen = () => {
  const [gender, setGender] = useState('');
  const [ageRange, setAgeRange] = useState('');

  // Fonction pour gérer la sélection du genre
  const handleGenderSelection = (selectedGender) => {
    setGender(selectedGender === gender ? '' : selectedGender);
  };

  // Fonction pour gérer la sélection de la tranche d'âge
  const handleAgeSelection = (selectedAgeRange) => {
    setAgeRange(selectedAgeRange === ageRange ? '' : selectedAgeRange);
  };

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = () => {
    console.log('gender:', gender);
    console.log('ageRange:', ageRange);
  };

  // Retourne l'interface utilisateur du composant
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* Titre de la page */}
      <Text style={styles.title}>Parlez-nous de vous !</Text>

      {/* Section du formulaire pour le genre */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Genre :</Text>
        {/* Conteneur pour les boutons de sélection du genre */}
        <View style={styles.buttonContainer}>
          {/* Bouton pour le genre "Homme" avec un style conditionnel */}
          <TouchableOpacity
            style={[
              styles.button,
              {
                borderColor: gender === 'Homme' ? '#F02D2D' : '#C6C5C7',
                backgroundColor: gender === 'Homme' ? '#fff' : '#fff',
              },
            ]}
            onPress={() => handleGenderSelection('Homme')}>
            {/* Texte du bouton */}
            <Text
              style={[
                styles.buttonText,
                {
                  color: gender === 'Homme' ? '#F02D2D' : '#C6C5C7',
                },
              ]}>
              Homme
            </Text>
          </TouchableOpacity>

          {/* Bouton pour le genre "Femme" avec un style conditionnel */}
          <TouchableOpacity
            style={[
              styles.button,
              {
                borderColor: gender === 'Femme' ? '#F02D2D' : '#C6C5C7',
                backgroundColor: gender === 'Femme' ? '#fff' : '#fff',
              },
            ]}
            onPress={() => handleGenderSelection('Femme')}>
            {/* Texte du bouton */}
            <Text
              style={[
                styles.buttonText,
                {
                  color: gender === 'Femme' ? '#F02D2D' : '#C6C5C7',
                },
              ]}>
              Femme
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Section du formulaire pour la tranche d'âge */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Âge :</Text>
        {/* Conteneur pour les boutons de sélection de la tranche d'âge */}
        <View style={styles.buttonContainer}>
          {/* Boucle sur les tranches d'âge pour afficher les boutons correspondants */}
          {['-18', '18-35', '35-50', '50+'].map((age) => (
            <TouchableOpacity
              key={age}
              style={[
                styles.button,
                {
                  borderColor: ageRange === age ? '#F02D2D' : '#C6C5C7',
                  backgroundColor: ageRange === age ? '#fff' : '#fff',
                },
              ]}
              onPress={() => handleAgeSelection(age)}>
              {/* Texte du bouton avec un style conditionnel */}
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: ageRange === age ? '#F02D2D' : '#C6C5C7',
                  },
                ]}>
                {age}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Bouton de soumission du formulaire avec un style conditionnel */}
      <TouchableOpacity
        style={[
          styles.submitButton,
          {
            borderColor: '#F02D2D',
            backgroundColor: '#fff',
            borderRadius: 25,
          },
        ]}
        onPress={handleSubmit}>
        {/* Texte du bouton */}
        <Text style={styles.submitButtonText}>Continuer</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

// Définition des styles CSS pour le composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  // Style du titre avec une taille de police, une couleur, une marge inférieure et supérieure spécifiées
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100,
    marginTop: 30,
  },
  // Conteneur pour les éléments du formulaire avec une marge inférieure spécifiée
  inputContainer: {
    marginBottom: 20,
  },
  // Style du label avec une taille de police, une marge inférieure, une couleur, et une marge à gauche spécifiées
  label: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#C6C5C7',
    marginLeft: 5,
  },
  // Conteneur pour les boutons de sélection avec un agencement en ligne et un espacement spécifié
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  // Style du bouton avec une bordure, des coins arrondis, un remplissage, une largeur spécifiée et une marge inférieure
  button: {
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    width: '45%', // Ajustez la largeur pour permettre deux boutons par ligne
  },
  // Style du texte du bouton avec une taille de police et un alignement spécifiés
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  // Style du bouton de soumission du formulaire avec une bordure, des coins arrondis, un remplissage, une marge supérieure spécifiée
  submitButton: {
    borderWidth: 2,
    borderRadius: 25,
    padding: 20,
    marginTop: 20,
  },
  // Style du texte du bouton de soumission du formulaire avec une couleur, une taille de police, une épaisseur de police et un alignement spécifiés
  submitButtonText: {
    color: '#F02D2D',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

// Exportation du composant SurveyScreen pour pouvoir l'utiliser ailleurs dans l'application
export default SurveyScreen;
