# AI Chat Backup user guide

Use AI Chat Backup to export individual AI conversations, save Markdown files to a local folder, or sync selected conversations to Notion.

## Export the current conversation

1. Open a supported AI conversation.
2. Wait for the page to finish loading.
3. Open AI Chat Backup.
4. Select **Export conversation**.
5. Choose where to save the Markdown file.

The exported file may include the conversation title, prompts, responses, headings, lists, links, code blocks, and tables. Exact formatting depends on the HTML supplied by each AI platform.

## Sync the current conversation to Notion

1. [Connect Notion](NOTION_SETUP.md).
2. Open the conversation you want to save.
3. Open AI Chat Backup.
4. Select the Notion sync action.
5. Wait for the success message before closing the page.

If the extension reports missing databases or expired authorization, follow the [reauthorization steps](NOTION_SETUP.md#reauthorize-notion).

## Export ChatGPT history in batches

The batch feature scans supported ChatGPT conversation history and lets you process multiple conversations. Keep the ChatGPT tab open while the scan or export is running. Large histories may take longer and can be affected by network speed or ChatGPT interface changes.

For reliability:

- Start with a smaller selection.
- Do not close or reload the ChatGPT tab during processing.
- Retry failed conversations individually.
- Update the extension before reporting a batch export problem.

## Save Markdown directly to Obsidian

AI Chat Backup can write Markdown files into a folder you select:

1. Open extension settings.
2. Choose a folder inside your Obsidian vault.
3. Export a conversation.
4. Open Obsidian and confirm that the new Markdown file appears.

Obsidian detects standard Markdown files automatically. You can move or rename exported notes after they are created.

## Configure Markdown exports

The extension settings include Markdown preferences such as an export folder and optional YAML front matter. YAML fields can help with Obsidian properties, search, or static-site workflows.

Review generated files before using automated publishing or knowledge-base pipelines, especially when a conversation contains complex tables, mathematical notation, images, or platform-specific embeds.

## Supported platforms

- ChatGPT
- Claude
- Gemini
- Google AI Studio
- Perplexity
- Poe
- Grok

Open a conversation page rather than a platform home page whenever possible. Some export actions are unavailable until a specific conversation is loaded.

## Need help?

Read [Troubleshooting](TROUBLESHOOTING.md), then follow the instructions in [Support and feedback](../SUPPORT.md) if the problem continues.
