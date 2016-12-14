import { exec } from 'child_process';

function getOptions(opt) {
    if (!opt) return {};
    let options = {};
    options.cwd = opt.cwd || null;
    options.env = opt.env || null;
    options.encoding = opt.encoding || null;
    opt.shell && (options.shell = opt.shell);
    options.timeout = +opt.timeout || 0;
    options.maxBuffer = +opt.maxBuffer || 200 *1024;
    options.killSignal = opt.killSignal || 'SIGTERM';
    +opt.uid && (options.uid = +opt.uid);
    +opt.gid && (options.gid = +opt.gid);
    return options;
}

export default function shell (args) {
    if (!args.command) {
        let helpText = [
            'Must configure the deploy params in _config.yml.',
            '',
            'Example:',
            '   deploy:',
            '       type: shell',
            '       command: ./deploy.sh',
            '       options:',
            '           timeout: 2000'
        ].join('\n');
        console.log(`${helpText}\n`);
        return;
    }

    return new Promise((resolve,reject) => {
        exec(args.command, getOptions(args.options), (error, stdout, stderr) => {
            if (error) {
                return reject(error);
            }
            resolve({
                stdout: stdout,
                stderr: stderr
            });
        });
    });
}
