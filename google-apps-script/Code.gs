// Gohan World — Newsletter Signup → Google Sheets
// Deploy as: Web App > Execute as: Me > Who has access: Anyone
//
// Each month gets its own sheet tab (e.g. "April 2026", "May 2026").
// Columns: Email | Date | Time | City | Country | IP Address

function doGet(e) {
  try {
    var data = e.parameter || {};
    console.log('doGet received: ' + JSON.stringify(data));

    if (!data.email) {
      return ContentService
        .createTextOutput(JSON.stringify({ result: 'error', error: 'No email provided' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var ss        = SpreadsheetApp.getActiveSpreadsheet();
    var monthName = data.monthTab
      || Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'MMMM yyyy');

    var tab = ss.getSheetByName(monthName);
    if (!tab) {
      tab = ss.insertSheet(monthName);
      tab.appendRow(['Email', 'Date', 'Time', 'City', 'Country', 'IP Address']);
      tab.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#f3f3f3');
      tab.setFrozenRows(1);
      tab.setColumnWidth(1, 240);
    }

    tab.appendRow([
      data.email   || '',
      data.date    || '',
      data.time    || '',
      data.city    || '—',
      data.country || '—',
      data.ip      || '—',
    ]);

    console.log('Row written successfully for: ' + data.email);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    console.log('Error: ' + err.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Keep doPost for testInsert compatibility
function doPost(e) {
  return doGet(e);
}

// Run this manually in the Apps Script editor to verify everything works
function testInsert() {
  var fakeEvent = {
    parameter: {
      email:    'test@example.com',
      date:     '4/24/2026',
      time:     '10:30:00 AM',
      monthTab: 'April 2026',
      city:     'Tokyo',
      country:  'Japan',
      ip:       '1.2.3.4',
    }
  };
  Logger.log(doGet(fakeEvent).getContent());
}
