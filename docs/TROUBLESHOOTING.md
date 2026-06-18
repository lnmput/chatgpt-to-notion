# Troubleshoot AI Chat Backup

Use this guide when ChatGPT export, Markdown download, Obsidian folder access, or Notion sync does not work as expected.

## The extension does not detect the AI page

1. Open a specific conversation instead of the platform home page.
2. Wait for the conversation to finish loading.
3. Refresh the page.
4. Confirm that the site is listed in [Supported platforms](USER_GUIDE.md#supported-platforms).
5. Open `chrome://extensions` and confirm that AI Chat Backup is enabled.
6. Update the extension and retry.

If the platform recently changed its interface, include the platform name and page type in a [bug report](https://github.com/lnmput/chatgpt-to-notion/issues/new?template=bug_report.yml).

## Exported Markdown is incomplete

- Wait for long or streaming responses to finish before exporting.
- Expand collapsed sections in the source conversation.
- Retry the export after refreshing the page.
- Check whether the missing content is inside a canvas, artifact, embed, or other platform-specific view.
- Attach a sanitized example to the bug report. Remove private prompts and personal information first.

Complex tables, math, images, and interactive embeds may render differently across platforms.

## The browser does not remember my export folder

Chrome controls local folder permissions. Reopen extension settings, choose the folder again, and approve write access. Folder access can be lost when the folder is moved, renamed, deleted, or when browser permissions are cleared.

For Obsidian, select an existing folder inside the active vault and confirm that it is writable.

## Notion authorization or sync fails

1. Confirm that you are online and Notion is available.
2. Open extension settings and check the Notion connection.
3. Select **Reauthorize Notion**.
4. Grant access to the correct workspace and parent page.
5. Confirm that the destination page or required databases were not deleted.
6. Retry with one conversation before attempting a batch.

Follow the complete [Notion setup and reauthorization guide](NOTION_SETUP.md).

## Batch ChatGPT export stops

- Keep the ChatGPT tab open and active during the scan.
- Try a smaller batch.
- Avoid reloading the page while processing.
- Retry failed conversations individually.
- Check whether ChatGPT is rate-limiting page requests.
- Update AI Chat Backup before reporting the issue.

## Generated images are missing

ChatGPT-generated images use source URLs that block access from external services, so they cannot be included in Notion sync. While the images are still available in the conversation, open AI Chat Backup and select **Download generated images** to save them locally.

Never attach a private generated image to a public issue unless you are comfortable making it public.

## Collect useful diagnostic information

Include:

- AI Chat Backup version
- Chrome version and operating system
- AI platform and page type
- Export destination: download, local folder, Obsidian, or Notion
- Exact steps to reproduce
- Expected and actual result
- Console error text, if available
- A sanitized screenshot

Do not include authentication tokens, private Notion URLs, cookies, full private conversations, or personal data.

## Still need help?

Read [Support and feedback](../SUPPORT.md) and [open a bug report](https://github.com/lnmput/chatgpt-to-notion/issues/new?template=bug_report.yml).
