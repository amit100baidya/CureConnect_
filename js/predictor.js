// Simple AI Simulation for Disease Prediction

document.getElementById("predictBtn").addEventListener("click", function () {
  const symptoms = document.getElementById("symptoms").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (symptoms.trim() === "") {
    resultDiv.innerHTML = "<p style='color:red;'>⚠️ Please enter symptoms first.</p>";
    return;
  }

  let prediction = "";
  let advice = "";

  if (symptoms.includes("fever") && symptoms.includes("cough")) {
    prediction = "You may have Flu or Viral Infection.";
    advice = "Stay hydrated, rest well, and consult a doctor if symptoms persist.";
  } else if (symptoms.includes("headache") && symptoms.includes("nausea")) {
    prediction = "Possible Migraine.";
    advice = "Avoid loud environments and stay hydrated. Consult a neurologist if frequent.";
  } else if (symptoms.includes("chest pain")) {
    prediction = "Possible Heart-related issue.";
    advice = "Seek immediate medical attention.";
  } else if (symptoms.includes("throat") && symptoms.includes("pain")) {
    prediction = "Possible Throat Infection.";
    advice = "Gargle with warm salt water and avoid cold drinks.";
  } else {
    prediction = "No clear match found.";
    advice = "Please consult a healthcare professional for accurate diagnosis.";
  }

  resultDiv.innerHTML = `
    <div style="margin-top:20px; background:#f2f8ff; padding:15px; border-radius:10px;">
      <h3>🧠 Prediction Result:</h3>
      <p><strong>Disease:</strong> ${prediction}</p>
      <p><strong>Advice:</strong> ${advice}</p>
    </div>
  `;
});
