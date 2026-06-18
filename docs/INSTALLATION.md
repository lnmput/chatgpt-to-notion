# Install AI Chat Backup for Chrome

AI Chat Backup is a Chrome extension that exports ChatGPT and other AI conversations to Notion, Markdown, and local folders such as Obsidian vaults.

## Requirements

- A current version of Google Chrome on a desktop or laptop
- Access to at least one supported AI chat platform
- A Notion account only if you want to use Notion sync

## Install from the Chrome Web Store

1. Visit [AI Chat Backup in the Chrome Web Store](https://chromewebstore.google.com/detail/chatgpt-ai-chat-backup-ma/oedpeddiacomhhfieanenlmdghkolgng).
2. Select **Add to Chrome**.
3. Review the permission request and select **Add extension**.
4. Open Chrome's Extensions menu and optionally pin AI Chat Backup to the toolbar.
5. Open a supported AI conversation and select the extension icon.

The official Chrome Web Store listing is the recommended installation method. This documentation repository does not contain a packaged extension build.

## Choose an export setup

### Local Markdown only

No Notion connection is required. Open a supported conversation and select **Export conversation** to download a Markdown file.

### Obsidian or another local folder

1. Open AI Chat Backup settings.
2. Open the **Export** section.
3. Under **Markdown Export Folder**, select **Choose Folder**.
4. Choose an existing folder, such as a folder inside an Obsidian vault.
5. Approve write access when Chrome asks.

Chrome may ask you to confirm folder access again after a browser restart or permission change.

### Notion sync

1. Open AI Chat Backup.
2. Select **Connect to Notion**.
3. Sign in to Notion if requested.
4. Choose the page the extension may access.
5. Complete authorization and return to the AI chat page.

See [Connect ChatGPT to Notion](NOTION_SETUP.md) for more detail.

## Why the extension requests permissions

AI Chat Backup needs access to supported AI chat pages so it can read the conversation you choose to export. Chrome storage keeps extension settings and connection state. Tab and scripting permissions help the extension identify the active supported page and prepare the export.

The extension does not need a Notion connection for local Markdown exports.

## Update the extension

Chrome normally installs updates automatically. To check manually:

1. Open `chrome://extensions`.
2. Turn on **Developer mode**.
3. Select **Update**.
4. Confirm that AI Chat Backup shows the latest available version.

## Uninstall

1. Open `chrome://extensions`.
2. Find AI Chat Backup.
3. Select **Remove**.

Removing the extension does not delete Markdown files already saved on your computer or pages already created in Notion. You can separately revoke the integration from Notion's connected apps settings.

## Next steps

- [Export and sync conversations](USER_GUIDE.md)
- [Troubleshoot installation problems](TROUBLESHOOTING.md)
- [Read frequently asked questions](FAQ.md)
