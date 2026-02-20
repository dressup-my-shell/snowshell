# snowshell

A winter-themed terminal prompt customizer. Adds snowflake decorations and icy blue colors to your shell.

## Install

```bash
npm install -g snowshell
```

## Usage

```bash
# Show the welcome banner
snowshell banner

# Get the PS1 string for your shell
snowshell ps1

# Print install instructions for permanent setup
snowshell install
```

## Add to your shell

Add this line to your `.bashrc` or `.zshrc`:

```bash
eval "$(npx snowshell ps1)"
```

## Preview

```
* ~/projects > 
```

Your prompt gets snowflake prefixes and a cool blue color scheme.

## More themes

Check out my other shell themes:
- [retroshell](https://github.com/dressup-my-shell/retroshell) - Retro synthwave terminal vibes

## License

MIT
