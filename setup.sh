#!/bin/bash
# Update package lists
sudo apt update
# Install Python and pip if not already installed
sudo apt install python3 python3-pip python3-venv -y
# Create virtual environment
python3 -m venv venv
# Activate virtual environment
source venv/bin/activate
# Upgrade pip
pip install --upgrade pip
# Install dependencies
pip install -r backend/requirements.txt