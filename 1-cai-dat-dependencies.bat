@echo off
title Cai dat thu vien UEH Parent Connect Pro
chcp 65001 >nul
echo =======================================================
echo   UEH PARENT CONNECT PRO - CAI DAT DEPENDENCIES
echo =======================================================
echo.
echo Dang kiem tra Node.js...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [CHU Y] May tinh chua tim thay Node.js!
    echo Vui long tai va cai dat Node.js tai: https://nodejs.org
    echo Chon ban LTS (Recommended for Most Users) roi cai dat tiep tuc.
    echo.
    pause
    exit /b
)

echo [OK] Da tim thay Node.js:
node -v
echo.
echo [1/2] Dang cai dat Backend (Express + TypeScript)...
cd /d "%~dp0backend"
call npm install
if %errorlevel% neq 0 (
    echo [LOI] Co loi khi cai dat Backend.
    pause
    exit /b
)

echo.
echo [2/2] Dang cai dat Frontend (React + Vite + TailwindCSS)...
cd /d "%~dp0frontend"
call npm install
if %errorlevel% neq 0 (
    echo [LOI] Co loi khi cai dat Frontend.
    pause
    exit /b
)

echo.
echo =======================================================
echo CAI DAT HOAN TAT THANH CONG!
echo Bay gio ban co the nhap dup chuot vao:
echo "2-chay-du-an.bat" de khoi dong toan bo he thong.
echo =======================================================
pause
