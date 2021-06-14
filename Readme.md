# Monorepo Dream

This repo is containing the client and server code for my own little sideproject - a game.

This one should allow players to experience a world full of detail and stories. And at the same time allow me to learn new things while coding - therefore prepare yourself for major bugs.

# Tech

Not everything is settled in, so there might be drastic changes in the future - or some things might be abandond.
For the moment I'm going with things I already have some expierience in, mixed with things I never used.

In conclusion:

- Backend will be written in Rust (never used before, but interessted in learning) using gRPC (never used before, but some experience with the concept)
  - Database for storing the state of the game will be a mix of different ones, depending on the usecase
  - Chat will be stored in some form of graph database (nope, no experience there so far)
  - NoSQL Database will be used for items players and everything else (exp with MongoDB)
- Frontend will be written in React (some exp), ThreeJS (no exp) wrapped in electron (some exp) to eliminate browser variations.
  - This will be subject to a major revamp ... but for now: it's good enough, since I'm no artist, and rendering blocks is all we need at first.

# How to setup

In the future clients will be build and servers might be hosted by me, but for now: clone the monorepo, read the readme for client and server code and run those on your own.

# Contributing

Allways open for ideas, fixes, improvements and critic as far as a respectful tone is kept.
