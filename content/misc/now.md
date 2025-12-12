---js
const eleventyComputed = {
	title: "/now",
	description: "This page contains random stuff that don't fit into any category, relating to {{ metadata.author.name }} (@{{ metadata.username }})."
};

const date = "2025-12-12";
---
# /now

Date Modified: <time datetime="{{ page.date | htmlDateString }}">{{ page.date | readableDate }}</time>{.monospace-font .smaller-font}

This is a **[/now page](https://nownownow.com/about)**.
This is a public declaration of my priorities.

A lot of (good) things happened in the last couple of months and I think it'll take at least a few years to wrap my head around all the stuff that's happening. It felt like I was hit by an external force like a tsunami that came swooshing around and I have no idea where it's gonna take me - but I like the rush of it!

## Day Job
The honeymoon period is over and I'm kinda feeling the grunt of it. This time, I keep reminding myself that having a job is 10000x better than not having one.

## Music
I'm so out of touch! I probably have to start from scratch again (whenever that is).

## Reading / Learning
- [White Nights](https://www.goodreads.com/book/show/1772910.White_Nights)
- [React docs](https://react.dev/learn)

## Reminders
- Should polish this website. There are some rough edges.
- I've reached an average typing speed of 60wpm. Bruteforce doesn't seem to improve the speed anymore. I'll have to practice diligently from now on.
- Checkout freebsd docs
