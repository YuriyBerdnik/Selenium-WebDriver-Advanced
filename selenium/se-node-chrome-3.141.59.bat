set SERVER_VERSION=3.141.59
set REGISTER_IP=localhost:4444
set CHROME_DRIVER=.\chromedriver.exe
set GECKO_DRIVER=.\geckodriver.exe
set EDGE_DRIVER=.\msedgedriver.exe
set NODE_CONFIG=se-node-config.json

REM java -Dwebdriver.chrome.driver=%CHROME_DRIVER% -jar selenium-server-standalone-%SERVER_VERSION%.jar -role node -hub http://%REGISTER_IP%/grid/register -browser "browserName=chrome,version=81,maxinstance=5,platform=WINDOWS" -port %HUB_PORT%
java -Dwebdriver.edge.driver=%EDGE_DRIVER% -Dwebdriver.gecko.driver=%GECKO_DRIVER% -Dwebdriver.chrome.driver=%CHROME_DRIVER% -jar selenium-server-standalone-%SERVER_VERSION%.jar -role node -hub http://%REGISTER_IP%/grid/register -nodeConfig %NODE_CONFIG%

pause
