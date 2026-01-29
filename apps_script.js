function doGet(e) {

  var TOKEN = "YOUR_SECRET_TOKEN";

  if (!e.parameter.token || e.parameter.token !== TOKEN) {
    return ContentService
      .createTextOutput("Unauthorized")
      .setMimeType(ContentService.MimeType.TEXT);
  }

  var threads = GmailApp.getInboxThreads(0, 10);
  var emailData = [];

  threads.forEach(function(thread) {
    var msg = thread.getMessages()[0];
    var attachments = msg.getAttachments();

    attachments.forEach(function(att) {
      emailData.push({
        EmailDate: msg.getDate().toISOString(),
        From: msg.getFrom(),
        Subject: msg.getSubject(),
        FileName: att.getName(),
        MimeType: att.getContentType(),
        Binary: Utilities.base64Encode(att.getBytes())
      });
    });

    if (attachments.length === 0) {
      emailData.push({
        EmailDate: msg.getDate().toISOString(),
        From: msg.getFrom(),
        Subject: msg.getSubject(),
        FileName: "No Attachment",
        MimeType: "N/A",
        Binary: "N/A"
      });
    }
  });

  return ContentService
    .createTextOutput(JSON.stringify(emailData))
    .setMimeType(ContentService.MimeType.JSON);
}
