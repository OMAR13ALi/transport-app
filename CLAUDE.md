# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npx expo start          # Start dev server (scan QR with Expo Go)
npx expo start --android
npx expo start --ios
npx expo start --web
npm run lint            # ESLint via expo lint
npx tsc --noEmit        # TypeScript type-check (no test suite yet)
```

## Architecture

**Expo Router v6** with file-based routing. Entry point: `expo-router/entry` (`package.json#main`). New Architecture (`newArchEnabled: true`) and React Compiler experiment are enabled.

**Route structure:**
- `app/_layout.tsx` — Root stack. Wraps in `ThemeProvider` (auto light/dark) and `AppContextProvider`. Cold-start redirects to `/onboarding` when `role === null`.
- `app/(tabs)/_layout.tsx` — Tab navigator with `HapticTab`. Two tabs: `index` (Sender) and `feed` (Driver). `RoleToggle` floats above the tab bar in `__DEV__`.
- `app/onboarding.tsx` — Role selection (Expéditeur / Chauffeur).
- `app/auth.tsx` — Phone input → OTP verification (currently mocked). Redirects to `/(tabs)/` on success.
- `app/(tabs)/index.tsx` — Sender Home: "Envoyer un colis" CTA + active shipments list.
- `app/(tabs)/feed.tsx` — Driver Feed: packages at driver's current station, station picker modal.
- `app/shipment/new.tsx` — New shipment form: from/to station picker, size selector, description.
- `app/shipment/[id].tsx` — Shipment detail: route header, 3-step status stepper, info grid, CTAs.
- `app/shipment/[id]/qr.tsx` — QR screen: static QR for Sender; scan animation + mock confirm for Driver.

**State management (`context/app-context.tsx`):**
- `role: UserRole | null` — `'sender'` or `'driver'`; `null` triggers onboarding redirect.
- `shipments: Shipment[]` — initialized from `MOCK_SHIPMENTS`; in-memory only (no persistence).
- `updateShipmentStatus(id, status)` — mutates shipment status in place.
- `addShipment(shipment)` — prepends a new shipment (used by `shipment/new`).
- `activeShipmentId` — tracks which shipment is currently focused.

**Theming system (`constants/theme.ts`):**
- `Colors` exports light/dark token maps. Key brand tokens: `primary` (#1A2E5A / #4A6FA5), `accent` (#F97316 both modes), `background`, `card`, `border`, `text`, `textSecondary`, `statusAtStation`, `statusOnRoad`, `statusArrived`.
- `hooks/use-theme-color.ts` — resolves a color token against the active scheme.
- Always use `ThemedText` / `ThemedView` over raw `Text` / `View`.

**Icons:** `lucide-react-native` for all product UI (requires `react-native-svg`). `@expo/vector-icons` only for legacy boilerplate components.

**Path alias:** `@/` → project root (`tsconfig.json`).

**Platform splits:** `.ios.tsx` / `.web.ts` suffixes auto-selected by Metro. `icon-symbol.ios.tsx` uses SF Symbols; `icon-symbol.tsx` is the Android/web fallback.

---

## Product Requirements — Louage Express

Delivery coordination app for the Louage (shared taxi) network in Tunisia. Connects **Senders** (people shipping packages) with **Drivers** (Louage drivers with spare trunk space).

### Tech Stack
- React Native (Expo) + Expo Router
- **Supabase** — Auth (Phone OTP), Database, Storage *(not yet wired up — mock data only)*
- **Lucide React Native** — Icons
- Cash-only payments for MVP — no payment gateway

### User Roles
- **Sender** — Creates shipment requests; tracks package status.
- **Driver** — Accepts packages at origin station; delivers to destination station.

### Shipment Lifecycle
1. `at_station` — Sender creates shipment (from/to, size, description).
2. Driver at origin station accepts from the feed.
3. Physical meetup → Driver scans Sender's QR → status: `on_road`.
4. Receiver scans Driver's QR at destination → status: `arrived`.

### Screen Map
| Route | Purpose |
|---|---|
| `/onboarding` | Role selection |
| `/auth` | Phone OTP login (mocked) |
| `/(tabs)/` | Sender Home — shipment list + "Envoyer un colis" |
| `/(tabs)/feed` | Driver Feed — available packages at current station |
| `/shipment/new` | New shipment form |
| `/shipment/[id]` | Shipment detail — status stepper, CTAs |
| `/shipment/[id]/qr` | QR code for pickup/delivery handoff |

### Localization
- Default language: **French**
- Secondary: Tunisian Arabic (Derja)
- Currency: **DT** (e.g. `15 DT`, not `TND`)

### Key Constraints
- Resilient on 3G/4G (shaky connectivity on Tunisian highways).
- Dark mode is a priority — drivers use phones all day.
- No payment integration for MVP.

---

## Implementation Status

Phases A–E are complete (foundation, onboarding/auth, tab infrastructure, core screens, detail screens). Remaining work:

### Phase F — Polish
- [ ] Dark mode audit on every screen
- [ ] All UI strings in French
- [ ] `npx tsc --noEmit` — zero errors
- [ ] Wire up Supabase (Auth, DB, Storage) to replace mock data

---

### French String Reference

| Context | String |
|---|---|
| Onboarding | "Je suis Expéditeur" / "Je suis Chauffeur" |
| Auth | "Connexion", "Envoyer le code", "Vérifier" |
| Sender home | "Mes envois", "Envoyer un colis", "Aucun envoi en cours" |
| Driver feed | "Colis disponibles", "Vous êtes à:", "Accepter" |
| Status | "À la station" / "En route" / "Livré" |
| QR sender | "Montrez ce code au chauffeur" |
| QR driver | "Scannez le code du destinataire" |
| Currency | "15 DT" (not TND) |
