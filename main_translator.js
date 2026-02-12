import { Translator } from "/classes/translator.js";
import { myTable } from "./main_history.js";

const languageSwitch = document.getElementById('languageSwitch');
const translateButton = document.getElementById('translateButton');
const wordInput = document.getElementById('wordInput');
const fileInput = document.getElementById('fileInput');
const translationOrder = document.getElementById('translationOrder');

const translator = new Translator(myTable, languageSwitch);
const reader = new FileReader();

translateButton.addEventListener('click', async () => {
    const word = document.getElementById('wordInput').value;
    if (word) {
        try {
        translator.translateWord(word);
        }
        catch(error){
            alert(error);
        }
        wordInput.value = ''
    } else {
        alert('Пожалуйста, введите слово.');
    }
});

loadFileButton.addEventListener('click', async () => {
    const file = fileInput.files[0];
    if (!file) {
        alert("Выберите файл для загрузки");
        return;
    }

    if (file.type !== "text/plain") {
        alert("Неверный тип файла. Допустим только .txt.");
        return;
    }

    reader.onload = async (e) => {
        const fileContent = e.target.result;
        const words = fileContent.trim().split(/\s+/);
        const enableAwait = translationOrder.checked;

        for (const word of words) {
            if (enableAwait) {
            await translator.translateWord(word);
            }
            else {
                translator.translateWord(word);
             }
        }
    };
    reader.readAsText(file);
});