[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/andrawicaksono/fliter-cli">
  </a>

  <h3 align="center">Filter CLI</h3>
  
  <a href="https://github.com/andrawicaksono/fliter-cli"><strong>Explore the docs »</strong></a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

A command-line interface (CLI) application designed to sift through transaction data within a specified time range. The transaction information is segmented into distinct files and organized according to timestamps.

### Built With

[![NodeJS][Node.js]][Node-url]

<!-- GETTING STARTED -->
## Getting Started

This guide will help you get started with the project quickly.

### Prerequisites

Before you begin, ensure you have latest `NPM` installed on your system:

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Follow these steps to install Filter CLI:

1. Clone the repo
   ```sh
   git clone https://github.com/andrawicaksono/filter-cli.git
   ```
2. Install CLI application
   ```sh
   npm install . -g
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

```plaintext
Usage: filter -d <directory> -s <start> -e <end>

Options:
  --help        Show help                                           [boolean]
  --version     Show version number                                 [boolean]
  -d, --directory   Required. Path to the directory containing CSV files.
                   Example: filter -d /path/to/csv-files
                   [string] [required]

  -s, --start   Required. Inclusive starting time to fetch CSV data.
                   Format: RFC3339 (e.g., 2023-01-01T00:00:00Z)
                   Example: filter -s 2023-01-01T00:00:00Z
                   [string] [required]

  -e, --end     Required. Exclusive ending time to fetch CSV data.
                   Format: RFC3339 (e.g., 2023-01-02T00:00:00Z)
                   Example: filter -e 2023-01-02T00:00:00Z
                   [string] [required]
```

### Generator

Use the generator binary/executable file to produce the sample transaction data mentioned above. Simply execute the generator without providing any arguments.

### CSV Data Format

The CSV data contains four columns and uses a comma-separated delimiter (,)

| Column        | Type                  |
| ------------- | --------------------- |
| TrxNo         | Integer               |
| TrxDate       | Datetime (RFC3339)    |
| Trx Detail    | String                |
| Amount        | Integer               |

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Andra Wicaksono - [@andraswicaksono](https://instagram.com/andraswicaksono) - andrawicaksono14@gmail.com

Project Link: [https://github.com/andrawicaksono/filter-cli](https://github.com/andrawicaksono/filter-cli)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/andrawicaksono/fliter-cli.svg?style=for-the-badge
[contributors-url]: https://github.com/andrawicaksono/fliter-cli/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/andrawicaksono/fliter-cli.svg?style=for-the-badge
[forks-url]: https://github.com/andrawicaksono/fliter-cli/network/members
[stars-shield]: https://img.shields.io/github/stars/andrawicaksono/fliter-cli.svg?style=for-the-badge
[stars-url]: https://github.com/andrawicaksono/fliter-cli/stargazers
[issues-shield]: https://img.shields.io/github/issues/andrawicaksono/fliter-cli.svg?style=for-the-badge
[issues-url]: https://github.com/andrawicaksono/fliter-cli/issues
[license-shield]: https://img.shields.io/github/license/andrawicaksono/fliter-cli.svg?style=for-the-badge
[license-url]: https://github.com/andrawicaksono/fliter-cli/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/andra-wicaksono-26b1bb192
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/