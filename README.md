![OWND Project Logo](https://raw.githubusercontent.com/OWND-Project/.github/main/media/ownd-project-logo.png)

# OWND Project

The OWND Project is a non-profit project that aims to realize more trustworthy communication through the social implementation of individual-centered digital identities.

This project was created as part of the "Trusted Web" use case demonstration project promoted by the Digital Market Competition Headquarters, Cabinet Secretariat.

We will develop a white-label digital identity wallet that complies with international standards and a federated messaging application that supports E2E encryption as open source software, and discuss governance to ensure trust.

[OWND Project Briefing Material](https://github.com/OWND-Project/.github/blob/main/profile/ownd-project.pdf)

[Learn more about Trusted Web](https://trustedweb.go.jp/)

## Project List

### Digital Identity Wallet
- [OWND Wallet Android]()
- [OWND Wallet iOS]()

### Issuance of Verifiable Credentials
- [OWND Project VCI]()

### Messaging Services
- [OWND Messenger Server]()
- [OWND Messenger Client]()
- [OWND Messenger React SDK]()
    - It is a product of this repository.


# About the OWND Messenger Client

This repository is developed based on element-web. Please also check the README on the element-web side for module structure and development guidelines, if necessary.

https://github.com/element-hq/element-web

If the development of the OWND Project reaches prosperity or in view of the situation of feature divergence from the upstream repository, we intend to define our own guidelines .

# Setting up a dev environment

Much of the functionality in OWND Messenger client is actually in the `OWND Messenger React sdk` and
`matrix-js-sdk` modules.

First clone and build `matrix-js-sdk`:

```bash
git clone https://github.com/matrix-org/matrix-js-sdk.git
git checkout 0c7342cb20c51d049997597b5b96de1744bd7b66 # Workaround: We have not yet confirmed support for codes newer than this version.
pushd matrix-js-sdk
yarn link
yarn install
popd
```

Then similarly with `OWND Messenger React sdk`:

```bash
git clone https://github.com/datasign-inc/matrix-react-sdk.git
pushd matrix-react-sdk
yarn link
yarn link matrix-js-sdk
yarn install
popd
```

Clone the repo and switch to directory:

```bash
git https://github.com/datasign-inc/element-web
cd element-web
```

Configure the app by copying `config.sample.json` to `config.json` and
modifying it. See the [configuration docs](docs/config.md) for details.

Finally, build and start itself:

```bash
yarn link matrix-js-sdk
yarn link matrix-react-sdk
yarn install
yarn start
```

Wait a few seconds for the initial build to finish; you should see something like:

```
[element-js] <s> [webpack.Progress] 100%
[element-js]
[element-js] ℹ ｢wdm｣:    1840 modules
[element-js] ℹ ｢wdm｣: Compiled successfully.
```

Remember, the command will not terminate since it runs the web server
and rebuilds source files when they change. This development server also
disables caching, so do NOT use it in production.

Open <http://127.0.0.1:8080/> in your browser to see your newly built Element.

## Running the tests

There are a number of application-level tests in the `tests` directory; these
are designed to run with Jest and JSDOM. To run them

```
yarn test
```

# Translations

To add a new translation, head to the [translating doc](docs/translating.md).

For a developer guide, see the [translating dev doc](docs/translating-dev.md).

