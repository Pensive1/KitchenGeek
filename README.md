# Kitchen Geek

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

Recalculating recipe servings can be time-consuming. A recipe may offer a large serving but you want less. And vice versa.

Kitchen Geek helps people discover recipes based on available ingredients, resize servings, and tracks needed ingredients.

## Features

#### Search and discover recipes

- Search for recipes by name, ingredient or through custom filters.
- Disvover recipes through editorial suggestions.
- Bookmark your favourite recipes in your custom cookbook.

#### Adjust recipes to your liking

- Eaily recalculate serving sizes with a built-in portion calculator.
- Convert ingredients from imperial (US) to Metric (UK).
- View ingredients and instructions at a glance _(available on tablet and desktop only)_

## Installation

### Server

Server download and instructions are found [here](https://github.com/Pensive1/KitchenGeek-Server).
Without the server, **_this application will not work properly_**.

### Client

1. Clone or download this project _(Click the green code dropdown above)_.

```bash
  git clone https://github.com/Pensive1/KitchenGeek.git
```

2. Open your terminal and install NodeJS.

```bash
  npm install npm@latest -g
```

3. In your terminal or code editor, browse into the folder.

4. Install NPM to download the necessary packages

```bash
  npm install
```

> **Note:** This project requires API details in a `.env` file. Send me an [email](mailto:racquaye89@gmail.com?subject=Kitchen%20Geek%20env%20info) for details, fill in the quotes then rename `.env.example` to `.env`.

5. Once complete, type `npm start` to start the app.

6. Enjoy 🙂

## Tech Stack

**Client:** React, JSX, Sass, Javascript

**Server:** Node, Express

**Packages**

- Axios
- dotenv
- Framer Motion

**Tools**

- Visual Studio Code
- Postman (Testing API endpoints)
- Figma (UI Design)
- Asana (for planning)

## Roadmap

- 🧑🏽‍🍳 Scrape recipes from third party sites

- ✨ Animate portion updates in the ingredient list

- ⚡️ Interactive recipe instructions that dim/hide used recipes

- 🛒 Recipe shopping list

- 🥕 Recalculate a recipe portion based on a key ingredi

---

## Lessons Learned

This project was a great opportunity for me to stretch, hone and develop new skills.

### Learnings

- Discovered Reacts `{children}` prop works similarly to Sass' `@content` [content block](https://sass-lang.com/documentation/at-rules/mixin#content-blocks) feature.

- Spent 4 hours creating search parameter function. I later discovered React Router DOM has a built-in `useSearchParams` function that does the same thing.

- Explored using variable fonts _(thanks to [Kevin Powell](https://www.youtube.com/@KevinPowell/featured))_. This saved time defining multiple fonts and helped reduce file size.

- I learnt how to create custom react modals (via [Fireship](https://www.youtube.com/watch?v=SuqU904ZHA4)).

- Creating functional tabbed content component (via [The Web School](https://www.youtube.com/watch?v=WkREeDy2WQ4))

### Challenges

I wasn't sure how to route the search results page to accept parameters after the main search query. After reading the React Router DOM documentation, I learned to use the asterisk (`*`) after `results/` to accept all routes after it.

## Acknowledgements

- [Spoonacular API](https://spoonacular.com/food-api) (created by [David urbansky](https://github.com/ddsky)) – _Without this API, you wouldn't discover all the recipes you know and love._

- [Outfit font](https://fonts.google.com/specimen/Outfit)

- [MingCute Icon Library](https://www.mingcute.com/) – Also available in [Figma](https://www.figma.com/community/file/1021803365995387735).

- [Funny Doodle Pack](https://ui8.net/magika-studio-ae8379/products/funny-doodle-pack) – _Used in error states_
- My educators [Sammy Abukmeil](https://github.com/SammyAbukmeil) and [Joe Di Trolio](https://github.com/Scribbio) for introducing me to awesome web tech, techniques, best practices, their guidance and fostering a great environment to learn and ask questions over at [BrainStation (London)](https://brainstation.io/london/software-engineering-bootcamp).

- My bootcamp teaching assistant [Adam Benhrima](https://github.com/AdamBenhrima) for showing me different ways to solve code problems, guidance, constructive feedback and inspiring me with his awesome JS [one line solutions](https://betterprogramming.pub/chaining-patterns-in-javascript-df05e3030ee7) during morning challenges.
