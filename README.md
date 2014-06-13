# Bugzilla Commando

(Based heavily on a tool originally created by [Kate Hudson](http://github.com/k88hudson/bz).)

A Node based CLI for using Bugzilla.

## Installation

1. Install [Node.js](http://nodejs.org) if you don't already have it.
2. `npm install -g bz-commando`
3. Add a `.bzrc` to your home directory. This is a config file used by the tool. You can copy and edit the provided `.bzrc.sample` to start.

### Help

Run `bz --help` or `bz COMMAND --help` for a specific sub-command's docs.

## Command Reference

### Open the ticket corresponding to your current branch name:

`bz open`

### Open a ticket by ID number:

`bz open {Ticket ID number}`

**Example:** `bz open 12345` opens ticket number 12345.

### Create a new ticket:

`bz new`

**Example:** `bz new -m -t "Hack The Planet!"` creates a new ticket with title "*Hack The Planet!*" and assigns it to you.

### Open your dashboard:

`bz dash`
