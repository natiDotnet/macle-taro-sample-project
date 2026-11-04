# Macle Taro Mini Program (React + Tailwind CSS + Macle)

This project demonstrates developing Mini Programs with **Taro 4 + React 18 + Tailwind CSS** targeting the **Macle** miniprogram engine.

---

## 🎨 Tailwind CSS Support

Tailwind CSS utility classes are fully supported for Macle Mini Programs:
- **Automatic Class Escaping**: Handled via `weapp-tailwindcss` so special characters (`/`, `[`, `:`, `.`) are safely transformed for Macle's template and style engines.
- **Responsive Pixel Conversion**: All `rem` units are automatically converted to `rpx` (`rem2rpx: true`) based on 750 design width.
- **Native Macle Stylesheet Matching**: Custom `.mass` and `.macss` style files are automatically detected and transformed.

### Configuration

- **[`tailwind.config.js`](file:///home/f/nati/macle/sample-project/tailwind.config.js)**: Configured with `corePlugins: { preflight: false }` to avoid global tag resets that conflict with mini program components.
- **[`postcss.config.js`](file:///home/f/nati/macle/sample-project/postcss.config.js)**: PostCSS pipeline with `tailwindcss` and `autoprefixer`.
- **[`config/index.ts`](file:///home/f/nati/macle/sample-project/config/index.ts)**: Configured with `@tarojs/plugin-platform-macle` with `tailwindcss: true`.

---

## 🚀 Getting Started

### 1. Build the Mini Program

```bash
# Build for development with file watch
npm run dev:macle

# Or production build
npm run build:macle
```

### 2. Run the Simulator

#### A. Web Browser Simulator (Recommended on Linux & Headless Environments)

Launches the pure Node.js simulator server with interactive device framing and touch emulation:

```bash
npm run simulate:web
```

Open your browser at:
- **Device Frame UI**: [http://localhost:30002/](http://localhost:30002/)
- **Direct Simulator**: [http://localhost:30002/dist/root/debug/simulator/](http://localhost:30002/dist/root/debug/simulator/)

#### B. Linux Native Electron Simulator

Launches the Electron desktop simulator app on Linux:

```bash
npm run simulate:desktop
```

---

## 🛠 Features Tested & Verified

- **Tailwind CSS Utility Styling**: Gradients (`bg-gradient-to-r`), flexbox layouts, rounded corners, spacing, colors, and responsive units (`rpx`).
- **Virtual DOM & Reactivity**: React 18 reconciler dispatches state changes to Macle's `setData` and updates the view layer DOM in real time.
- **Two-Way Binding**: `<Input>` and live value preview.
- **Macle Native Bridge**: `ma.*` API proxy bridge (`ma.tradePay`, `Taro.showToast`, etc.).
- **Automatic Compilation**: The simulator automatically transpiles Taro `.maml` / `.mass` output using `@macle/compiler` into the simulator runtime folder.
