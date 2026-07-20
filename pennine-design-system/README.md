# Scroll Animations

A lightweight intersection observer animation system for adding subtle fade-in effects to projects.

## Installation

Copy both files into your project:
animate-in.css
animate-in.js

---

## 1. Add the CSS globally

Import `animate-in.css` into your main/global stylesheet.

Example:

```css
@import "./design-system/utils/animate-in.css";
```

Make sure this loads globally so any component can use the animations.

## 2. Initialise the script

Import and run the animation script in your main layout or app entry point.

Example (Astro):

```
<script type="module">
  import initScrollAnimations from "./design-system/utils/animate-in.js";

  initScrollAnimations();
</script>
```

## 3. Add animations to elements

Add the data-animate attribute:

```
<h2 data-animate="fade-up">
  Your heading
</h2>


```

Use data-delay for staggered animations.

```
<div data-animate="fade-up">
  First item
</div>

<div data-animate="fade-up" data-delay="150">
  Second item
</div>

<div data-animate="fade-up" data-delay="300">
  Third item
</div>
```

By default, animations run once.

To replay animations every time an element enters the viewport:

```
<div data-animate="fade-up" data-once="false">
```
