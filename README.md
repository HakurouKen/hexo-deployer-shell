# hexo-deploy-shell

Shell deployer plugin for [Hexo](https://hexo.io/).

This deployer is simple a alias to your own deploy shell scripts. You should use your own way to deploy your hexo project.

## Installation

```bash
npm install hexo-deploy-shell --save
```

## Options
You can configure this plugin in `_config.yml`.

```yaml
deploy:
    type: shell
    command: <your deploy command>
```

That's all.

## License

MIT
