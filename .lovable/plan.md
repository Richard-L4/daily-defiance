# Hide the "Edit with Lovable" Badge

## Goal
Remove the "Edit with Lovable" badge from the published app.

## Current State
- The badge is currently visible (`hide_badge: false`).

## Plan
1. Call `publish_settings--set_badge_visibility` with `hide_badge: true`.
2. Verify the badge is hidden on the next publish/preview.

## Note
Hiding the badge requires a Pro plan or higher. If the workspace is not on Pro, the call will fail and we can discuss alternatives.
