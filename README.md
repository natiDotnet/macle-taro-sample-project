# Macle Taro Mini Program (React + Macle)

This project demonstrates developing Mini Programs with **Taro 4 + React 18** targeting the **Macle** miniprogram engine.

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

- **Virtual DOM & Reactivity**: React 18 reconciler dispatches state changes to Macle's `setData` and updates the view layer DOM in real time.
- **Two-Way Binding**: `<Input>` and live value preview.
- **Macle Native Bridge**: `ma.*` API proxy bridge (`ma.tradePay`, `Taro.showToast`, etc.).
- **Automatic Compilation**: The simulator automatically transpiles Taro `.maml` / `.mass` output using `@macle/compiler` into the simulator runtime folder.

