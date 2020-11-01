const semanticRelease = require('semantic-release');
const path = require('path');

async function main() {
    const result = await semanticRelease(
        {
            // Core options
            branches: [
                '+([0-9])?(.{+([0-9]),x}).x',
                'master',
                'next',
                'next-major',
                { name: 'beta', prerelease: true },
                { name: 'alpha', prerelease: true },
            ],
            repositoryUrl: 'https://github.com/andrewmtam/test',
            // Plugin options
            githubUrl: 'https://my-ghe.com',
            githubApiPathPrefix: '/api-prefix',
        },
        {
            // Run semantic-release from `/path/to/git/repo/root` without having to change local process `cwd` with `process.chdir()`
            cwd: path.resolve(__dirname, '../'),
            // Pass the variable `MY_ENV_VAR` to semantic-release without having to modify the local `process.env`
            env: { ...process.env, MY_ENV_VAR: 'MY_ENV_VAR_VALUE' },
            // Store stdout and stderr to use later instead of writing to `process.stdout` and `process.stderr`
        },
    );
}
main();
