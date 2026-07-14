# Playable builds — the embed contract

Each demo is a **self-contained build** in its own directory here:

```
public/playables/<id>/index.html   ← entry point the gallery iframes
public/playables/<id>/…            ← its assets, self-contained
```

`<id>` must match the filename of the matching entry in
`src/content/playables/<id>.md`. Once the build is in place, flip
`embedReady: true` in that file and the card swaps from the "not embedded yet"
frame to the live iframe.

## The contract (docs/playables.md)

- It must **genuinely run and be tappable in a mobile browser.** A video or a GIF
  of a playable is not a playable. If it isn't tappable, it isn't proof, and the
  buyer knows in two seconds. Never set `embedReady: true` on a capture.
- It must **load fast.** This is a page about ad performance. A slow demo is an
  argument against us.
- It must be **self-contained** — no external asset hosts, no CDN dependency.
- Anything we'd actually ship is built to **real MRAID/network spec**, so the
  compliance claim on the homepage stays honest.

## Size budget

Base64 inlining adds **~33%**. A 3MB asset set packages to ~4MB against a typical
**5MB network cap**. Budget from the start rather than discovering it at
packaging time.

## No raw media in git

The legacy site tracked an 83MB MP4 and autoplayed it. Compressed web derivatives
only — poster frames measured in hundreds of KB, not tens of MB.
