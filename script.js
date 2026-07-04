// LifeStory AI JavaScript

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to LifeStory AI!");

    const button = document.querySelector("button");

    if (button) {
        button.addEventListener("click", function () {
            alert("🚀 AI Story Generator is coming soon!");
        });
    }
});
const aiButton = document.querySelector(".ai-generator button");
const storyOutput = document.getElementById("storyOutput");
const textarea = document.querySelector(".ai-generator textarea");

if (aiButton) {

aiButton.onclick = function () {

let prompt = textarea.value;

if(prompt==""){
alert("Please write your story idea.");
return;
}

storyOutput.innerHTML = `
<h3>📖 AI Generated Story</h3>

<p>
Once upon a time, ${prompt}. The journey was full of struggles, hope and courage. Finally, the hero succeeded and inspired everyone around them. Never stop believing in yourself.
</p>
`;

};

}
