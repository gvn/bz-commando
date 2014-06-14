# Bugzilla Commando

A Node based CLI for using Bugzilla.

(Based heavily on a tool originally created by [Kate Hudson](http://github.com/k88hudson/bz).)

## Installation

1. Install [Node.js](http://nodejs.org) if you don't already have it. :sunglasses:
2. Run `npm install -g bz-commando`. *You may have to preface this with `sudo` depending on your permissions.*
3. Add a `.bzrc` to your home directory. This is your config file that will be used by the tool. You can copy and edit the provided `.bzrc.sample` to start. The sample is geared toward working on the [Webmaker](http://webmaker.org) product and associated components, but it can be altered to whatever you like. The format is [CSON](https://github.com/bevry/cson).

## Help

Run `bz --help` or `bz COMMAND --help` for a specific sub-command's docs.

## Command Reference

### Open the ticket corresponding to your current branch name:

`bz open`

### Open a ticket by ID number:

`bz open [Ticket ID]`

**Example:** `bz open 12345` opens ticket number 12345.

### Create a new ticket:

`bz new`

**Example:** `bz new -t "Hack The Planet!"` creates a new ticket with title "*Hack The Planet!*".

**Example:** `bz new -m -t "Kitchen Sink" -c wmorg -w [april20]` creates a new ticket, assigns it to you, sets title to "*Kitchen Sink*", sets component to "*webmaker.org*" (or whatever you have defined as the value for the `wmorg` key), and sets the whiteboard to "*[april20]*".

### Open your dashboard:

`bz dash`
