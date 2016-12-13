const exec = require('child_process').exec;

export default function shell (args) {
    if (!args.command) {
        let helpText = [
            'Must configure the deploy params in _config.yml.',
            '',
            'Example:',
            '   deploy:',
            '       type: shell',
            '       command: ./deploy.sh'
        ].join('\n');
        console.log(`${helpText}\n`);
        return;
    }

    return new Promise((resolve,reject) => {
        exec(args.command, (error, stdout, stderr) => {
            if (error) {
                return reject(error);
            }
            resolve({
                stdout: stdout,
                stderr: stderr
            });
        });
    });
};
