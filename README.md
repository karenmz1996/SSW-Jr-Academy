# So Shall We Level Up? · Jr AM Academy

A quest-based learning platform for SSW Junior Account Managers. Jr AMs follow a path of quests across five worlds; each approved quest levels up a skill on the way to **AM Ready**. Sr AMs review submissions, track team skills and see the gap map. Drops, the Pomeranian, guides the tour and celebrates wins.

Status: prototype. Progress is kept in memory and resets on reload.

## Structure

```
index.html               App shell (sidebar, header, roots for panels and overlays)
styles.css               All styles (SSW dark design system tokens at the top)
js/app.js                Logic: state, rendering, review flow, tour, Drops
js/visuals.js            Visual previews per quest and the "First look" ad mockups
content/
  skills.json            The 15 skills that make up AM Ready
  gaps.json              Gap map (Sr AM view): observed gaps and the quests that close them
  tour.json              Drops' onboarding tour steps
  worlds/index.json      Order of the worlds
  worlds/onboarding.json Module 1, a placeholder (coming soon)
  worlds/world-N.json    One file per module, with its quests
assets/                  Drops (happy, cheer, think, wizard) and the SSW logo
```

## Editing content

Most changes only touch `content/`. Each quest in a `world-N.json` file looks like this:

```json
{
  "id": "q21",
  "sk": "brief",
  "t": "Batch Briefing AM + PM",
  "type": "doc",
  "xp": 150,
  "d": "One-line summary shown on the path.",
  "why": "Why it matters.",
  "brief": "The mission: what to do.",
  "ex": "What good looks like (anonymized SSW example).",
  "deliver": "Label for the submission field",
  "rubric": ["Self-check item 1", "Self-check item 2"],
  "reward": { "k": "video", "t": "Reward title", "d": "Reward detail" }
}
```

- `id`: unique, never reuse. `sk`: a skill id from `skills.json`.
- `type`: `doc`, `clip`, `quiz`, `text`, `sim` or `live`.
- `reward.k`: `video`, `template`, `tip` or `unlock`.
- A visual preview for a quest lives in `js/visuals.js` under `VIS.<quest id>`. Its label defaults to "What you'll make"; set `visLabel` on the quest to change it (e.g. "This week").
- A module with `"placeholder": true` shows its lessons as "Coming soon", doesn't count toward XP or AM Ready, and doesn't block the next module. Remove the flag when its content is ready.

Content rules: no client names, no real people, no client data. Examples are anonymized.

## Behaviour notes

- Submissions are required: a link quest needs a valid URL, a written quest needs at least a couple of sentences, and every self-check must be ticked before "Shall we?" turns on.
- Sr AM view has **All quests**: preview any quest as a Jr AM sees it, without completing the path or changing anyone's progress.
- Completing every quest shows the Master Wizard graduation. Sr AMs can preview it from All quests.
- `assets/drops-wizard.webp` is a placeholder cut from a low-res preview; replace it with the full-res export from the Drops mascot Figma file.

## Run locally

The app loads content with `fetch`, so open it through a local server:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy

Static site, no build step. On Vercel: import the repo, framework preset **Other**, no build command, output directory `.`.
