# Inizializza il progetto
```
npm init -y
```

# Installa le dipendenze
```
# Dipendenze di sviluppo
npm install -D typescript @types/node tsx
```

# Dipendenze (se necessarie)
```
npm install esbuild get-tsconfig resolve-pkg-maps
```

# Modifica il package.json
Apri package.json e aggiungi/modifica:

```
npm pkg set type="module"
npm pkg set main="src/index.ts"
npm pkg set scripts.build="tsc -w"
npm pkg set scripts.start="node dist/index.js"
npm pkg set scripts.dev="tsx watch src/index.ts"
```

Oppure modifica manualmente il file aggiungendo "type": "module" e gli script.

# Crea la configurazione TypeScript
```
tsc --init
```

Poi modifica tsconfig.json per ESM:
```
json{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

# Crea la struttura
```
mkdir src
touch src/index.ts
```

# Esempio src/index.ts
```
console.log("Hello from TypeScript!");
```

# Avvia il progetto
```
# Sviluppo con hot reload
npm run dev
```
```
# Build in watch mode
npm run build
```
```
# Esegui il codice compilato
npm start
```