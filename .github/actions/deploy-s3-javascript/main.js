const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
    // 1) Get some input values
    const bucket = core.getInput('bucket', { required: true })
    const bucketRegion = core.getInput('bucket-region', { required: true })
    const distFolder = core.getInput('dist-folder', { required: true })

    core.notice(`bucket: ${bucket}`)
    // core.notice(bucketRegion)
    // core.notice(distFolder)
    const s3Uri = `s3://${bucket}`
    exec.exec(`echo "aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}"`)

    core.notice('Hello from my custome JavaScript Action!')

}

run();