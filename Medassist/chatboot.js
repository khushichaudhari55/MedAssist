// Basic first aid guidance database
const firstAidDatabase = {
    "heart attack": "Call ambulance immediately. Keep patient calm and comfortable.",
    "head injury": "Apply ice pack. Monitor for concussion symptoms.",
    "burns": "Run cool water over burn. Cover with non-stick dressing.",
    "fracture": "Immobilize the injured area. Apply ice and seek medical attention.",
    "bleeding": "Apply pressure on the wound. Elevate the injured limb.",
    "dizziness": "Sit or lie down. Drink water and rest.",
    "choking": "Perform the Heimlich maneuver. Call for help immediately.",
    "allergic reaction": "Use antihistamines if available. Seek medical help if symptoms worsen.",
    "hypothermia": "Warm the person slowly. Provide blankets and warm drinks.",
    "heatstroke": "Move to a cooler place. Hydrate and cool the body with ice packs.",
    "severe headache": "Rest in a dark room. Take over-the-counter painkillers if needed.",
    "nosebleed": "Pinch the nostrils and lean forward. Avoid tilting the head back.",
    "diabetic emergency": "Give sugar or glucose if the person is conscious. Call for help.",
    "asthma attack": "Use inhaler. Sit upright and breathe slowly.",
    "severe abdominal pain": "Rest. Seek medical attention if pain persists or worsens.",
    "seizure": "Clear the area around the person. Do not hold them down. Call for help.",
    "poisoning": "Call poison control immediately. If the substance is ingested, do not induce vomiting.",
    "stroke": "Recognize the signs: facial drooping, arm weakness, and speech difficulty. Call for help.",
    "animal bite": "Clean the wound and apply pressure to stop bleeding. Seek medical help.",
    "eye injury": "Rinse with clean water. Cover with a sterile dressing and seek medical help."
};

// Initialize chat window
const chatWindow = document.getElementById("chat-window");

// Handle user input
document.getElementById("send-btn").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value.trim();
    const response = getResponse(userInput);
    chatWindow.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    chatWindow.innerHTML += `<p><strong>MedAssist:</strong> ${response}</p>`;
    document.getElementById("user-input").value = "";
    chatWindow.scrollTop = chatWindow.scrollHeight;
});

// Show suggestions based on input
function showSuggestions() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    const suggestionsBox = document.getElementById("suggestions");
    suggestionsBox.innerHTML = '';
    
    if (userInput.length > 0) {
        let suggestions = [];
        for (const condition in firstAidDatabase) {
            if (condition.includes(userInput)) {
                suggestions.push(condition);
            }
        }
        if (suggestions.length > 0) {
            suggestions.forEach(suggestion => {
                const suggestionElement = document.createElement("div");
                suggestionElement.classList.add("suggestion-item");
                suggestionElement.innerText = suggestion;
                suggestionElement.onclick = () => {
                    document.getElementById("user-input").value = suggestion;
                    suggestionsBox.style.display = 'none';
                };
                suggestionsBox.appendChild(suggestionElement);
            });
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    } else {
        suggestionsBox.style.display = 'none';
    }
}

// Get response from database
function getResponse(userInput) {
    userInput = userInput.toLowerCase();
    for (const condition in firstAidDatabase) {
        if (userInput.includes(condition)) {
            return firstAidDatabase[condition];
        }
    }
    return "Sorry, I'm not sure about that. Please provide more information.";
}
