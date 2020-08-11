echo image_file_list = [ > image_file_list.json
:: Replace %cd% with path of the folder containing images, %cd% for current folder
set imagePath=%cd%
setlocal enabledelayedexpansion
for /f "tokens=*" %%g in ('where "%imagePath%:*.jpg" "%imagePath%:*.png"') do (set "filepath=%%g" & set "filepath=file:///!filepath:\=/!" & echo "!filepath!", >> image_file_list.json)
echo ] >> image_file_list.json