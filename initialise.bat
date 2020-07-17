echo image_file_list = [ > image_file_list.json
setlocal enabledelayedexpansion
:: replace the . following 'where' with the path of the folder where images are
for /f "tokens=*" %%x in ('where "E:\j:*.jpg"') do (set "filepath=%%x" & set "filepath=file:///!filepath:\=/!" & echo "!filepath!", >> image_file_list.json) 
echo ] >> image_file_list.json