// document.addEventListener("DOMContentLoaded", function() {
//   function toggleChatbot() {
//     const box = document.getElementById("chatbot-box");
//     box.style.display = (box.style.display === "block") ? "none" : "block";
//   }
//   window.toggleChatbot = toggleChatbot;

//   document.getElementById("chatbot-form").addEventListener("submit", function(e) {
//     e.preventDefault();

//     const params = {
//       from_name: document.getElementById("from_name").value,
//       from_email: document.getElementById("from_email").value,
//       message: document.getElementById("problem").value
//     };

//     emailjs.send("service_p0oyx43", "template_llhje1o", params)
//       .then(function(response) {
//         alert("✅ Message sent successfully!");
//         document.getElementById("chatbot-form").reset();
//       }, function(error) {
//         alert("❌ Failed to send message. Please try again later.");
//         console.log("FAILED...", error);
//       });
//   });
// });

