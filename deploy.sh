rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@gitee.com:inviernoQAQ/wheel-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://invierno123.github.io/wheel-ui-website/#/