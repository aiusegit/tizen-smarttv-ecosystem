#!/usr/bin/env bash
set -e

if command -v tizen >/dev/null 2>&1; then
  echo "Tizen SDK found: $(command -v tizen)"
  echo "CLI ready to use."
  tizen --help | head -n 20
else
  echo "Tizen CLI not found in PATH."
  echo "Install the official Tizen SDK or Tizen Studio first:"
  echo "https://developer.tizen.org/development/tizen-studio/download"
  echo "https://developer.samsung.com/smarttv/develop/tools/tv-extension/download.html"
  echo ""
  echo "Then add the SDK bin directory to the PATH variable and run this script again."
  exit 1
fi
