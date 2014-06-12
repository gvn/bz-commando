# Bugzilla CLI

(Based heavily on a tool originally created by [Kate Hudson](http://github.com/k88hudson/bz).)

### Reference

`bz --help` or `bz COMMAND --help` for a specific sub-command.

## Commands

### Open the ticket corresponding to your current branch name:

`bz open`

### Open a ticket by ID number:

`bz open {Ticket ID number}`

**Example:** `bz open 12345` opens ticket number 12345.

### Create a new ticket:

`bz new`

**Example:** `bz new -m -t "Hack The Planet!"` creates a new ticket with title "Hack The Planet!" and assigns it to you.

### Open your dashboard:

`bz dash`
