# Connect ChatGPT and AI conversations to Notion

AI Chat Backup can save selected ChatGPT and other AI conversations to a Notion workspace. Notion sync is optional; local Markdown export works without it.

## Connect Notion

1. Open the AI Chat Backup extension.
2. Select **Connect to Notion**.
3. Sign in to the Notion account that owns the destination workspace.
4. Review the requested access.
5. Choose a parent page that the integration may access.
6. Complete authorization.
7. Return to the extension and confirm that Notion shows as connected.

Notion only exposes pages that you explicitly share with an integration. If you cannot find the expected page or database, reconnect and grant access to the correct parent page.

## Save a conversation to Notion

1. Open a supported AI conversation.
2. Open AI Chat Backup.
3. Confirm that the header shows a Notion connection.
4. Select the Notion sync action.
5. Wait for the completion message.
6. Open the authorized Notion page or chats database to review the saved conversation.

## Reauthorize Notion

Reauthorization may be necessary when:

- The selected page or database was deleted.
- The integration lost access to the parent page.
- You changed Notion workspaces.
- The authorization token expired or was revoked.
- The extension reports that required Notion databases are missing.

To reauthorize:

1. Open AI Chat Backup settings.
2. Open the **Notion** section.
3. Select **Reauthorize Notion**.
4. Choose the correct workspace and parent page.
5. Complete authorization and retry the sync.

## Disconnect or revoke access

You can disconnect from the extension settings. You can also revoke the integration from Notion's connected apps or workspace settings.

Disconnecting does not delete pages that were already created in Notion.

## Notion sync privacy

The extension sends conversation content to Notion only when you choose to sync it. Do not sync sensitive conversations to a shared workspace unless everyone with access is authorized to read them.

See the full [privacy policy](https://chrome-extensions-page.vercel.app/ai-chat-backup/privacy).

## Troubleshooting

If authorization succeeds but syncing fails, see [Notion troubleshooting](TROUBLESHOOTING.md#notion-authorization-or-sync-fails).
