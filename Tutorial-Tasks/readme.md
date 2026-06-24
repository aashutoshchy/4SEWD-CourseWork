# Week 1: Basics of HTML and CSS

## Document Structure Tags

- `<!DOCTYPE html>` Declares the document type to the browser
- `<html>` Root element that wraps all page content
- `<head>` Container for metadata, styles and scripts
- `<title>` Defines text shown in the the browser tab
- `<meta>` Specifies character sets, viewports, keywords for SEO etc.
- `<link>` Attaches external resources like stylesheets
- `<style>` Injects internal CSS styles directly
- `<body>` Container for all the visible elements in the webpage

## Starting Template for HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
  </head>
  <body>
    Hello World
  </body>
</html>
```

## Text Fromatting Tags

- `<h1>` to `<h6>` Defines the section headings
- `<p>` Formats text into paragraph
- `<br>` Injects a single line break i.e. new line
- `<hr>` Creates a separating horizontal line
- `<strong>` Bolds the enclosed text
- `<span>` An inline container to mark up a part of text

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <h2>Hello, World!</h2>
    <h3>Hello, World!</h3>
    <h4>Hello, World!</h4>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    This is a <span>span</span> <span>span element is inline</span> element.
    <br />
    This new line is created by a br element.
    <br />
    <hr />
    The hr element created the horizontal line above.
    <br />
    I want to emphasize <strong>this</strong> so i wrapped it with strong.
  </body>
</html>
```

## Layouts and Semantics

- `<div>` Defines a content division block
- `<header>` Hold the site branding and navigation
- `<nav>` Container for website navigation links
- `<main>` Wraps the unique content of the page
- `<section>` Use to divide the webpage into thematic sections
- `<footer>` Displays copyright, contact, or footer links.

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
  </head>
  <body>
    <header>
      <h1>This is a header element</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
    <main>
      <section>
        <h2>This is a section element</h2>
        <p>This is a paragraph inside the section.</p>
        <div>
          <p>This is a div element inside the section.</p>
        </div>
      </section>
    </main>
    <footer>
      <p>This is a footer element.</p>
      <small>&copy; 2024 Hello World Inc.</small>
    </footer>
  </body>
</html>
```

## Links and Media

- `<a>` Generates an active hyperlink to external paths
- `<img>` Displays an image asset within the flow.

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
  </head>
  <body>
    <img
      src="https://www.w3schools.com/w3images/lights.jpg"
      alt="Lights"
      style="width:100%;height:auto;"
    />
    <br />
    <a href="https://www.w3schools.com" target="_blank">Visit W3Schools</a>
  </body>
</html>
```

## Lists

- `<ul>` Initializes a bulleted unordered list
- `<ol>` Initializes a numbered ordered list
- `<li>` Defines a list item

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
  </head>
  <body>
    <h1>List</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <ol>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ol>
  </body>
</html>
```

## Tables

- `<table>` Tag for defining tables
- `<thead>` Groups the header cells of the table
- `<tbody>` Groups the primary table cells
- `<tr>` Declares a table row
- `<th>` Declares a cell for table header
- `<td>` Declares a cell for table body

### Table Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
  </head>
  <body>
    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Luca</td>
        <td>Rossi</td>
        <td>24</td>
      </tr>
      <tr>
        <td>Sophie</td>
        <td>Dubois</td>
        <td>32</td>
      </tr>
      <tr>
        <td>Sam</td>
        <td>Watson</td>
        <td>41</td>
      </tr>
    </table>
  </body>
</html>
```

### Result

<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
  </head>
  <body>
    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Luca</td>
        <td>Rossi</td>
        <td>24</td>
      </tr>
      <tr>
        <td>Sophie</td>
        <td>Dubois</td>
        <td>32</td>
      </tr>
      <tr>
        <td>Sam</td>
        <td>Watson</td>
        <td>41</td>
      </tr>
    </table>
  </body>
</html>

## HTML Attributes

### Global Attributes

