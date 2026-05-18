import { TextRecognizer } from "./classes/text_recognition.js";

let recognizer = new TextRecognizer()

recognizeButton.addEventListener('click', async () => {
    const url = linkInput.value
    const language = languageSwitch2.value;
    const filetype = fileFormat.value;

    recognizer.recognizeText(url, language, filetype);
});