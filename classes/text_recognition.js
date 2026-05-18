export class TextRecognizer {
    constructor() {
        this.api_url = 'https://api.ocr.space/parse/imageurl';
        this.apikey = 'K8@keypart188957';
    }

    async recognizeText(url, language, filetype) {
        try {
            // Важно! Кодируем API-ключ
            const encodedApiKey = encodeURIComponent(this.apikey);
            const encodedUrl = encodeURIComponent(url);
            
            const fullUrl = `${this.api_url}?apikey=${encodedApiKey}&url=${encodedUrl}&language=${language}&filetype=${filetype}`;
            
            const response = await fetch(fullUrl);
            const data = await response.json();
            recognizedText.textContent = `Распознанный текст: ${data.ParsedResults[0].ParsedText}`;
    
        } catch (error) {
            recognizedText.textContent = 'Ошибка распознавания';
        }
    }
}