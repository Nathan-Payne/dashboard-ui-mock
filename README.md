# Dashboard UI

Dashboard user interface built with HTML, SCSS and Javascript.

## Comments

- What went well? - The Javascript class implementation handling the data aspect of the split bar charts - this kept the JS code DRY and can be easily expanded if additional functionality is needed. Also CSS Flexbox, from the start it was easy to see how the different components of the interface would sit in a Flex layout.

- Challenge - SVG's are not something I often work with and hence there was a little scratching of the head, using an svg for the circular component is set up to allow javascript to manipulate the border and represent the % calls shown inside the ring. This is not implemented here due to time constraints.

- Learnings/reflection - I was initially overthinking some of the scss structure - this is a small project and can be refactored to smaller components as it grows. At the start of this project my gut feeling was to use a component driven framework like Vue (paired with Tailwind for rapid prototyping); there is not much in the way of reusable base components (buttons/cards etc.) however so for the scope and intent of this challenge Vue was perhaps too much. That said it would likely have decreased development time.

## Usage

### Development Setup

```bash
# install dev dependencies
$ npm install

# hot build .scss files for production
$ npm run watch

```

Sass will need to be installed globally for the watch script to run

## Built With

- HTML / CSS / JavaScript

### Built By

[Nathan Payne ](https://nathanpayne.dev/)
