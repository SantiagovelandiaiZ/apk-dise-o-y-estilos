import { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, StatusBar } from 'react-native';

export default function App() {
  const [continued, setContinued] = useState(false);

  const handleContinue = () => {
    setContinued(true);
    Alert.alert('¡Todo listo!', 'Has continuado desde tu dashboard.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Mi Dashboard</Text>

        <View style={styles.profile}>
          <View style={styles.avatar}><Text style={styles.avatarText}>R</Text></View>
          <View style={styles.profileText}>
            <Text style={styles.name}>Rudolf</Text>
            <Text style={styles.role}>Programador</Text>
          </View>
          <Text style={styles.online}>●</Text>
        </View>

        <View style={styles.cards}>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>Ventas</Text>
            <Text style={styles.number}>25</Text>
            <Text style={styles.cardNote}>Este mes</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>Clientes</Text>
            <Text style={styles.number}>48</Text>
            <Text style={styles.cardNote}>Registrados</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Actividades</Text>
          <Text style={styles.progress}>2 de 3</Text>
        </View>

        <View style={styles.activity}>
          <View style={styles.activityRow}><Text style={styles.checkDone}>✓</Text><Text style={styles.activityDone}>Proyecto React Native</Text></View>
          <View style={styles.activityRow}><Text style={styles.checkDone}>✓</Text><Text style={styles.activityDone}>Diseño de interfaz</Text></View>
          <View style={styles.activityRow}><Text style={styles.checkPending}>○</Text><Text style={styles.activityPending}>API REST</Text><View style={styles.pendingBadge}><Text style={styles.pendingBadgeText}>Pendiente</Text></View></View>
        </View>

        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={handleContinue} accessibilityRole="button">
          <Text style={styles.buttonText}>{continued ? 'CONTINUAR ✓' : 'CONTINUAR'}</Text>
          <Text style={styles.buttonArrow}>›</Text>
        </Pressable>
        <Text style={styles.footer}>Tu resumen personal en un solo lugar</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f2f2f2' },
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 28 },
  title: { alignSelf: 'flex-start', width: '90%', fontSize: 29, fontWeight: '800', color: '#222', marginBottom: 8, letterSpacing: -0.6 },
  profile: { width: '90%', padding: 18, marginVertical: 16, backgroundColor: '#fff', borderRadius: 18, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 3 }, elevation: 2 },
  avatar: { width: 52, height: 52, borderRadius: 26, backgroundColor: '#e7e9ff', alignItems: 'center', justifyContent: 'center', marginRight: 13 },
  avatarText: { fontSize: 24, fontWeight: '800', color: '#4546a5' },
  profileText: { flex: 1 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#222' },
  role: { fontSize: 14, color: '#777', marginTop: 3 },
  online: { color: '#35ad76', fontSize: 15 },
  cards: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', width: '90%', gap: 12 },
  card: { flex: 1, padding: 18, backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#e8e8e8', minHeight: 130, justifyContent: 'center' },
  cardLabel: { color: '#666', fontSize: 15, fontWeight: '600' },
  number: { fontSize: 32, fontWeight: '800', marginTop: 8, color: '#222' },
  cardNote: { color: '#999', fontSize: 12, marginTop: 3 },
  sectionHeader: { width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 26, marginBottom: 11 },
  sectionTitle: { fontSize: 20, fontWeight: '800', color: '#222' },
  progress: { color: '#777', fontSize: 13 },
  activity: { width: '90%', padding: 20, backgroundColor: '#fff', borderRadius: 16, gap: 17, borderWidth: 1, borderColor: '#e8e8e8' },
  activityRow: { flexDirection: 'row', alignItems: 'center' },
  checkDone: { color: '#2fa56f', fontSize: 20, fontWeight: 'bold', width: 28 },
  activityDone: { color: '#444', fontSize: 15, flex: 1 },
  checkPending: { color: '#a3a3a3', fontSize: 20, width: 28 },
  activityPending: { color: '#777', fontSize: 15, flex: 1 },
  pendingBadge: { backgroundColor: '#fff1d8', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  pendingBadgeText: { color: '#a66c13', fontSize: 11, fontWeight: '600' },
  button: { marginTop: 25, width: '90%', paddingVertical: 16, paddingHorizontal: 20, borderRadius: 12, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#222', position: 'relative' },
  buttonPressed: { opacity: 0.82, transform: [{ scale: 0.99 }] },
  buttonText: { color: '#fff', fontWeight: '800', letterSpacing: 1, fontSize: 14 },
  buttonArrow: { color: '#fff', fontSize: 25, position: 'absolute', right: 20, top: 7 },
  footer: { color: '#999', fontSize: 12, marginTop: 17, textAlign: 'center' }
});
