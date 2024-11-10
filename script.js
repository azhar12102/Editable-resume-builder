// script.js

// Switch from form to preview mode
function previewResume() {
    // Collect input values
    const name = document.getElementById("nameInput").value;
    const contact = document.getElementById("contactInput").value;
    const summary = document.getElementById("summaryInput").value;
    const education = document.getElementById("educationInput").value;

    // Populate preview fields
    document.getElementById("previewName").textContent = name || "Your Name";
    document.getElementById("previewContact").textContent = contact || "Your Contact Info";
    document.getElementById("previewSummary").textContent = summary || "Your summary will appear here...";
    document.getElementById("previewEducation").textContent = education || "Your education details will appear here...";

    // Add work experiences to preview
    const workExperienceInputs = document.querySelectorAll(".work-input");
    const previewWorkExperience = document.getElementById("previewWorkExperience");
    previewWorkExperience.innerHTML = ""; // Clear existing items
    workExperienceInputs.forEach(input => {
        const li = document.createElement("li");
        li.textContent = input.value;
        li.contentEditable = true;
        li.onclick = () => editInPreview(li);
        previewWorkExperience.appendChild(li);
    });

    // Add skills to preview
    const skillInputs = document.querySelectorAll(".skill-input");
    const previewSkills = document.getElementById("previewSkills");
    previewSkills.innerHTML = ""; // Clear existing items
    skillInputs.forEach(input => {
        const li = document.createElement("li");
        li.textContent = input.value;
        li.contentEditable = true;
        li.onclick = () => editInPreview(li);
        previewSkills.appendChild(li);
    });

    // Show preview and hide form
    document.getElementById("formSection").style.display = "none";
    document.getElementById("resumePreview").style.display = "block";
}

// Add new work experience field
function addWorkInput() {
    const container = document.getElementById("workExperienceInputs");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Work Experience";
    input.className = "work-input";
    container.appendChild(input);
}

// Add new skill input
function addSkillInput() {
    const container = document.getElementById("skillsInputs");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Skill";
    input.className = "skill-input";
    container.appendChild(input);
}

// Enable editing in preview mode
function editInPreview(element) {
    element.contentEditable = true;
    element.focus();
}

// Switch back to form for further edits
function editResume() {
    document.getElementById("formSection").style.display = "block";
    document.getElementById("resumePreview").style.display = "none";
}
