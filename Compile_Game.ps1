if (Test-Path "zCompiled/Survival Game.html") {
    "Meow meow!"
    Remove-Item ".\zCompiled\Survival Game.html"
} 

tweego -o "zCompiled/Survival Game.html" "."
& '.\zCompiled\Survival Game.html'