nolabel: fluid
=======

nolabel implementerat i en fluid grid.

## Struktur

[Skeleton Grid](http://www.getskeleton.com) används som "nollställare" och grund. Eftersom denna grid är statisk har stora delar kommenterats bort. Dessa delar laddas visserligen in och kostar bandbredd, en CSS-compressor i stil med http://refresh-sf.com/yui/ som rensar bort kommentarer och whitespace kan användas om man inte redan implementerar i ett system som gör det automatiskt (CSS Minify i Wordpress eller Drupals Performace).

## Plugins

[Nivo Slider](http://nivo.dev7studios.com) för bildspelet, samt jQuery 1.8 för att driva den. [Lojjic's PIE](https://github.com/lojjic/PIE) används för att få in CSS3-funktioner i IE8.

## Uppskattad tidsåtgång

 * 4-5 timmar för att göra mallen för 1600px.
 * 1-2 timmar för att få den att skala ner till 1024px.
 * 2 timmar för att få den att skala ner till 320px.
 * Cirka 1-2 timmar för bakåtkompabilitet med IE8.

## Kompabilitet

För äldre browsers som Internet Explorer 8 kommer jag implementera en JS-fallback där body-taggen ges en class beroende på fönstrets storlek, denna class samt PIE kan sen användas för att ge IE-användarna samma upplevelse som de med modernare webbläsare.

## Övrigt

Ställer in bilder och bakgrunder som "retina"-anpassade, det vill säga att sajten kommer att leverera bakgrundsbilder med högre upplösning till de webbläsare som vill (t.ex. iPhone 4, iPad 3 och nyare) samt vissa vanliga bilder, tex. logotypen där en större bild inte gör märkbar skillnad i nedladdningstid.

Alla bilder komprimeras med hjälp av [ImageOptim](http://pornel.net/imageoptim/en) för att spara bandbredd och snabba upp nedladdningen.