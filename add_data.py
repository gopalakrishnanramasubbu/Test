#!/usr/bin/env python3
import sys
from datetime import datetime

def add_data(filename="data.txt", data=None):
    if data is None:
        data = input("Enter data to add: ")
    
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(filename, "a") as f:
        f.write(f"[{timestamp}] {data}\n")
    print(f"Data added to {filename}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        add_data(data=" ".join(sys.argv[1:]))
    else:
        add_data()
