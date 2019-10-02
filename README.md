<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>

## With Docker + Makefile

### Requirements

- Docker (version >= 17.x)
- Git (version >= 2.x)

Once we have all the requirements to work

### Development

Install dependencies

```
make install
```

Start the development server:

```
make develop
```

Create new post

```
make new.post name=my-name-post
```

This will create a new document in:

```
blog/2019-09-08-my-name-post/index.md
```

### Build

Compile your application and make it ready for deployment:

```
make build
```

### Serve with production

Serve the production build of your site for testing:

```
make serve
```

## With node in the system

- Node (version >= 10.x)

Once we have all the requirements to work

### Development

Install dependencies

```
yarn install
```

Start the development server

```
yarn develop
```

Create new post

```
yarn new:post -- my-name-post
```

This will create a new document in:

```
blog/2019-09-08-my-name-post/index.md
```

### Build

Compile your application and make it ready for deployment:

```
yarn build
```

### Serve with production

Serve the production build of your site for testing:

```
yarn serve
```
