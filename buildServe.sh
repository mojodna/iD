sudo make
ifconfig | awk -v RS="\n\n" '{ for (i=1; i<=NF; i++) if ($i == "inet" && $(i+1) ~ /^addr:/) address = substr($(i+1), 6); if (address != "127.0.0.1") printf "\033[34m%s\033[0m\t\033[33m%s\033[0m\n", $1, address }'
python -m SimpleHTTPServer $1

