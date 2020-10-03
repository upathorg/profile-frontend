# SharpStudy Frontend Application

This repository is for the SharpStudy web app.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

* Clone this repo
* `cd` into the source dir

### Prerequisites

Grab a copy of the `.env` file from any of the developers working on the project. It should have a structure like below:
```
LOGIN_URL_ENDPOINT="............"
SIGN_IN_URL_ENDPOINT="..........."
```

[Install yarn](https://classic.yarnpkg.com/en/docs/install) globally on your machine
```
curl -o- -L https://yarnpkg.com/install.sh | bash
```

### Installing

With the `.env` file at the root directory of your system, and with yarn installed:

- Install dependencies using `yarn`
```
yarn
```

- Once the dependencies are installed, then ensure that you have the right API link uncommented out in the env file. Look out for `REACT_APP_GRAPHQL_ENDPOINT`, and use `"http://localhost:4000"` when you have backend server running locally. Once ready, then start the frontend server

```
yarn start
```

You can view this app running app on http://localhost:3000

## Running the tests

Test are yet to be configured.

### Detail testing methods

Explain what these tests do and why

```
Give an example
```

## Environments

Provide a detailed list of current environments, how they can accessed and any other relevant information.

### DEV
- Yet to be configured

### UAT
-  Yet to be configured

### MASTER
-  Yet to be configured

## Deployment

Deployments are automatically started when Pull Requests are merged into each of the environment branches (develop, uat, prod) and logs can be accessed in the [CI/CD Pipelines](https://bitbucket.org/sovtech/new-leaders-portal-ts/addon/pipelines/home)

## Built With

Details of the tech stack that has been used.

- [React](https://reactjs.org/) - The client framework used, and has been setup using [create-react-app](https://github.com/facebook/create-react-app)
- [JavaScript] - app is configured to use JavaScript                                                                                                 |

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the SovTech standard for commit messages and the accepted pull request process.

## Versioning

We use [SemVer](http://semver.org/) for versioning. Versioning occurs automatically in the pipelines using [Semantic Release](https://github.com/semantic-release/semantic-release). For the versions available, see the tags on this repository.

## Changelog

A running changelog can be found here: [CHANGELOG.md](CHANGELOG.md)

## Authors

- **Harrison Ekpobimi** <harrisonekpobimi@gmail.com>
- **Mike Qureshi** <yet to be added>

## Licenses

License checker summary `npx license-checker --summary`
```
├─ MIT: 1626
├─ ISC: 169
├─ Apache-2.0: 46
├─ BSD-3-Clause: 43
├─ BSD-2-Clause: 42
├─ CC0-1.0: 21
├─ BSD*: 9
├─ MIT*: 7
├─ Artistic-2.0: 4
├─ (MIT OR Apache-2.0): 3
├─ Unlicense: 3
├─ (WTFPL OR MIT): 3
├─ WTFPL: 2
├─ CC-BY-4.0: 2
├─ BSD: 2
├─ (BSD-2-Clause OR MIT OR Apache-2.0): 2
├─ CC-BY-3.0: 2
├─ (Apache-2.0 OR MPL-1.1): 1
├─ AFLv2.1,BSD: 1
├─ Public Domain: 1
├─ MPL-2.0: 1
├─ UNLICENSED: 1
├─ (BSD-3-Clause OR GPL-2.0): 1
├─ (MIT AND Zlib): 1
├─ Apache 2.0: 1
├─ (MIT AND BSD-3-Clause): 1
├─ (BSD-2-Clause OR MIT): 1
└─ (GPL-2.0 OR MIT): 1
```

