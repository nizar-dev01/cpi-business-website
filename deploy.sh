#!/usr/bin/env sh

# abort on errors
set -e

# build
NUXT_APP_BASE_URL=/cpi-public/ npx nuxt build --preset github_pages

# navigate into the build output directory
cd .output/public

# if you are deploying to a custom domain
#echo 'myapp.com' > CNAME

# creating a git repo in the build folder
git init
git add -A
git commit -m 'deploy'

git branch -m main

git push -f git@personal:nizar-dev01/cpi-public.git main:gh-pages

cd ../../

rm -rf .output