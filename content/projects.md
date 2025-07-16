---js
const eleventyNavigation = {
	key: "Projects",
	order: 2
};
const eleventyComputed = {
	title: "{{ eleventyNavigation.key }}",
	description: "This page contains the different (independent) project information of {{ metadata.author.name }} (@{{ metadata.username }})."
};
---
# Projects

These are some independent projects I've built.

## Education

- [Emulation of an Undergraduate CS* Curriculum (EUCC)](http://sharavananpa.dev/eucc/)

## Software

- [Mock Interview Generator](http://sharavananpa.dev/mock-interview-generator/)
- [Anonymous Chat](https://sharavananpa.dev/anonymous-chat/)
- [Gmeet Automation](https://github.com/sharavananpa/gmeet-automation/)
- [The Memory Game](https://sharavananpa.dev/the-memory-game/)
- [Dumb Calculator (Angular)](https://sharavananpa.dev/dumb-calculator-angular/)
