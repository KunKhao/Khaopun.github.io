function showCheat(subject) {

    var title = document.getElementById("title");
    var table = document.getElementById("tableBody");

    table.innerHTML = "";

    // HTML
    if (subject === "html") {
    title.innerText = "Cheat Sheet: HTML";

    table.innerHTML =
        "<tr><th>Code</th><th>Meaning</th></tr>" +
        "<tr><td>&lt;!DOCTYPE html&gt;</td><td>Declares the document as HTML5 and tells the browser to use the latest HTML standard</td></tr>" +
        "<tr><td>&lt;html&gt;</td><td>The root element that wraps all content on the page</td></tr>" +
        "<tr><td>&lt;head&gt;</td><td>Contains metadata such as title, links to CSS, and other settings not shown on the page</td></tr>" +
        "<tr><td>&lt;title&gt;</td><td>Sets the text shown in the browser tab</td></tr>" +
        "<tr><td>&lt;body&gt;</td><td>Contains all visible content like text, images, and links</td></tr>" +

        // text formatting
        "<tr><td>&lt;h1&gt; - &lt;h6&gt;</td><td>Headings used for titles and subtitles, where h1 is largest and h6 is smallest</td></tr>" +
        "<tr><td>&lt;p&gt;</td><td>Defines a paragraph of text</td></tr>" +
        "<tr><td>&lt;strong&gt; / &lt;b&gt;</td><td>Makes text bold (strong also adds importance)</td></tr>" +
        "<tr><td>&lt;em&gt; / &lt;i&gt;</td><td>Makes text italic (em also adds emphasis)</td></tr>" +
        "<tr><td>&lt;br&gt;</td><td>Inserts a line break without starting a new paragraph</td></tr>" +
        "<tr><td>&lt;hr&gt;</td><td>Creates a horizontal line to separate content</td></tr>" +

        // links & media
        "<tr><td>&lt;a&gt;</td><td>Creates a hyperlink to another page or website</td></tr>" +
        "<tr><td>&lt;img&gt;</td><td>Displays an image using the src attribute and should include alt text</td></tr>" +

        // lists
        "<tr><td>&lt;ul&gt;</td><td>Creates an unordered (bulleted) list</td></tr>" +
        "<tr><td>&lt;ol&gt;</td><td>Creates an ordered (numbered) list</td></tr>" +
        "<tr><td>&lt;li&gt;</td><td>Defines each item inside a list</td></tr>" +

        // table
        "<tr><td>&lt;table&gt;</td><td>Main container used to create a table</td></tr>" +
        "<tr><td>&lt;tr&gt;</td><td>Defines a row inside a table</td></tr>" +
        "<tr><td>&lt;th&gt;</td><td>Defines a header cell, usually bold and centered</td></tr>" +
        "<tr><td>&lt;td&gt;</td><td>Defines a normal data cell inside a table</td></tr>" +

        // layout
        "<tr><td>&lt;header&gt;</td><td>Represents the top section of a webpage or section</td></tr>" +
        "<tr><td>&lt;nav&gt;</td><td>Contains navigation links like menus</td></tr>" +
        "<tr><td>&lt;main&gt;</td><td>Represents the main content of the page</td></tr>" +
        "<tr><td>&lt;section&gt;</td><td>Groups related content into sections</td></tr>" +
        "<tr><td>&lt;footer&gt;</td><td>Represents the bottom section of a page</td></tr>";;
    }

    // CSS
    if (subject === "css") {
        title.innerText = "Cheat Sheet: CSS";

        table.innerHTML =
        "<tr><th>Code</th><th>Meaning</th></tr>" +
        "<tr><td>selector { property: value; }</td><td>Basic CSS rule structure: selector targets HTML, declaration block styles it</td></tr>" +

        // Selectors
        "<tr><td>element</td><td>Selects all HTML elements of that type (e.g. p)</td></tr>" +
        "<tr><td>.class</td><td>Selects elements with a class name</td></tr>" +
        "<tr><td>#id</td><td>Selects a single unique element by ID</td></tr>" +
        "<tr><td>div p</td><td>Selects p elements inside div (nested elements)</td></tr>" +

        // Box Model
        "<tr><td>margin</td><td>Space outside the element (outer spacing)</td></tr>" +
        "<tr><td>border</td><td>Line around the element</td></tr>" +
        "<tr><td>padding</td><td>Space inside element between content and border</td></tr>" +
        "<tr><td>width / height</td><td>Controls size of element</td></tr>" +
        "<tr><td>box-sizing: border-box</td><td>Makes width include padding and border</td></tr>" +

        // Text & Typography
        "<tr><td>color</td><td>Sets text color</td></tr>" +
        "<tr><td>font-family</td><td>Changes font style</td></tr>" +
        "<tr><td>font-size</td><td>Changes text size</td></tr>" +
        "<tr><td>font-weight</td><td>Makes text bold or light</td></tr>" +
        "<tr><td>text-align</td><td>Aligns text (left, center, right)</td></tr>" +
        "<tr><td>text-decoration</td><td>Adds underline or removes it</td></tr>" +

        // Background
        "<tr><td>background-color</td><td>Sets background color</td></tr>" +
        "<tr><td>background-image</td><td>Sets background image using url()</td></tr>" +
        "<tr><td>opacity</td><td>Controls transparency (0 to 1)</td></tr>";
    }

    // JavaScript
    if (subject === "js") {
        title.innerText = "Cheat Sheet: JavaScript";

        table.innerHTML =
        "<tr><th>Code</th><th>Meaning</th></tr>" +
        "<tr><td>console.log()</td><td>Prints output to the browser console</td></tr>" +
        "<tr><td>alert()</td><td>Shows a popup message in the browser</td></tr>" +
        "<tr><td>//</td><td>Single-line comment</td></tr>" +
        "<tr><td>/* */</td><td>Multi-line comment</td></tr>" +

        "<tr><td>const</td><td>Variable that cannot be changed</td></tr>" +
        "<tr><td>let</td><td>Variable that can be changed</td></tr>" +
        "<tr><td>var</td><td>Old variable type (avoid using)</td></tr>" +

        // Data Types
        "<tr><td>String</td><td>Text data like 'Hello'</td></tr>" +
        "<tr><td>Number</td><td>Numeric values like 10 or 3.14</td></tr>" +
        "<tr><td>Boolean</td><td>true or false values</td></tr>" +
        "<tr><td>null</td><td>Empty value (intentional)</td></tr>" +
        "<tr><td>undefined</td><td>Variable declared but not assigned</td></tr>" +

        // Control Flow
        "<tr><td>if / else</td><td>Runs code based on condition</td></tr>" +
        "<tr><td>ternary ? :</td><td>Short form of if/else condition</td></tr>" +

        // Functions
        "<tr><td>function name() {}</td><td>Standard function declaration</td></tr>" +
        "<tr><td>() => {}</td><td>Arrow function (modern JS)</td></tr>" +

        // Arrays & Objects
        "<tr><td>array.push()</td><td>Adds item to end of array</td></tr>" +
        "<tr><td>array.pop()</td><td>Removes last item in array</td></tr>" +
        "<tr><td>{ key: value }</td><td>Object structure</td></tr>" +

        // DOM
        "<tr><td>document.getElementById()</td><td>Selects element by ID</td></tr>" +
        "<tr><td>document.querySelector()</td><td>Selects first matching element</td></tr>" +
        "<tr><td>textContent</td><td>Changes text inside element</td></tr>" +
        "<tr><td>style.color</td><td>Changes element color</td></tr>" +
        "<tr><td>addEventListener()</td><td>Runs code when user interacts</td></tr>";
    }

    // C++
    if (subject === "cpp") {
        title.innerText = "Cheat Sheet: C++";

        table.innerHTML =
        "<tr><th>Code</th><th>Meaning</th></tr>" +
        "<tr><td>int x;</td><td>Integer</td></tr>" +
        "<tr><td>cout &lt;&lt;</td><td>Output</td></tr>" +
        "<tr><td>cin &gt;&gt;</td><td>Input</td></tr>";
    }
}