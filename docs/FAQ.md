# AI Chat Backup frequently asked questions

## What is AI Chat Backup?

AI Chat Backup is a Chrome extension that exports conversations from ChatGPT and other AI platforms. You can download Markdown, save files to an Obsidian vault, or sync selected conversations to Notion.

## How do I export ChatGPT to Notion?

Install the extension, connect your Notion workspace, open a ChatGPT conversation, and select the Notion sync action. See [Connect ChatGPT to Notion](NOTION_SETUP.md).

## Do I need Notion to use the extension?

No. Markdown downloads and local folder exports work without a Notion account.

## Can I save ChatGPT conversations to Obsidian?

Yes. Choose a folder inside your Obsidian vault as the Markdown export folder. Obsidian will detect the exported files as notes.

## Can I save AI-generated images?

Yes. In a ChatGPT or Gemini conversation, open AI Chat Backup and select **Download generated images** to save generated images locally. ChatGPT and Gemini image sync to Notion is supported when the source image can be read and uploaded.

## Which AI platforms are supported?

ChatGPT, Claude, Gemini, DeepSeek, Kimi, Google AI Studio, Perplexity, Poe, Grok, and Venice are supported. Platform changes can temporarily affect extraction.

## Can I export multiple ChatGPT conversations?

The extension includes batch support for compatible ChatGPT history pages. Large batches may take longer, so begin with a smaller selection and keep the tab open.

## What content is preserved?

The extension attempts to preserve conversation titles, prompts, responses, headings, lists, links, code blocks, tables, and other useful structure. Results vary when a platform uses proprietary canvases, artifacts, embeds, or temporary media URLs.

## Does AI Chat Backup read my entire browsing history?

No. It operates on supported AI chat pages and processes page content when you use an export or sync feature. Review the [privacy policy](https://chrome-extensions-page.vercel.app/ai-chat-backup/privacy) for the complete data-handling explanation.

## Where are local exports stored?

Downloaded files use Chrome's normal download behavior. If you choose an export folder, files are written to that user-selected folder after Chrome grants permission.

## Why does Chrome ask for folder permission again?

Chrome manages file-system permissions and may require renewed approval after a restart, permission reset, folder move, or folder rename.

## Why can I not find my Notion page?

Notion integrations can only access pages explicitly shared during authorization. Reauthorize the extension and choose the correct parent page.

## Does uninstalling delete my exports?

No. Uninstalling does not delete existing Markdown files, Obsidian notes, or Notion pages.

## Is this repository the extension source code?

This repository is the public documentation and support hub. Install the released extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/chatgpt-ai-chat-backup-ma/oedpeddiacomhhfieanenlmdghkolgng).

## How do I request support?

Check [Troubleshooting](TROUBLESHOOTING.md), search [existing GitHub issues](https://github.com/lnmput/chatgpt-to-notion/issues), and then submit a structured bug report if the problem remains.
