function saveToSheet(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Notes");
  sheet.appendRow([new Date(), data.name, data.note]);
}