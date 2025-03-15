import { database } from './firebase-config.js';
import { ref, get, set } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

// Simple login handler (you might want to implement proper authentication)
window.handleLogin = (event) => {
    event.preventDefault();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('mainPage').classList.remove('hidden');
};

// Search vehicle and display wallet info
window.searchVehicle = async () => {
    const vehicleNumber = document.getElementById('vehicleNumber').value.toUpperCase();
    const vehicleRef = ref(database, `vehicles/${vehicleNumber}/tollWallet`);
    
    try {
        const snapshot = await get(vehicleRef);
        if (snapshot.exists()) {
            const balance = snapshot.val();
            document.getElementById('balance').textContent = `RM ${balance}`;
            document.getElementById('walletInfo').classList.remove('hidden');
        } else {
            alert('Vehicle not found!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching vehicle data');
    }
};

// Top up wallet
window.topupWallet = async () => {
    const vehicleNumber = document.getElementById('vehicleNumber').value.toUpperCase();
    const amount = Number(document.getElementById('topupAmount').value);
    
    if (!amount || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    const vehicleRef = ref(database, `vehicles/${vehicleNumber}/tollWallet`);
    
    try {
        const snapshot = await get(vehicleRef);
        if (snapshot.exists()) {
            const currentBalance = snapshot.val();
            const newBalance = currentBalance + amount;
            await set(vehicleRef, newBalance);
            document.getElementById('balance').textContent = `RM ${newBalance}`;
            document.getElementById('topupAmount').value = '';
            alert('Top up successful!');
        } else {
            alert('Vehicle not found!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error updating wallet');
    }
}; 