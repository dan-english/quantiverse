---
sidebar: 
  hide: true
---

# Changelog everywhere

## What made you smile?

* Easy to add Changelog to sidebars.

## What did you find confusing?

The main idea while working on the task was to make a scalable changelog. The user being on different pages should have the possibiliity to see the changelog, but once clicking on it the sidebar should always be the one from the home page. We thought over the idea of adding changelog sidebar entries to each sidebar, but in the future this could lead to more complicated handling of all the files. So, we decided not to use this idea.

- We were unable to make changelog visible only within main sidebar
- We tried first with composed sidebars and there is no way to provide `disconnect: true` to specific pages when referenced to partial sidebars
- Even when we duplicated the changelog page on every other sidebar with provided `disconnect: true` on all the sidebars beside the home one it still were connected to random sidebar
- Specifying frontmatter pointing to home sidebar on the changelog page also has no effect on the sidebar connected to changelog page