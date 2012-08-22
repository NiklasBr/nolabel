nolabel
=======

## Struktur

[Skeleton Grid](http://www.getskeleton.com) används som "nollställare" och grund.

## Plugins

[Nivo Slider](http://nivo.dev7studios.com) för bildspelet, samt jQuery 1.8 för att driva den.

## Uppskattad tidsåtgång

 * 3-4 timmar för att göra mallen för 1024px (inklusive att skapa detta dokument och repository).
 * Därefter cirka 1-2h för den mobila 320px-varianten, där den kommer testas både i iOS och Android 4.1
 * Cirka 1 timme för mallen på 1600px
 * Cirka 1 timme för bakåtkompabilitet med FF3.6.x

## Kompabilitet

För äldre browsers som FireFox 3.6.x kommer jag implementera en JS-fallback där body-taggen ges en class beroende på fönstrets storlek, denna class kan sen användas för att ge FF-användarna samma upplevelse som de med modernare webbläsare.

## Övrigt

Ställer in bilder och bakgrunder som "retina"-anpassade, det vill säga att sajten kommer att leverera bakgrundsbilder med högre upplösning till de webbläsare som vill (t.ex. iPhone 4, iPad 3 och nyare) samt vissa vanliga bilder, tex. logotypen där en större bild inte gör märkbar skillnad i nedladdningstid.

Alla bilder komprimeras med hjälp av [ImageOptim](http://pornel.net/imageoptim/en) för att spara bandbredd och snabba upp nedladdningen.