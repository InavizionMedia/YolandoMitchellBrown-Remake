# How to update this website (plain-English guide)

This site is one page made of sections: **Home, About, Resume, Portfolio, Services, Contact.** Everything you can change lives in two places:

- **`index.html`** — all the words on the page
- **`assets/`** — all the pictures

There is nothing to install, no "build," no code tools. You open the files, change them, and the site updates.

---

## How to change words on the page

1. Open `index.html` in any text editor (Notepad, TextEdit, VS Code — anything).
2. Find the section you want. Every section is labeled with a line like this:

   ```
   <!-- SECTION: about -->
   ```

3. Find the sentence you want to change and type over it. Keep everything between the `<` and `>` exactly as it is — only change the words outside them.

   Example: change this —
   ```
   <p>Heyyyy! Welcome to my page.</p>
   ```
   to this —
   ```
   <p>Welcome! I'm so glad you're here.</p>
   ```

4. Save the file. Done.

---

## How to swap a photo

1. Put your new picture file in the **`assets/`** folder. Use a clear name like `yolando-portrait.jpg`.
2. In `index.html`, find the old picture line. For the About portrait it looks like this:

   ```
   <img src="assets/portrait.svg" alt="Portrait placeholder — Yolando's photo incoming" ...>
   ```

3. Change `assets/portrait.svg` to your new file name (for example `assets/yolando-portrait.jpg`) and update the description after `alt=` to describe the photo.

   ```
   <img src="assets/yolando-portrait.jpg" alt="Yolando smiling in the studio" ...>
   ```

4. Save. The new photo appears.

The same works for every portfolio card — each one has an `<img src="assets/...">` line you can point at a real photo.

---

## How to add a portfolio item

1. Find the portfolio section in `index.html` (`<!-- SECTION: portfolio -->`).
2. Copy one whole card block — from `<article class="pf-card"` to the matching `</article>` — and paste it right after it.
3. Change the `data-cat` word to match one of the filters: `videos`, `photos`, `press`, or `graphics`.
4. Change the picture (`<img src="...">`) and the title (`<h3>...</h3>`) to your new item.
5. If it's a video: keep the round red play button. Change `data-video-title="..."` to the video's title. The video itself gets linked in the lightbox later.
6. Remove the yellow "sample" tag line once it's your real content.

---

## How to add a resume entry

Find `<!-- SECTION: resume -->`, copy one whole `<li> ... </li>` block inside the timeline, paste it as a new entry, and change the year, job title, and description. The timeline line and dots adjust automatically.

---

## The yellow "sample" tags

Anything still wearing a yellow **sample** tag is placeholder content waiting for the real thing. When you replace it with real content, delete the tag line (it looks like `<span class="mock-tag">...</span>`) and the matching `<!-- MOCK: ... -->` comment line.

Green **real** tags mean "this is already real" — leave those alone.

---

## Three rules that keep the site healthy

1. **Never delete the `<` `>` parts.** Only change the words between them.
2. **Keep picture files in `assets/`.** Never paste a photo directly into the page.
3. **One section at a time.** Save and check the page after each change — if something looks off, the last change is the one to fix.

---

*Questions? Send the change you want to Jon and it can be made for you — or try the steps above. They're designed to be safe.*
