#!/bin/bash

function say() {
	echo ""
	echo $1
	echo ""
}

say "Generating the static site"

npx nuxi generate

say "Done generating the static site"

say "Uploading the website to S3"

aws s3 sync .output/public s3://$S3_BUCKET

say "Done ploading the website to S3"

say "Invalidating cloudfront cache"

aws cloudfront create-invalidation --distribution-id $CF_DISTIBUTION --paths "/*"

say "Done invalidating cloudfront cache"