#!/usr/bin/env sh

# abort on unuexpected errors
set -e

# Remove the .output directory if it exists
rm -rf .output || true

# Generate static site
npx nuxi generate

# Navigate into the build output directory
cd .output/public

# Remove all previous files from the server
for file in $(ls -a)
do
	echo "Deleting $file on the server..."
	ssh cpi rm -rf /home/developer/public_html/$file || true
	echo "Done deleting $file on the server."
	echo ""
done

# Push the new build to the server
scp -r . cpi:/home/developer/public_html/

# Change the permission on the server to make the newly published files accessible
ssh cpi chmod -R a+rx /home/developer/public_html

# Go back to root of the project
cd ../../

# Remove the newly built .output directory
rm -rf .output

echo "Valhalla baby!!! You're up there!"

#######################################################################################
########## The script anticiptates the presence of 'cpi' in the ssh config   ##########
########## Any error related to permissions on the server needs to be taken  ##########
########## care of, prior to running the script. The script exits on errors. ##########
#######################################################################################