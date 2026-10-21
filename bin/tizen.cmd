@echo off
where tizen >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Tizen CLI not found in PATH.
    echo Install the official Tizen SDK or Tizen Studio first:
    echo https://developer.tizen.org/development/tizen-studio/download
    echo https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html
    echo.
    echo Then add the SDK tools to PATH and retry.
    exit /b 1
)

tizen %*
