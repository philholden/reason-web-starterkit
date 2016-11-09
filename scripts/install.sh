npm install

OS = $(uname)

if [[ $OS -eq "Linux" ]]; then
else
  npm install -S vramana/rebel-bin#bin-2be022c5697a05c8bd1be9d565224e1bf8fbef8f-osx
fi
