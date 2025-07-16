---js
const eleventyComputed = {
	title: "/uses",
	description: "This page contains pictures relevant to {{ metadata.author.name }} (@{{ metadata.username }})."
};

const date = "2025-07-15";
---
# Uses

Date Modified: <time datetime="{{ page.date | htmlDateString }}">{{ page.date | readableDate }}</time>{.monospace-font .smaller-font}

> "The things you own end up owning you."
&ndash; Tyler Durden{.right-align .small-font}

This is a **[/uses page](https://uses.tech)**.
Here, I'll list all the things I own and use.

## Computers

- **[Apple MacBook Air M1](https://support.apple.com/en-in/111883)**

[Year Purchased: 2022]{.indent .smaller-font .monospace-font}

[Works like magic. I'll probably get another one after this one reaches its end of life. I mostly use it for coding and general productivity.]{.indent}

- **[Dell G7 15 7588](https://www.dell.com/support/product-details/en-in/product/g-series-15-7588-laptop/overview)**

[Year Purchased: 2018]{.indent .smaller-font .monospace-font}

[This laptop has an identity crisis right now. I really don't know what to do with it. It used to be my music workstation but I'm not making music like before. I tried playing video games but that too feels like I'm wasting time. I think games are objectively worse these days compared to 2010s.]{.indent}

- **[Apple iPhone 13](https://support.apple.com/en-in/111872)**

[Year Purchased: 2022]{.indent .smaller-font .monospace-font}

[This is my only mobile phone. It's sturdy and reliable. But the battery is shit! My usecase for a smartphone is minimal these days. I mostly use it for calls, email and occasional youtube / social media.]{.indent}

## Accessories

- **[Sony Alpha ZV-E10](https://www.sony.co.in/interchangeable-lens-cameras/products/zv-e10)**
- **[Beyerdynamic DT 770 PRO](https://global.beyerdynamic.com/p/dt-770-pro)** (almost dead)
- **[Beyerdynamic FOX](https://global.beyerdynamic.com/p/fox)**
- **[Apple EarPods](https://www.apple.com/in/shop/product/MWU53ZM/A/earpods-35mm-headphone-plug)**
- **[Apple AirPods (2nd Generation)](https://support.apple.com/en-in/111856)** (dead)
- **[JBL Pulse 3](https://www.jbl.com/bluetooth-speakers/JBL+Pulse+3.html)**
- **[Mi Power Bank 3i (20000mAh)](https://www.mi.com/in/item/3203800026)**

## Software

### Operating Systems

- **[macOS](https://www.apple.com/in/macos/)**
- **[NixOS](https://nixos.org)**
- **[Windows 11](https://www.microsoft.com/en-us/windows)**

### Package Management / Configuration

- **[Nix](https://nixos.org)**
- **[nix-darwin](https://nix-darwin.org)**
- **[Homebrew](https://github.com/zhaofengli/nix-homebrew)**
- **[Home Manager](https://github.com/nix-community/home-manager)**

### Browsers

- **[Safari](https://www.apple.com/in/safari/)**
- **[LibreWolf](https://librewolf.net/)**
- **[Chromium](https://www.chromium.org/)**

### IDEs

- **[Visual Studio Code](https://code.visualstudio.com/)**
- **[IntelliJ IDEA](https://www.jetbrains.com/idea/)**
- **[Neovim](https://neovim.io/)**

### Other

- **[Apple Mail](https://support.apple.com/en-in/mail)**
- **[Obsidian](https://obsidian.md/)**
- **[Excalidraw](https://github.com/excalidraw/excalidraw)**
- **[kitty](https://sw.kovidgoyal.net/kitty/)**
- **[GIMP](https://www.gimp.org/)**
- **[OBS](https://obsproject.com/)**
- **[Discord](https://discord.com/)**
- **[Anki](https://apps.ankiweb.net/)**
