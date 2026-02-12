export class TextRecognizer {
    constructor() {
        this.api_url = 'https://api.ocr.space/parse/imageurl?'
        this.apikey = 'K81078606588957';
    }

    async recognizeText(url, language, filetype) {
        try {
            const response = await fetch(`${this.api_url}apikey=${this.apikey}&url=${url}&language=${language}&filetype=${filetype}`);
            const data = await response.json()
            recognizedText.textContent = `Распознанный текст: ${data.ParsedResults[0].ParsedText}`;
    
        } catch (error) {
            recognizedText.textContent = 'Ошибка распознавания';
        }
    }
}