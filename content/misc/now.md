---js
const eleventyComputed = {
	title: "/now",
	description: "This page contains random stuff that don't fit into any category, relating to {{ metadata.author.name }} (@{{ metadata.username }})."
};

const date = "2025-06-24";
---
# /now

Date Modified: <time datetime="{{ page.date | htmlDateString }}">{{ page.date | readableDate }}</time>{.monospace-font .smaller-font}

This is a **[/now page](https://nownownow.com/about)**.
This is a public declaration of my priorities.

## Job Search
I'm primarily looking for a job right now. It's been 3 months since the music course got over. I'm positive that I'll get something soon, but the grind is a little tiring though!

## Vacating the Chennai house
I might do a solo road trip to Chennai to get some stuff back from there soon. The ISP is literally calling me 5+ times per day asking me to renew the service. Also, there is some stuff that I should pick up from the Thoraipakkam house.

## Reading / Learning
- [Java from scratch](https://dev.java/learn/)
- [Spring documentation (planned)](https://spring.io/projects/spring-boot)
- [Clean code by Uncle Bob (planned)](https://www.goodreads.com/book/show/3735293-clean-code)

## Other
- I'll have to configure [nix-darwin](https://github.com/nix-darwin/nix-darwin) properly for full reproducibility and probably do a cleanup of my mac. Things have gotten a little bloated.
- I'll have to apply for a passport.
- Should polish this website. There are some rough edges.
- I've reached an average typing speed of 60wpm. Bruteforce doesn't seem to improve the speed anymore. I'll have to practice diligently from now on.
- I've stopped listening to songs altogether these days. I'll have to do something to rekindle the fire.
