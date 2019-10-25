<p align="center">
  <img alt="Agile" src="https://raw.githubusercontent.com/BrunnerLivio/agile-ipsum/master/src/images/agile.png" width="60" />
</p>
<h1 align="center">
  <a href="https://agile-ipsum.netlify.com/">Agile Ipsum</a>
</h1>
<p align="center" style="font-weight: bold;">
Generate <i>agile</i> Lorem Ipsum placeholder texts
</p>
<p align="center">
  <img alt="Agile" width="80%" style="margin-top: 50px" src="https://raw.githubusercontent.com/BrunnerLivio/agile-ipsum/master/screenshot.png" />
</p>

## About

**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

In order to adjust the *Lorem Ipsum* to todays standart, the **Agile Ipsum** was born. Instead of
latin-looking words, the Agile Ipsum generates placeholder texts with **agile buzzwords**.

## What Does this Repository Contain?

This repository contains a website, built with a static site generator called [GatsbyJS](https://www.gatsbyjs.org/). The agile words are being stored in the [`words.txt`](https://github.com/BrunnerLivio/agile-ipsum/blob/master/words.txt) file, which are being read while building the website.

In addition to this, it also contains:

- [Code of Conduct](CODE_OF_CONDUCT.md) - our Code of Conduct
- [Contributing Guidelines](CONTRIBUTING.md) - a guide on how to contribute to the Agile Ipsum repository
- [License.md](LICENSE.md) - the standard MIT license under which the Agile Ipsum website is published

We recommend familiarizing yourself with the above sections, particularly if you are looking to make a contribution.

## Running the website locally

**Prerequisite**

- [Git](https://git-scm.com/)
- [Node.js >=10](https://nodejs.org/en/) 

**Clone**

In order to preview the website locally, make sure you clone the repository on your machine using Git.

```bash
git clone https://github.com/BrunnerLivio/agile-ipsum.git
```

**Installing dependencies**

To install all the dependencies needed by this repository, change the directory using your shelll
into the newly cloned repository and run the install command by npm.

```bash
cd agile-ipsum
npm install
```

**Starting the website during development**

The development mode comes with live-reload functionality out of the box. In order to start the website, after you have installed the dependencies, simply run the following command.

```bash
npm start
```

**Building the website for producton**

The production bundle will get automatically minified and bundled. In order to build the project, simply run the following command.

```bash
npm run build
```