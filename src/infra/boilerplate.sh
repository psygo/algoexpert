#!/bin/sh

DIR=$1
PROBLEM=$2

TS=./src/"$DIR"/"$PROBLEM".ts
TS_TEST=./src/"$DIR"/"$PROBLEM".test.ts

touch "$TS"
code -r "$TS"

touch "$TS_TEST"
code -r "$TS_TEST"