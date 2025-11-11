// Simple AI Simulation for Disease Prediction

document.getElementById("predictBtn").addEventListener("click", function () {
  const symptomsInput = document.getElementById("symptoms");
  const resultDiv = document.getElementById("result");
  const symptoms = symptomsInput.value.toLowerCase();

  // Show loading feedback
  resultDiv.innerHTML = '<p style="color: #6b21a8;">⏳ Analyzing your symptoms...</p>';

  setTimeout(() => {
    if (symptoms.trim() === "") {
      resultDiv.innerHTML = "<p style='color:red;'>⚠️ Please enter symptoms first.</p>";
      symptomsInput.focus();
      return;
    }

    // Symptom-disease mapping
    const conditions = [
      {
        name: "Flu or Viral Infection",
        match: ["fever", "cough"],
        advice: "Stay hydrated, rest well, and consult a doctor if symptoms persist."
      },
      {
        name: "Migraine",
        match: ["headache", "nausea"],
        advice: "Avoid loud environments and stay hydrated. Consult a neurologist if frequent."
      },
      {
        name: "Heart-related issue",
        match: ["chest pain"],
        advice: "Seek immediate medical attention."
      },
      {
        name: "Throat Infection",
        match: ["throat", "pain"],
        advice: "Gargle with warm salt water and avoid cold drinks."
      },
      {
        name: "COVID-19",
        match: ["fever", "cough", "loss of taste", "loss of smell"],
        advice: "Isolate yourself and get tested. Consult a doctor if symptoms worsen."
      },
      {
        name: "Allergy",
        match: ["sneezing", "itchy eyes", "runny nose"],
        advice: "Avoid allergens and consider antihistamines."
      },
      {
        name: "Food Poisoning",
        match: ["vomiting", "diarrhea", "stomach pain"],
        advice: "Stay hydrated and rest. Seek medical help if severe."
      },
      {
        name: "Diabetes (possible)",
        match: ["frequent urination", "excessive thirst", "fatigue"],
        advice: "Consult a doctor for blood sugar testing."
      },
      // Add more conditions as needed
    ];

    // Flexible matching
    let found = null;
    for (const cond of conditions) {
      if (cond.match.every(keyword => symptoms.includes(keyword))) {
        found = cond;
        break;
      }
    }

    let prediction, advice;
    if (found) {
      prediction = found.name;
      advice = found.advice;
    } else {
      prediction = "No clear match found.";
      advice = "Please consult a healthcare professional for accurate diagnosis.";
    }

    resultDiv.innerHTML = `
      <div style="margin-top:20px; background:#f2f8ff; padding:18px; border-radius:12px; box-shadow:0 2px 8px #a855f733;">
        <h3 style="color:#6b21a8;">🧠 Prediction Result:</h3>
        <p><strong>Disease:</strong> ${prediction}</p>
        <p><strong>Advice:</strong> ${advice}</p>
      </div>
    `;
  }, 700); // Simulate AI processing delay
});
