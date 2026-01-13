import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc } from "firebase/firestore"

const firebaseConfig = {
  // التعديل: سحب مفتاح الفايربيز من بيئة التشغيل
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "voltashare-64544.firebaseapp.com",
  projectId: "voltashare-64544",
  storageBucket: "voltashare-64544.firebasestorage.app",
  messagingSenderId: "589962269010",
  appId: "1:589962269010:web:4c730deb1d315ec0ecea8b",
  measurementId: "G-Q0NC32318K",
}

let db: ReturnType<typeof getFirestore> | null = null

export function initializeFirebase() {
  try {
    // التأكد من وجود المفتاح قبل البدء
    if (!firebaseConfig.apiKey) {
      console.error("Firebase API key is missing. Please check .env.local")
      return
    }
    
    const app = initializeApp(firebaseConfig)
    db = getFirestore(app)
    console.log("Firebase initialized successfully")
  } catch (error) {
    console.error("Firebase initialization error:", error)
  }
}

export async function logEnergyData() {
  if (!db) {
    console.error("Firebase not initialized")
    return
  }

  try {
    const energyRef = collection(db, "energy_data")
    const docRef = await addDoc(energyRef, {
      batteryLevel: 85,
      timestamp: new Date(),
      location: "Lisbon, PT",
    })
    console.log("Energy data logged successfully:", docRef.id)
  } catch (error) {
    console.error("Error logging energy data:", error)
  }
}