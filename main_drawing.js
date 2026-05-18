import { DrawingCanvas } from './classes/drawing.js';

// Инициализация canvas
const canvas = new DrawingCanvas('myCanvas');

// Обработчики событий для кнопок
const clearButton = document.getElementById('clearButton');
if (clearButton) {
    clearButton.addEventListener('click', async () => {
        canvas.clearCanvas(); 
    });
}

// Скачивание изображения
const loadImageButton = document.getElementById('loadImageButton');
if (loadImageButton) {
    loadImageButton.addEventListener('click', async () => {
        var link = document.createElement('a');
        link.download = 'image.png';
        link.href = canvas.canvas.toDataURL();
        link.click();
    });
}