- `class` Groups multiple elements together, JS or CSS can target all the elements at once
- `id` Provides a unique identifier for a single element
- `style` Applies inline CSS directly to the element
- `title` Adds extra information when user hover over the element
- `hidden` Hides the element from the UI

### Media & Link Attributes

- `href` Defines the URL for an anchor tag (`<a>`) to create a clickable hyperlink.
- `target` Controls how a link opens, such as using \_blank to load the destination in a new browser tab.
- `src` Specifies the path to an external resource, most commonly used to pull in an image file for an `<img>` tag.
- `alt` Provides fallback text describing an image if the image fails to load.
- `width` / `height`: Sets the display dimensions of an image or video directly in pixels

## HTML Forms

- `<form>` Sets up the structural zone for user interactive input
- `<input>` Creates fields like text boxes, checkmarks, and radio bubbles
- `<textarea>` Creates a larger container for multi-line written remarks
- `<label>` Pairs readable names next to distinct field elements
- `<select>` Creates a drop-down menu selection box
- `<option>` Add selection choice within a select menu
- `<button>` Creates a clickable button mechanism
- `<fieldset>` Group related elements in a form.
- `<legend>` Defines the caption of a `<fieldset>`.

## HTML Form Attributes

- `action` specifies the server-side URL destination where the collected form data should be processed upon submission.
- `method` Defines the HTTP protocol method used to send data. Set to POST for secure, payload-based transfers or GET to append data directly into the URL query string
- `enctype` Determines the media type encoding of the data, required to be set to multipart/form-data whenever users are uploading files via `<input type="file">`
- `autocomplete` Instructs the browser whether to remember and auto-fill previous user input histories
- `novalidate`: A boolean flag that prevents native browser validation

## HTML `input` attributes

- **`name`**: It defines the key for the data submitted to the server. If `name="email"` then the server gets the value of the input field at the **_email_** key
- **`value`**: Sets the default value for the input
- **`type`**: Changes the an input field; includes variations like `text`, `password`, `email`, `submit`, `checkbox`, or `radio`.
- **`id`**: Provides a unique identifier for CSS, JS, and linking labels directly to fields via the label's `for` attribute.
- **`placeholder`**: Displays a temporary text hint in the field
- **`disabled`**: A boolean value that makes an input completely unclickable and untypable and prevents the inputs data from being submitted
- **`readonly`**: Makes the input unchangable but allows submission to server

## HTML Form Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>To Do List</title>
  </head>
  <body>
    <header>
      <h1>User Registration</h1>
    </header>
    <main>
      <form id="registrationForm" action="/index.html" method="GET">
        <fieldset>
          <legend>Personal Details</legend>
          <div>
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required />
          </div>
          <div>
            <label for="gender">Gender:</label>
            <select id="gender" name="gender" required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label for="profile-picture">Profile Picture:</label>
            <input
              type="file"
              id="profile-picture"
              name="profile-picture"
              accept="image/*"
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Account Details</legend>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <label for="role">Role:</label>
            <input type="radio" id="admin" name="role" value="admin" required />
            <label for="admin">Admin</label>
            <input type="radio" id="user" name="role" value="user" required />
            <label for="user">User</label>
          </div>
        </fieldset>
        <div>
          <input type="checkbox" id="terms" name="terms" required />
          <label for="terms">I agree to the terms and conditions</label>
        </div>
        <button type="submit">Register</button>
      </form>
    </main>
    <footer>
      <p>&copy; 2024 My Todo List. All rights reserved.</p>
    </footer>
  </body>
