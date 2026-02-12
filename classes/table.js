export class Table {
    constructor(tableId, maxRows) {
        this.table = document.getElementById(tableId);
        this.maxRows = maxRows;
        this.downloadButton = document.getElementById('downloadButton');
        this.translationHistory = []; // Массив для хранения истории перевода
    }

    addRow(word, translation) {
        const newRow = this.table.insertRow();
        newRow.insertCell().textContent = word;
        newRow.insertCell().textContent = translation;

        if (this.table.rows.length > this.maxRows + 1) {
            this.table.deleteRow(1); // Удаляем вторую строку (индекс 1)
        }
    }

    downloadCSV(isSorted) {
        let dataToDownload = this.translationHistory; // Копируем массив

        // Сортировка, если чекбокс активен
        if (isSorted) {
            dataToDownload.sort((a, b) => a.word.localeCompare(b.word));
        }
        // Формирование CSV-строки
        let csvContent = "Слово,Перевод\n";
        for (const item of dataToDownload) {
            csvContent += `${item.word},${item.translation}\n`;
        }
    
        // Создание ссылки для скачивания
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'translation_history.csv';
        link.click();
    }

    clearHistory() {
        this.translationHistory.length = 0;
        for (let i = 1; i += 1; i < 5) {
            this.table.deleteRow(1)
        }
    }

}