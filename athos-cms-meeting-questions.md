# Athos CMS Meeting — Questions & Answers

Meeting date: 2026-09-14
Attendees: Jake Donziger, Meg Court, (Diego / Alexka)
Context: Deciding between Outstatic and TinaCMS for the athosed.com Next.js site. Prior quotes: $6,000 fixed fee for a DB-backed CMS, revised range of $2,800–$4,500 for a git-based CMS (Outstatic/Tina).

---

## Content scope

**What is the final list of content types that need to become editable (news, clients/logos, team, services, anything else)?**

Edit everyithing

**What fields does each content type need (text, image, date, order/priority, tags, SEO/meta description)?**


**Is there any content that should stay hardcoded (e.g. legal text or sections that rarely change)?**


---

## Platform choice

**Do you lean toward Outstatic or TinaCMS, or do you want us to decide?** (Tina has inline visual editing; Outstatic is simpler/more minimal.)


**Who will be editing content? Someone technical who can tolerate GitHub OAuth login, or do you need "normal" email/password login with no technical friction?** (This determines self-hosted free vs. Outstatic Pro at $9.99/user/month.)

2 self hosted free.

**How many people need editing access, and do they need different roles (editor vs. publisher)?**


---

## Editorial workflow

**Do you need a "draft" state before publishing, or should every change publish immediately?**

Draft state.

**Do you want to preview changes before they go live?**

No aqui.

**What happens if two people edit the same content at once (Git conflicts)? Is this a real risk given how many editors you expect?**


---

## Media / images

**Where should images be hosted (in the Git repo vs. an external bucket)? This affects size limits and cost.**


**Do you have an existing image/logo library to migrate, or does everything get uploaded fresh?**


---

## Migration

**Do we migrate the current hardcoded content (`clients.ts`, `news.ts`, team) into the new format, or does your team handle that once the system is ready?**


---

## Budget & maintenance

**Do you confirm the $2,800–$4,500 range as the fixed implementation fee, or do you want us to land on an exact number based on the scope we lock today?**


**Does the $1,875/year support plan still apply, or is it no longer needed since the CMS reduces the need for technical support on basic edits?**


**Is $0/month recurring cost (self-hosted) acceptable, or do you prefer paying for Outstatic Pro for simpler login?**


---

## Timeline

**Is there a deadline (launch, event, etc.) driving the timeline?**


**Do you want everything delivered at once, or phased (first one content type, validate, then the rest)?**

