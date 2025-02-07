#!/usr/bin/python3

print("hello")

with open("test.txt", "a") as myfile:
    myfile.write("appendedasd text\n")