</html>
```

## Important CSS properties

| Category                     | Property           | Description                                                                                                                                               | Example                                                          |
| :--------------------------- | :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| **Box Model & Layout**       | `width`            | Sets the width of an element. Can use pixels (`px`), percentages (`%`), viewport width (`vw`), or `auto`.                                                 | `width: 300px;`<br>`width: 50vw;`                                |
|                              | `height`           | Sets the height of an element. Can use pixels (`px`), percentages (`%`), viewport height (`vh`), or `auto`.                                               | `height: 150px;`<br>`height: 100vh;`                             |
|                              | `padding`          | Generates space _inside_ an element's border, around its content.                                                                                         | `padding: 20px;`<br>`padding: 10px 15px;`                        |
|                              | `margin`           | Generates space _outside_ an element's border, creating distance between it and other elements. Use `margin: 0 auto;` to center block layout elements.    | `margin: 15px;`<br>`margin: 0 auto;`                             |
|                              | `border`           | Shorthand property to set an element's border width, style (e.g., `solid`, `dashed`), and color.                                                          | `border: 2px solid #333;`<br>`border: 1px dashed red;`           |
|                              | `border-radius`    | Rounds the corners of an element's outer border edge. Use `50%` to create perfect circles.                                                                | `border-radius: 8px;`<br>`border-radius: 50%;`                   |
|                              | `box-sizing`       | Defines how total width and height are calculated. Setting this to `border-box` includes padding and border in the dimensions, making sizing predictable. | `box-sizing: border-box;`                                        |
|                              | `display`          | Specifies the render box type of an element. It controls if an element behaves like a block (takes full width) or inline (flows with text).               | `display: block;`<br>`display: inline-block;`                    |
| **Typography & Text**        | `font-family`      | Specifies a prioritized list of fonts to apply to text. Always include a generic fallback font like `sans-serif` or `serif`.                              | `font-family: 'Arial', sans-serif;`                              |
|                              | `font-size`        | Sets the size of the text. Can use absolute units (`px`) or relative units (`em`, `rem`).                                                                 | `font-size: 16px;`<br>`font-size: 1.2rem;`                       |
|                              | `font-weight`      | Sets how thick or thin characters in text should be displayed (e.g., bold or regular text).                                                               | `font-weight: bold;`<br>`font-weight: 400;`                      |
|                              | `text-align`       | Specifies the horizontal alignment of text inside its containing element.                                                                                 | `text-align: center;`<br>`text-align: left;`                     |
|                              | `text-decoration`  | Adds decorative lines to text. Most commonly used to remove underlines from hyperlinks (`none`).                                                          | `text-decoration: underline;`<br>`text-decoration: none;`        |
|                              | `text-transform`   | Controls the capitalization of text, forcing it into uppercase, lowercase, or capitalized formats.                                                        | `text-transform: uppercase;`<br>`text-transform: capitalize;`    |
|                              | `line-height`      | Sets the vertical space between lines of text (improves readability).                                                                                     | `line-height: 1.5;`<br>`line-height: 24px;`                      |
|                              | `letter-spacing`   | Adjusts the horizontal spacing between individual characters in a word.                                                                                   | `letter-spacing: 2px;`<br>`letter-spacing: -0.5px;`              |
| **Colors & Backgrounds**     | `color`            | Sets the color of the text content. It accepts color names, hex codes, RGB, or HSL values.                                                                | `color: #3498db;`<br>`color: rgb(50, 50, 50);`                   |
|                              | `background-color` | Sets the background color of an element.                                                                                                                  | `background-color: #f4f4f4;`<br>`background-color: transparent;` |
|                              | `background-image` | Sets one or more background images for an element.                                                                                                        | `background-image: url('image.jpg');`                            |
|                              | `background-size`  | Specifies the size of background images. Using `cover` scales the image to completely fill its container without stretching.                              | `background-size: cover;`<br>`background-size: contain;`         |
|                              | `opacity`          | Sets the transparency level for an entire element (including its contents). Ranges from `0.0` (invisible) to `1.0` (fully visible).                       | `opacity: 0.5;`<br>`opacity: 0.8;`                               |
| **Visibility & Interaction** | `overflow`         | Controls how content is handled if it breaks out of the boundaries of its parent container box (`visible`, `hidden`, `scroll`, or `auto`).                | `overflow: hidden;`<br>`overflow: auto;`                         |
|                              | `cursor`           | Changes the type of mouse pointer cursor shown when someone hovers over an element. Great for making buttons look clickable.                              | `cursor: pointer;`<br>`cursor: default;`                         |
