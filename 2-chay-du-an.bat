@echo off
title Khoi dong UEH Parent Connect Pro
chcp 65001 >nul
echo =======================================================
echo   UEH PARENT CONNECT PRO - KHOI DONG HE THONG
echo =======================================================
echo.
echo Dang khoi dong Backend API va Frontend UI...
echo.

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [CHU Y] May tinh chua tim thay Node.js!
    echo Vui long tai va cai dat Node.js tai: https://nodejs.org
    echo.
    pause
    exit /b
)

start "UEH Parent Connect - Backend API (Port 5000)" cmd /k "cd /d "%~dp0backend" && npm run dev"
timeout /t 3 /nobreak >nul

start "UEH Parent Connect - Frontend UI (Port 5173)" cmd /k "cd /d "%~dp0frontend" && npm run dev"

echo.
echo =======================================================
echo Da khoi dong ca 2 services thanh cong:
echo  - Backend API:  http://localhost:5000
echo  - Frontend Web: http://localhost:5173
echo.
echo Trinh duyet se tu dong mo trang web trong giay lat...
echo =======================================================
timeout /t 4 /nobreak >nul
start http://localhost:5173
