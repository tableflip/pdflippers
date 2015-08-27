project: pdflip cli
# TABLEFLIP headed paper

This module will turn a .md file into a .pdf and wrap the output in TABLEFLIP branded header and footers. Clone this repo and from within the project folder run the following commands

## Usage

```
npm install -g pdflip
```

```sh
Usage: pdflip <path>... [options]

path     you have to pass in the path to your .md file

Options:
   -o, --output   specify the output destination for your .pdf file
   -h, --html     output just the html to stdout (exits process)
```

Output looks something like this

![EXAMPLE](https://cloud.githubusercontent.com/assets/4499581/9530577/a1b0ba62-4cf8-11e5-8f46-cdd772816d09.jpg)

Or you can pipe some html like this

```sh
pdflip readme.md --html > index.html
```

Gives you

```html
<!DOCTYPE html>
<html>
  <head>
    <title>TABLEFLIP</title>
    <link href="file:///Users/bernie/Code/portableflips/theme/style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <div id="pageHeader">
      <p><img src="file:///Users/bernie/Code/portableflips/theme/tableflip-icon.png">&#xA0;&#xA0; pdflip cli</p><p>
    </p></div>
    <article class="markdown-body">
      <h1>TABLEFLIP headed paper</h1>
<p>This module will turn a .md file into a .pdf and wrap the output in TABLEFLIP branded header and footers. Clone this repo and from within the project folder run the following commands</p>
<h2>Usage</h2>
<pre><code>npm <span class="hljs-operator"><span class="hljs-keyword">install</span> -<span class="hljs-keyword">g</span> pdflip
</span></code></pre>
<pre><code class="language-sh">Usage: pdflip &lt;path&gt;... [options]

path     you have to pass <span class="hljs-keyword">in</span> the path to your .md file

Options:
   -o, --output   specify the output destination <span class="hljs-keyword">for</span> your .pdf file
   -h, --html     output just the html to stdout (exits process)
</code></pre>
<p>Output looks something like this</p>
<p><img src="https://cloud.githubusercontent.com/assets/4499581/9530577/a1b0ba62-4cf8-11e5-8f46-cdd772816d09.jpg" alt="EXAMPLE"></p>
<p>Or you can pipe some html like this</p>
<pre><code class="language-sh">pdflip readme.md --html &gt; index.html
</code></pre>

    </article>
    <div id="pageFooter">
      <p>
        <i> pdflip cli&#xA0;&#xA0;{{page}}&#xA0;of&#xA0;{{pages}}</i>
        <small>(&#x256F;&#xB0;&#x25A1;&#xB0;&#xFF09;&#x256F;&#xFE35;TABLEFLIP</small>
      </p>
    </div>
  </body>
</html>
```
