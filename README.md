# ChatGPT to Notion, Markdown & Obsidian | AI Chat Backup

[Install AI Chat Backup from the Chrome Web Store](https://chromewebstore.google.com/detail/chatgpt-ai-chat-backup-ma/oedpeddiacomhhfieanenlmdghkolgng)

AI Chat Backup is a Chrome extension for saving AI conversations outside the chat platform. Export ChatGPT conversations to Markdown, store them in an Obsidian vault, or sync selected chats to Notion. The extension also works with Claude, Gemini, Google AI Studio, Perplexity, Poe, and Grok.

This repository is the public documentation and support hub for the extension. It contains installation instructions, user guides, troubleshooting steps, frequently asked questions, and feedback channels.

## Install the Chrome extension

1. Open [AI Chat Backup in the Chrome Web Store](https://chromewebstore.google.com/detail/chatgpt-ai-chat-backup-ma/oedpeddiacomhhfieanenlmdghkolgng).
2. Select **Add to Chrome** and confirm the requested permissions.
3. Open a supported AI chat page.
4. Use the extension popup to export the current conversation or connect Notion.

Notion is optional. You can export conversations as local Markdown files without creating an account or connecting a workspace.

[Read the complete installation guide](docs/INSTALLATION.md)

## What AI Chat Backup does

- **ChatGPT to Notion:** save useful conversations in a searchable Notion workspace.
- **Markdown export:** download clean, portable conversation files.
- **Obsidian support:** save Markdown directly to a selected local folder or Obsidian vault.
- **ChatGPT history backup:** batch-process supported ChatGPT conversations when the batch feature is available.
- **Multiple AI platforms:** use one export workflow across popular AI chat services.
- **Structured content:** preserve headings, lists, links, code blocks, and tables where the source platform exposes them.
- **Local-first option:** use Markdown export without connecting Notion.

## Supported AI chat platforms

| Platform | Markdown export | Notion sync |
| --- | :---: | :---: |
| ChatGPT | Yes | Yes |
| Claude | Yes | Yes |
| Gemini | Yes | Yes |
| Google AI Studio | Yes | Yes |
| Perplexity | Yes | Yes |
| Poe | Yes | Yes |
| Grok | Yes | Yes |

Platform interfaces change regularly. If an export button disappears or content is missing, see [Troubleshooting](docs/TROUBLESHOOTING.md) or [report a bug](https://github.com/lnmput/chatgpt-to-notion/issues/new?template=bug_report.yml).

## Quick start

### Export a ChatGPT conversation to Markdown

1. Open the ChatGPT conversation you want to keep.
2. Select the AI Chat Backup extension icon.
3. Select **Export conversation**.
4. Save the generated Markdown file or choose a persistent export folder in the extension settings.

### Save ChatGPT to Notion

1. Open the extension and select **Connect to Notion**.
2. Approve the Notion authorization request and choose the page the extension may access.
3. Return to the ChatGPT conversation.
4. Select the Notion sync action.

The extension only syncs content when you choose an export or sync action. See the [Notion setup guide](docs/NOTION_SETUP.md) for authorization and reauthorization steps.

### Save AI chats to Obsidian

1. Open the extension settings.
2. Find **Markdown Export Folder**.
3. Choose a folder inside your Obsidian vault.
4. Approve write access when Chrome requests it.

Future Markdown exports can then be written directly to that folder.

## Documentation

- [Installation and browser setup](docs/INSTALLATION.md)
- [User guide](docs/USER_GUIDE.md)
- [Connect and reauthorize Notion](docs/NOTION_SETUP.md)
- [Troubleshooting export and sync problems](docs/TROUBLESHOOTING.md)
- [Frequently asked questions](docs/FAQ.md)
- [Support and feedback](SUPPORT.md)
- [Security policy](SECURITY.md)

## Privacy and data handling

Local Markdown exports are created in your browser. If you connect Notion, the extension uses your authorization to send conversations you explicitly choose to sync to your Notion workspace. Feedback and screenshots are only submitted when you choose to send them.

Read the complete [AI Chat Backup privacy policy](https://chrome-extensions-page.vercel.app/ai-chat-backup/privacy).

## Help, feedback, and feature requests

Before opening a new issue, search [existing issues](https://github.com/lnmput/chatgpt-to-notion/issues) and review the [troubleshooting guide](docs/TROUBLESHOOTING.md).

- [Report an export or sync bug](https://github.com/lnmput/chatgpt-to-notion/issues/new?template=bug_report.yml)
- [Request a feature or new AI platform](https://github.com/lnmput/chatgpt-to-notion/issues/new?template=feature_request.yml)
- [Read support guidelines](SUPPORT.md)

Do not post private conversations, Notion tokens, authentication data, or personal information in a public GitHub issue.

## License

The documentation in this repository is available under the [MIT License](LICENSE).
