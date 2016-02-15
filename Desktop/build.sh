gulp clean
gulp build --type production
cp -r public/* dist/
rm dist.zip
zip -r dist.zip dist/
