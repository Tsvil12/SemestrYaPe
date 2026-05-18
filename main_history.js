import { Table } from "./classes/table.js";

export const myTable = new Table('myTable', 5);
const sortCheckbox = document.getElementById('sortCheckbox');

downloadButton.addEventListener('click', async () => {
    myTable.downloadCSV(sortCheckbox.checked);
});

clearHistoryButton.addEventListener('click', async () => {
    myTable.clearHistory();
});
