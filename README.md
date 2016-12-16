# hexo-deployer-shell

Shell deployer plugin for [Hexo](https://hexo.io/).

This deployer is simple a alias to your own deploy shell scripts. You should use your own way to deploy your hexo project.

## Installation

```bash
npm install hexo-deployer-shell --save
```

## Options
You can configure this plugin in `_config.yml`.

```yaml
deploy:
    type: shell
    command: <your deploy command>
```

You can specify options of command. For example:
```yaml
deploy:
    type: shell
    command: <your deploy command>
    options:
        timeout: 2000
```
`hexo-deployer-shell` use `child_process.exec` internal, the options arguments will be pass to `child_process.exec` directly. See more info on [Node.js official website](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback).

That's all. Enjoy!

## License

MIT
