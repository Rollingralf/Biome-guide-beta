# 🚀 Hoe je een Windows .EXE Installer maakt

## Stap 1: Prerequisites Installeren

### 1. Node.js en npm
- Download van: https://nodejs.org/ (LTS versie)
- Installeer en herstart je computer

### 2. Dependencies installeren
Open Command Prompt in je projectfolder:
```bash
cd Biome-guide-beta
npm install
```

Dit zal even duren, wacht geduldig.

## Stap 2: De .EXE Installer Bouwen

```bash
npm run build-win
```

### Wat gebeurt er:
1. De app wordt gebuild
2. Electron-builder maakt een Windows installer
3. Files worden in de `dist/` folder geplaatst

### Bestanden die je krijgt:
- `Minecraft Biome Guide Setup 1.0.0.exe` - Installatie wizard (aanbevolen)
- `Minecraft Biome Guide-1.0.0-Portable.exe` - Draagbare versie (geen installatie nodig)

## Stap 3: Distribueer de .EXE

De `.exe` files zijn standalone en kunnen:
- ✅ Direct gedownload worden
- ✅ Direct uitgevoerd worden
- ✅ Met vrienden gedeeld worden
- ✅ Op USB stick gezet worden

## Als iets niet werkt:

### "npm: command not found"
→ Node.js niet correct geïnstalleerd. Herstart computer na installatie.

### "dist folder is empty"
→ Wacht tot `npm run build-win` volledig klaar is (3-10 minuten)

### "Icon not found"
→ Dit is niet kritiek, de app werkt nog steeds

## Tips:

1. **Eerste keer**: Het bouwen duurt langer (5-10 minuten)
2. **Volgende keer**: Sneller (1-3 minuten)
3. **Test de EXE**: Download je eigen .exe en test deze voor je deelt

---

**Klaar!** Nu kunnen iedereen de app gebruiken zonder npm! 🎉
