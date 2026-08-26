/**
 * Impresa Edile La Martina — Contatti dal form landing → Google Sheet
 *
 * SETUP (una sola volta):
 * 1. Apri lo Sheet: https://docs.google.com/spreadsheets/d/1z6-T1wk1gAeIsD-y4NyprFUb-8NwfbDnOMnile9aMQo/edit
 * 2. Menu: Estensioni → Apps Script
 * 3. Cancella il codice di default e incolla TUTTO questo file
 * 4. Salva (Ctrl/Cmd+S)
 * 5. Distribuisci → Nuova distribuzione → tipo "App web"
 *    - Esegui come: Io (il tuo account)
 *    - Chi può accedere: Chiunque
 * 6. Copia l’URL della distribuzione (termina con /exec)
 * 7. Incollalo in js/main.js nella costante CONTACT_FORM_ENDPOINT
 */

var SHEET_ID = '1z6-T1wk1gAeIsD-y4NyprFUb-8NwfbDnOMnile9aMQo';

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    var data = {};

    if (e.postData && e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents || '{}');
    } else {
      data = (e && e.parameter) ? e.parameter : {};
    }

    var timestamp = Utilities.formatDate(
      new Date(),
      'Europe/Rome',
      'dd/MM/yyyy HH:mm:ss'
    );

    sheet.appendRow([
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.service || '',
      data.message || '',
      timestamp
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: 'Endpoint contatti La Martina attivo' }))
    .setMimeType(ContentService.MimeType.JSON);
}
