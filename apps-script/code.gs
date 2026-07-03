/**
 * Use this code in Google Apps Script (Tools → Script editor) and deploy as a Web App.
 * It expects a JSON POST with fields: timestamp, name, email, message
 */
function doPost(e){
  try{
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([new Date(), data.name||'', data.email||'', data.message||'']);
    return ContentService.createTextOutput(JSON.stringify({status:'ok'})).setMimeType(ContentService.MimeType.JSON);
  }catch(err){
    return ContentService.createTextOutput(JSON.stringify({status:'error', message:err.message})).setMimeType(ContentService.MimeType.JSON);
  }
}
