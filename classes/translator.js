export class Translator {
    constructor(table, languageSwitch) {
        this.table = table;
        this.languageSwitch = languageSwitch;
        this.translateButton = document.getElementById('translateButton');
    }

    async translateWord(word) {
        this.disableButton();
        let langPair = languageSwitch.value;

        try {
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${word}&langpair=${langPair}`);
            const data = await response.json();
            const translation = data.responseData.translatedText;

            this.table.addRow(word, translation);
            this.table.translationHistory.push({ word, translation });
        } catch (error) {
            alert(error);
        } finally {
            this.enableButton();
        }
    }

    disableButton() {
        this.translateButton.disabled = true;
        this.translateButton.textContent = 'Загрузка...';
    }

    enableButton() {
        this.translateButton.disabled = false;
        this.translateButton.textContent = 'Перевести';
    }
}
