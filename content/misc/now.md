---js
const eleventyComputed = {
	title: "/now",
	description: "This page contains random stuff that don't fit into any category, relating to {{ metadata.author.name }} (@{{ metadata.username }})."
};

const date = "2025-09-07";
---
# /now

Date Modified: <time datetime="{{ page.date | htmlDateString }}">{{ page.date | readableDate }}</time>{.monospace-font .smaller-font}

This is a **[/now page](https://nownownow.com/about)**.
This is a public declaration of my priorities.

## Job Search
Finally, I joined a new firm last month. Time just flew by fast. My primary focus now would be getting myself familiar with the different systems and workflows used here. And I quite enjoy being back in the office!

## Music
I'm taking a break from music. I'm going to focus more on performance than recording/production after this break.

## House hunt
Here we go again! House search has always been a pain. I'll have to let go of some weekends for this. I really hope I find a decent house where I can stay for at least a few years.

## Reading / Learning
- [The 24x7 Marriage: Smart Strategies for Good Beginnings](https://www.goodreads.com/book/show/9039520-the-24x7-marriage)
- [White Nights](https://www.goodreads.com/book/show/1772910.White_Nights)
- [React docs](https://react.dev/learn)
- [Clean code by Uncle Bob (planned)](https://www.goodreads.com/book/show/3735293-clean-code)

## Other
- I'll have to configure [nix-darwin](https://github.com/nix-darwin/nix-darwin) properly for full reproducibility and probably do a cleanup of my mac. Things have gotten a little bloated.
- Should polish this website. There are some rough edges.
- I've reached an average typing speed of 60wpm. Bruteforce doesn't seem to improve the speed anymore. I'll have to practice diligently from now on.
- I've stopped listening to songs altogether these days. I'll have to do something to rekindle the fire.
- Checkout freebsd docs
