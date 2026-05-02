@echo off
echo ========================================
echo  AN KHANG CLEAN - Khoi dong Website
echo ========================================
echo.
echo Backend : http://localhost:5022
echo Frontend: http://localhost:5174
echo.

start "An Khang Backend" cmd /k "cd /d "%~dp0backend" && node server.js"
timeout /t 2 /nobreak >nul
start "An Khang Frontend" cmd /k "cd /d "%~dp0frontend" && npm run dev"
timeout /t 3 /nobreak >nul
start "" http://localhost:5174

echo Dang khoi dong...
echo Nhan phim bat ky de dong cua so nay.
pause >nul
